import { Mic } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const VoiceNode = () => {
  return (
    <View className="items-center justify-center my-10">
      {/* === Concentric Radar Rings === */}
      {/* Outer Ring */}
      <View className="h-72 w-72 rounded-full border border-primary/10 absolute items-center justify-center" />
      {/* Middle Ring */}
      <View className="h-56 w-56 rounded-full border border-primary/20 absolute items-center justify-center" />
      {/* Inner Ring */}
      <View className="h-40 w-40 rounded-full border border-primary/40 absolute items-center justify-center" />

      {/* === Main Core Button === */}
      {/* We use TouchableOpacity so clicking the mic can act as your "Stop" button */}
      <TouchableOpacity
        activeOpacity={0.6}
        className="w-24 h-24 rounded-full border border-main/50 bg-muted/30 flex items-center justify-center"
      >
        {/* Note: SVG color props still need the raw hex, so we use your --color-main hex here */}
        <Mic color="#00ff55" size={36} strokeWidth={1.5} />
      </TouchableOpacity>

      {/* === Status Text === */}
      <Text className="text-main font-outfit-medium text-xs tracking-[0.4em] uppercase mt-14">
        Listening...
      </Text>
    </View>
  );
};

export default VoiceNode;
