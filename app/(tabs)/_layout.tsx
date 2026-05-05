import { tabs } from "@/constants/data";
import { Image } from "expo-image";
import { Tabs } from "expo-router";

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
