import { CheckCircle2 } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";

const CommandCard = () => {
  return (
    // Outer container adds side padding so it doesn't touch the screen edges
    <View className="flex-1 items-center justify-center">
      {/* The Main Card Background */}
      <View className="bg-card p-8 rounded-4xl border border-white/5 border-l-[3px] border-l-main">
        {/* Header */}
        <Text className="text-muted text-sm tracking-[2px] uppercase font-mono mb-3">
          Last Command
        </Text>

        {/* The Spoken Command */}
        <Text className="text-[#F4F4F4] text-lg font-sans italic mb-4 leading-6">
          "Hey IRIS, message Rahul I'll call in 10"
        </Text>

        {/* Faint Divider Line */}
        <View className="h-px bg-white/5 w-full mb-4" />

        {/* Execution Result */}
        <View className="flex-row items-center">
          <CheckCircle2 color="#00ff55" size={16} strokeWidth={2} />
          <Text className="text-main font-mono text-sm ml-3">
            WhatsApp sent to Rahul Sharma
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CommandCard;
