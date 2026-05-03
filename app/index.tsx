import "@/global.css";
import { Link } from "expo-router";
import { Text, View, Pressable } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      
      {/* Use asChild and style the Pressable instead */}
      <Link href="/login" asChild>
        <Pressable className="p-4 bg-primary rounded-xl mt-4">
          <Text className="text-black">Login</Text>
        </Pressable>
      </Link>
    </View>
  );
}