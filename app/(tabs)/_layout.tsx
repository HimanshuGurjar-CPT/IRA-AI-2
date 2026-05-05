import { tabs } from "@/constants/data";
import { Image } from "expo-image";
import { Tabs } from "expo-router";
import { View } from "react-native-reanimated/lib/typescript/Animated";

const TabIcon = ({ focused, icon }: TabIconProps) => {
  return (
    <View className="tabs-icon">
      <View className={clsx("tabs-pill", focused && "tabs-active")}>
        <Image source={icon} resizeMode="contain" className="tabs-glyph" />
      </View>
    </View>
  );
};

const TabLayout = () => (
  <Tabs screenOptions={{ headerShown: false }}>
    {tabs.map((tab) => {
      return (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            headerShown: false,
            tabBarActiveTintColor: "#4AB058",
            title: tab.title,
            tabBarIcon: ({ color, size, focused }) => (
              <Image
                source={tab.icon}
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? "#4AB058" : color,
                }}
              />
            ),
          }}
        />
      );
    })}
  </Tabs>
);

export default TabLayout;
