import { SignalHighIcon } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";

const IrisHeader = () => {
  return (
    <>
      <View className="h-24 bg-green-400 w-full flex-row">
        <SignalHighIcon color="white" size={28} />
      </View>
      <View>
        <Text className="text-white text-xl mt-4 text-center font-outfit-medium">
          IRIS-X
        </Text>
        <Text className="text-white text-xl mt-4 text-center font-outfit-medium">
          Artificial Intelligence
        </Text>
      </View>
    </>
  );
};

export default IrisHeader;
