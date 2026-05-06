import IrisHeader from "@/components/IrisHeader";
import { styled } from "nativewind";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const index = () => {
  return (
    <SafeAreaView className="flex-1 bg-black p-5">
      <IrisHeader />
      <Text className="text-white text-6xl mt-20 font-antonio-bold">
        IRIS-X
      </Text>
      <Text className="text-white text-xl mt-4 text-center font-outfit-light">
        Your AI Assistatant is Here 🤖
      </Text>
      <View className="flex-1">
        <TouchableOpacity className="bg-white rounded-full py-3 px-5">
          <Text className="text-black text-center font-outfit-medium">
            Start Chat
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default index;
