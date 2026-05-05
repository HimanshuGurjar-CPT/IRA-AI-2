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
            title: tab.title,
            tabBarIcon: () => (
              <Image source={tab.icon} style={{ width: 24, height: 24 }} />
            ),
          }}
        />
      );
    })}
  </Tabs>
);

export default TabLayout;
