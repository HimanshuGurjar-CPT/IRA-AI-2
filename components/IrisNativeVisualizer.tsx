import React from "react";
import { View, Text, requireNativeComponent, Platform, StyleSheet } from "react-native";

// Native Kotlin View bindings
const NativeSpectrumView = Platform.OS === "android" 
  ? requireNativeComponent("IrisNativeSpectrumView") 
  : null;

const NativeStatusHUDView = Platform.OS === "android" 
  ? requireNativeComponent("IrisNativeStatusHUDView") 
  : null;

export default function IrisNativeVisualizer() {
  return (
    <View style={styles.container}>
      {/* Kotlin Canvas Audio Spectrum Visualizer */}
      <View style={styles.visualizerCard}>
        {NativeSpectrumView ? (
          <NativeSpectrumView style={styles.nativeView} />
        ) : (
          <View style={styles.fallbackContainer}>
            <Text style={styles.fallbackText}>[KOTLIN NATIVE SPECTRUM ENGINE READY]</Text>
          </View>
        )}
      </View>

      {/* Kotlin Native Telemetry HUD */}
      <View style={styles.hudCard}>
        {NativeStatusHUDView ? (
          <NativeStatusHUDView style={styles.nativeView} />
        ) : (
          <View style={styles.fallbackContainer}>
            <Text style={styles.fallbackText}>[KOTLIN / C++ TELEMETRY HUD ACTIVE]</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 12,
    gap: 12,
  },
  visualizerCard: {
    height: 260,
    width: "100%",
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#0A0414",
    borderWidth: 1,
    borderColor: "rgba(0, 240, 255, 0.3)",
  },
  hudCard: {
    height: 220,
    width: "100%",
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#0D061A",
    borderWidth: 1,
    borderColor: "rgba(255, 0, 122, 0.3)",
  },
  nativeView: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#120924",
  },
  fallbackText: {
    color: "#00F0FF",
    fontSize: 14,
    fontFamily: "monospace",
    fontWeight: "bold",
  },
});
