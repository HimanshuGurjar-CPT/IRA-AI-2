import icons from "@/constants/icons";
import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";

const IrisHeader = () => {
  return (
    <View>
      <Image source={icons.logo} className="w-12 h-12" />
      <Text className="text-green-400 text-xl">IRIS</Text>
    </View>
  );
};

export default IrisHeader;
