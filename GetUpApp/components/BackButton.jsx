import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/FontAwesome";

import { useNavigation } from "@react-navigation/native";

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.container}
    >
      <Icon name="angle-left" size={35} style={styles.icon} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },

  icon: {
    color: "black",
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: "#E88328",
  },
});
export default BackButton;
