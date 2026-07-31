import CommandCard from "@/components/CommandCard";
import IrisHeader from "@/components/IrisHeader";
import VoiceNode from "@/components/VoiceNode";
import { styled } from "nativewind";
import { ScrollView } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const index = () => {
  return (
    <SafeAreaView className="flex-1 bg-black p-5">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        <IrisHeader />
        <VoiceNode />
        <CommandCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
