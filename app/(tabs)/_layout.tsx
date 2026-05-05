import { tabs } from "@/constants/data";
import { Image } from "expo-image";
import { Tabs } from "expo-router";

const TabLayout = () => (
  <Tabs>
    {tabs.map((tab) => {
      return (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            headerShown: false,
            tabBarActiveTintColor: "#2A800F",
            title: tab.title,
            tabBarIcon: ({ color, size, focused }) => (
              <Image
                source={tab.icon}
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? "#2A800F" : color,
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
