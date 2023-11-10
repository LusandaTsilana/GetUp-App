import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import Gold from "../assets/medals/gold-medal.jpg";

const AppHeader = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.heading}>{title}</Text>
      <Image style={styles.image} source={Gold} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  image: {
    width: 45,
    height: 45,
  },
});

export default AppHeader;
