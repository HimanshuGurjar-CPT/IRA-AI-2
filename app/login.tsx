import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const login = () => {
  return (
    <View className="flex-1 items-center justify-center bg-blue-400">
      <Text className="text-xl font-bold text-blue-500">Login</Text>
      <Link
        href="/"
        className="px-8 py-4 text-black bg-primary rounded-xl mt-4 cursor-pointer"
      >
        Back to Home
      </Link>
    </View>
  );
};

export default login;
