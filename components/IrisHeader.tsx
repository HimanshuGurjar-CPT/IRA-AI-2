import icons from "@/constants/icons";
import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";

const IrisHeader = () => {
  return (
    <View className="flex flex-row items-center gap-2">
      <Image
        source={icons.logo}
        style={{ width: 50, height: 50 }}
        contentFit="contain"
      />
      <Text className="text-white text-4xl font-bold text-center">IRIS</Text>
    </View>
  );
};

export default IrisHeader;
