import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <Link
        href="/login"
        className="p-4 bg-primary text-white rounded-xl mt-4 cursor-pointer"
      >
        Login
      </Link>
    </View>
  );
}
