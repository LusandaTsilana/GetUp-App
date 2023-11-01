import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Landing from "./screens/Landing";

export default function App() {
  return (
    <View style={styles.container}>
      <Landing />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "start",
  },
});
