import { StyleSheet, Text, View, Image } from "react-native";

import React from "react";

const AppHeader = () => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.heading}>Good Day,</Text>
        <Text style={styles.name}>User</Text>
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
    flexDirection: "column",
    marginVertical: 25,
    marginHorizontal: 30,
  },

  heading: {
    textAlign: "left",
    fontSize: 32,
    letterSpacing: 2.4,
  },

  name: {
    textAlign: "left",
    fontSize: 32,
    letterSpacing: 2.4,
  },

  star: {
    width: 45,
    height: 45,
  },
});

export default AppHeader;
