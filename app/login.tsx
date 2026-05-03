import { Link } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const login = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">Login</Text>

      <Link href="/" asChild>
        <Pressable className="px-8 py-4 bg-red-500 rounded-xl mt-4">
          <Text className="text-black">Back to Home</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default login;
