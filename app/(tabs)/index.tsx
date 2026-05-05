import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const index = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-black">
      <Text className="text-white text-6xl">IRIS-X</Text>
      <Text className="text-white text-lg mt-4 text-center">
        Your AI Assistatant is Here 🤖
      </Text>
    </SafeAreaView>
  );
};

export default index;
