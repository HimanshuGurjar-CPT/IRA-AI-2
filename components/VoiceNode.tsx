import { Mic } from "lucide-react-native";
import React from "react";
import { Pressable, Text, View } from "react-native";

const VoiceNode = () => {
  return (
    <View className="flex-1 items-center justify-center gap-4">
      <View className="w-24 h-24 rounded-full bg-zinc-800 border border-zinc-600 flex items-center justify-center">
        <Mic color="#4ADE80" size={40} />
      </View>
      <Text className="text-white text-xl font-outfit-medium">
        Listening...
      </Text>
      <Pressable className="bg-red-600 py-2 px-6 rounded-full">
        <Text className="text-white font-outfit-bold">Stop</Text>
      </Pressable>
    </View>
  );
};

export default VoiceNode;
