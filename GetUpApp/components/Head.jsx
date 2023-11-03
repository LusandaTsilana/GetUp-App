import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Logo from "../assets/logo.png";

const Head = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>GetUp</Text>
      <Image style={styles.logo} source={Logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 40,
    marginTop: 50,
    marginBottom: 20,
  },
  logo: {
    width: 42,
    height: 48,
    marginBottom: 30,
  },
});

export default Head;
