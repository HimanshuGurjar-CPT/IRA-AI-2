import {
  Check,
  ChevronRight,
  CircleDot,
  Lock,
  Menu,
  Mic,
  PlusSquare,
} from "lucide-react-native";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function NeuralInterface() {
  return (
    <SafeAreaView className="flex-1 bg-darkBg">
      <StatusBar barStyle="light-content" />

      <ScrollView
        className="flex-1 px-6 pt-4"
        showsVerticalScrollIndicator={false}
      >
        {/* === TOP HEADER === */}
        <View className="flex-row justify-between items-center mb-6">
          <Text className="text-white font-display text-4xl tracking-widest">
            IRIS-<Text className="text-primary">X</Text>
          </Text>

          <View className="flex-row space-x-3 items-center">
            <View className="border border-primary/50 rounded-full px-3 py-1">
              <Text className="text-primary font-mono text-xs">62% NB</Text>
            </View>
            <View className="h-8 w-8 rounded-full border border-primary/50 items-center justify-center">
              <Text className="text-primary font-display">H</Text>
            </View>
          </View>
        </View>

        {/* === BANDWIDTH METER === */}
        <View className="border border-primary/20 rounded-xl p-3 flex-row items-center justify-between bg-cardBg mb-12">
          <Text className="text-primary/50 font-mono text-xs uppercase tracking-widest">
            Neural Bandwidth
          </Text>
          <View className="flex-1 h-1 bg-primary/20 mx-4 rounded-full overflow-hidden">
            <View className="h-full bg-primary w-[62%]" />
          </View>
          <Text className="text-primary font-mono text-xs">62/100</Text>
        </View>

        {/* === CENTRAL VOICE NODE === */}
        <View className="items-center justify-center mb-12">
          {/* Outer Ripple 2 */}
          <View className="h-64 w-64 rounded-full border border-primary/5 items-center justify-center absolute" />
          {/* Outer Ripple 1 */}
          <View className="h-48 w-48 rounded-full border border-primary/10 items-center justify-center absolute" />

          {/* Main Button */}
          <TouchableOpacity
            activeOpacity={0.7}
            className="h-32 w-32 rounded-full border border-primary/30 bg-primary/5 items-center justify-center"
          >
            <Mic size={40} color="#00FF41" strokeWidth={1.5} />
          </TouchableOpacity>

          <Text className="text-primary/40 font-mono text-xs tracking-[0.3em] uppercase mt-8">
            Tap to Speak
          </Text>
        </View>

        {/* === LAST COMMAND CARD === */}
        <View className="bg-cardBg border border-primary/20 rounded-2xl p-5 mb-8">
          <Text className="text-primary/40 font-mono text-[10px] tracking-widest uppercase mb-3">
            Last Command
          </Text>
          <Text className="text-white font-sans text-base mb-4 leading-6">
            "Hey IRIS, message Rahul I'll call in 10"
          </Text>

          <View className="h-[1px] bg-primary/10 w-full mb-4" />

          <View className="flex-row items-center">
            <Check size={16} color="#00FF41" />
            <Text className="text-primary font-mono text-xs ml-2">
              Done — WhatsApp sent to Rahul Sharma
            </Text>
          </View>
        </View>

        {/* === RECENT COMMANDS LIST === */}
        <Text className="text-primary/40 font-mono text-[10px] tracking-widest uppercase mb-4 ml-1">
          Recent Commands
        </Text>

        <View className="space-y-3 mb-8">
          <CommandItem title="Set DND and dim screen" time="2 min ago" />
          <CommandItem
            title="Play focus playlist on Spotify"
            time="18 min ago"
          />
          <CommandItem title="Read last 3 emails from work" time="1 hr ago" />
        </View>

        {/* === METRICS ROW === */}
        <View className="flex-row justify-between space-x-4 mb-24">
          <View className="flex-1 bg-cardBg border border-primary/10 rounded-2xl p-5">
            <Text className="text-primary font-display text-4xl mb-1">47</Text>
            <Text className="text-primary/50 font-mono text-[10px] tracking-widest uppercase">
              Commands{"\n"}Today
            </Text>
          </View>
          <View className="flex-1 bg-cardBg border border-primary/10 rounded-2xl p-5">
            <Text className="text-primary font-display text-4xl mb-1">3</Text>
            <Text className="text-primary/50 font-mono text-[10px] tracking-widest uppercase">
              Flows{"\n"}Active
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* === BOTTOM NAVIGATION MOCKUP === */}
      {/* If using Expo Router, this would be in your _layout.tsx as Tabs */}
      <View className="flex-row justify-between items-center px-8 py-6 bg-darkBg border-t border-white/5 pb-10 absolute bottom-0 w-full">
        <View className="items-center">
          <CircleDot size={24} color="#00FF41" />
          <Text className="text-primary font-mono text-[9px] tracking-widest mt-2">
            NEURAL
          </Text>
        </View>
        <View className="items-center opacity-40">
          <Menu size={24} color="#00FF41" />
          <Text className="text-primary font-mono text-[9px] tracking-widest mt-2">
            FLOWS
          </Text>
        </View>
        <View className="items-center opacity-40">
          <PlusSquare size={24} color="#00FF41" />
          <Text className="text-primary font-mono text-[9px] tracking-widest mt-2">
            APPS
          </Text>
        </View>
        <View className="items-center opacity-40">
          <Lock size={24} color="#00FF41" />
          <Text className="text-primary font-mono text-[9px] tracking-widest mt-2">
            VAULT
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

// Reusable Component for the List
function CommandItem({ title, time }: { title: string; time: string }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="bg-cardBg border border-primary/10 rounded-xl p-4 flex-row items-center justify-between"
    >
      <View className="flex-row items-center flex-1">
        <View className="h-2 w-2 rounded-full bg-primary/70 mr-4" />
        <View>
          <Text className="text-gray-200 font-sans text-sm">{title}</Text>
          <Text className="text-primary/40 font-mono text-[10px] mt-1">
            {time}
          </Text>
        </View>
      </View>
      <ChevronRight size={16} color="#00FF41" opacity={0.3} />
    </TouchableOpacity>
  );
}
