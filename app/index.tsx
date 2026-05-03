import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <Text style={{ color: "#fff", fontSize: 48, fontWeight: "bold" }}>
        IRIS X
      </Text>
      <Text style={{ color: "#fff", fontSize: 18 }}>
        Empowering tomorrow with the power of AI
      </Text>
    </View>
  );
}
