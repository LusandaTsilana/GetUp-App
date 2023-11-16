import { StyleSheet, Text, View, Image } from "react-native";
import Star from "../assets/medals/star-award.png";
import React from "react";

const AppHeader = () => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.heading}>Good Day,</Text>
        <Image style={styles.star} source={Star} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: "column",
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 25,
    marginHorizontal: 30,
  },

  heading: {
    textAlign: "right",
    fontSize: 32,
    letterSpacing: 2.4,
  },

  star: {
    width: 45,
    height: 45,
  },
});

export default AppHeader;
