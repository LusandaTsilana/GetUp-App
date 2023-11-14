import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import Logo from "../assets/logo.png";

const Head = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.heading}>GetUp</Text>
        <Image style={styles.logo} source={Logo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  heading: {
    fontSize: 40,
    marginTop: 25,
    marginBottom: 20,
    letterSpacing: 2.4,
  },
  logo: {
    width: 42,
    height: 48,
  },
});

export default Head;
