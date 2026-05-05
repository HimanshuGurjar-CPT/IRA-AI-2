import { Tabs } from "expo-router";

const TabLayout = () => (
  <Tabs>
    <Tabs.Screen name="index" options={{ title: "Home" }} />
    <Tabs.Screen name="apps" options={{ title: "Apps" }} />
    <Tabs.Screen name="notes" options={{ title: "Notes" }} />
    <Tabs.Screen name="settings" options={{ title: "Settings" }} />
  </Tabs>
);

export default TabLayout;
