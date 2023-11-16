import { StyleSheet, View, Image, Text } from "react-native";
import React from "react";

import Quote from "../assets/quotes/quote.png";

import AppHeader from "../components/AppHeader";

const Today = () => {
  return (
    <View style={styles.container}>
      <View>
        <AppHeader />
        <Image style={styles.quote} source={Quote} />

        <View>
          <Text style={styles.heading}>Explore</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
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
