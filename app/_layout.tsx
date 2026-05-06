import "@/global.css";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

export default function RootLayout() {
  const [fontLoaded] = useFonts({
    "Antonio-Bold": "../assets/fonts/Antonio-Bold.ttf",
    "Antonio-Medium": "../assets/fonts/Antonio-Medium.ttf",
    "Antonio-Regular": "../assets/fonts/Antonio-Regular.ttf",
    "Antonio-SemiBold": "../assets/fonts/Antonio-SemiBold.ttf",
    "Outfit-ExtraLight": "../assets/fonts/Outfit-ExtraLight.ttf",
    "Outfit-Light": "../assets/fonts/Outfit-Light.ttf",
    "Outfit-Medium": "../assets/fonts/Outfit-Medium.ttf",
    "Outfit-Regular": "../assets/fonts/Outfit-Regular.ttf",
    "Outfit-SemiBold": "../assets/fonts/Outfit-SemiBold.ttf",
    "Outfit-Thin": "../assets/fonts/Outfit-Thin.ttf",
  });

  useEffect(() => {
    if (fontLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </>
  );
}
