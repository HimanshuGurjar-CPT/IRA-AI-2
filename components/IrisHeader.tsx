import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";

const IrisHeader = () => {
  return (
    <View>
      <Image source={require("@/assets/logo.png")} className="w-12 h-12" />
      <Text className="text-green-400 text-xl">IRIS</Text>
    </View>
  );
};

export default IrisHeader;
