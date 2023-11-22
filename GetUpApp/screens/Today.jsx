import { StyleSheet, View, Image, Text } from "react-native";
import React from "react";

import Quote from "../assets/quotes/quote.png";

import AppHeader from "../components/AppHeader";
import BottomNav from "../components/BottomNav";

const Today = () => {
  return (
    <View style={styles.container}>
      <AppHeader />
      <View style={styles.content}>
        <Image style={styles.quote} source={Quote} />
        <Text style={styles.heading}>Explore</Text>
      </View>
      <BottomNav />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  quote: {
    width: 393,
    height: 325,
  },

  heading: {
    fontSize: 24,
    marginVertical: 25,
    marginHorizontal: 30,
    letterSpacing: 2.4,
  },
});
export default Today;
