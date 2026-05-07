import { Mic } from "lucide-react-native";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Pressable, Text, View } from "react-native";

// We wrap Pressable in Animated to allow dynamic styling on the button itself
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const VoiceNode = () => {
  const [listening, setListening] = useState(false);

  // Pulse animation for the orb border when listening
  const pulseAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (listening) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 1400,
            useNativeDriver: false,
          }),
          Animated.timing(pulseAnim, {
            toValue: 0,
            duration: 1400,
            useNativeDriver: false,
          }),
        ]),
      ).start();
    } else {
      pulseAnim.stopAnimation();
      pulseAnim.setValue(0);
    }
  }, [listening]);

  // Using rgb values of your --color-main (#00ff55) for the animation
  const borderColor = pulseAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgba(0, 255, 85, 0.35)", "rgba(0, 255, 85, 1)"],
  });

  return (
    <View className="flex-1 items-center justify-center bg-background">
      {/* Outer ring 3 */}
      <View className="w-55 h-55 rounded-full border-[0.5px] border-[#0a150a] items-center justify-center">
        {/* Outer ring 2 */}
        <View className="w-45.5 h-45.5 rounded-full border-[0.5px] border-[#0f200f] items-center justify-center">
          {/* Outer ring 1 */}
          <View className="w-36.5 h-36.5 rounded-full border border-main/10 items-center justify-center">
            {/* Interactive Orb — Toggles state on press */}
            <AnimatedPressable
              onPress={() => setListening(!listening)}
              className="w-28 h-28 rounded-full border-[1.5px] bg-background items-center justify-center"
              style={{
                borderColor: listening ? borderColor : "rgba(0, 255, 85, 0.4)",
              }}
            >
              <Mic color="#00ff55" size={36} strokeWidth={1.5} />
            </AnimatedPressable>
          </View>
        </View>
      </View>

      {/* Dynamic Label */}
      <Text
        className={`mt-8 text-[11px] tracking-[3px] uppercase font-mono ${
          listening ? "text-main" : "text-muted"
        }`}
      >
        {listening ? "listening..." : "tap to speak"}
      </Text>
    </View>
  );
};

export default VoiceNode;
