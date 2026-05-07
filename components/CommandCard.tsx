import React from "react";
import { Text, View } from "react-native";

const CommandCard = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <View className="bg-background p-6 rounded-3xl border border-white/5">
        <Text className="text-main text-2xl ">CommandCard</Text>
      </View>
    </View>
  );
};

export default CommandCard;
