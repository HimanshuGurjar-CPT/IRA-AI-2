import { CheckCircle2 } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";

const CommandCard = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <View className="bg-card-2 p-8 rounded-4xl border border-white/40 border-l-[3px] border-l-main">
        <Text className="text-muted text-sm tracking-tight uppercase font-outfit-regular mb-3">
          Last Command
        </Text>

        <Text className="text-white text-lg font-antonio-medium tracking-wide mb-4 leading-6">
          "Hey IRIS, message Rahul I'll call in 10"
        </Text>

        <View className="h-px bg-white/5 w-full mb-4" />

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
