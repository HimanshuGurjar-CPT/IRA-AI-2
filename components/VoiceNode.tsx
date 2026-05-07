import { Mic } from "lucide-react-native";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Pressable, Text, View } from "react-native";

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
        ])
      ).start();
    } else {
      pulseAnim.stopAnimation();
      pulseAnim.setValue(0);
    }
  }, [listening]);

  const borderColor = pulseAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgba(26,255,110,0.35)", "rgba(26,255,110,1)"],
  });

  return (
    <View className="flex-1 items-center justify-center bg-black">

      {/* Outer ring 3 */}
      <View
        style={{ width: 220, height: 220, borderRadius: 110, borderWidth: 0.5, borderColor: "#0a150a" }}
        className="items-center justify-center"
      >
        {/* Outer ring 2 */}
        <View
          style={{ width: 182, height: 182, borderRadius: 91, borderWidth: 0.5, borderColor: "#0f200f" }}
          className="items-center justify-center"
        >
          {/* Outer ring 1 */}
          <View
            style={{ width: 146, height: 146, borderRadius: 73, borderWidth: 1, borderColor: "rgba(26,255,110,0.08)" }}
            className="items-center justify-center"
          >

            {/* Orb — animated border when listening */}
            <Animated.View
              style={{
                width: 112,
                height: 112,
                borderRadius: 56,
                borderWidth: 1.5,
                borderColor: listening ? borderColor : "rgba(26,255,110,0.4)",
                backgroundColor: "#000",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Mic color="#1aff6e" size={36} strokeWidth={1.5} />
            </Animated.View>

          </View>
        </View>
      </View>

      {/* Label */}
      <Text
        style={{
          marginTop: 20,
          fontSize: 11,
          letterSpacing: 3,
          textTransform: "uppercase",
          fontFamily: "JetBrainsMono",
          color: listening ? "#1aff6e" : "#1a3a1a",
        }}
      >
        {listening ? "listening..." : "tap to speak"}
      </Text>
        
      {/* Tap to speak / Stop button */}
      <View className="mt-8">
        {!listening ? (
          <Pressable
            onPress={() => setListening(true)}
            style={{
              borderWidth: 0.5,
              borderColor: "rgba(26,255,110,0.4)",
              borderRadius: 8,
              paddingVertical: 10,
              paddingHorizontal: 28,
              backgroundColor: "#050f05",
            }}
          >
            <Text
              style={{
                color: "#1aff6e",
                fontSize: 11,
                letterSpacing: 2,
                textTransform: "uppercase",
                fontFamily: "JetBrainsMono",
              }}
            >
              Speak
            </Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => setListening(false)}
            style={{
              borderWidth: 0.5,
              borderColor: "rgba(255,60,60,0.5)",
              borderRadius: 8,
              paddingVertical: 10,
              paddingHorizontal: 28,
              backgroundColor: "#0f0505",
            }}
          >
            <Text
              style={{
                color: "#ff4444",
                fontSize: 11,
                letterSpacing: 2,
                textTransform: "uppercase",
                fontFamily: "JetBrainsMono",
              }}
            >
              Stop
            </Text>
          </Pressable>
        )}
      </View>

    </View>
  );
};

export default VoiceNode;