import icons from "@/constants/icons";
import { Image } from "expo-image";
import React from "react";
import { View } from "react-native";

const IrisHeader = () => {
  return (
    <View className="flex flex-row items-center gap-2">
      <Image source={icons.logo} style={{ width: 100, height: 80 }} />
    </View>
  );
};

export default IrisHeader;
