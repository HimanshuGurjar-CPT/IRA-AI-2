import IrisHeader from "@/components/IrisHeader";
import VoiceNode from "@/components/VoiceNode";
import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const index = () => {
  return (
    <SafeAreaView className="flex-1 bg-black p-5">
      <IrisHeader />
      <VoiceNode />
    </SafeAreaView>
  );
};

export default index;
