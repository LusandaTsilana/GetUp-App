import { StyleSheet, View } from "react-native";
import React from "react";
import BackButton from "../components/BackButton";

const Today = () => {
  return (
    <View style={styles.container}>
      <View>
        <BackButton />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center", // Center the content vertically
    backgroundColor: "white",
  },
});
export default Today;
