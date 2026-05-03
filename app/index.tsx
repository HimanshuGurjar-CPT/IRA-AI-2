import "@/global.css";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>

      <Link href="/login" asChild>
        <Pressable className="p-4 bg-red-500 rounded mt-4">
          <Text className="text-black">Login</Text>
        </Pressable>
      </Link>
    </View>
  );
}
