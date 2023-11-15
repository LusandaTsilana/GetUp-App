import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/FontAwesome";

import { navigation } from "../App";

const BackButton = () => {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.container}
    >
      <Icon name="angle-left" size={35} color="black" paddingHorizontal={20} />
      <Text style={styles.text}>Back</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 20,

    paddingVertical: 7,
  },
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});
export default BackButton;
