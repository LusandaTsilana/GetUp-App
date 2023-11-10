import { StyleSheet, Image, View } from "react-native";
import React from "react";

import Facebook from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";
import Google from "../assets/google.png";

const SocialAuth = () => {
  return (
    <View style={styles.icons}>
      <Image style={styles.image} source={Facebook} />
      <Image style={styles.twitter} source={Twitter} />
      <Image style={styles.image} source={Google} />
    </View>
  );
};

export default SocialAuth;

const styles = StyleSheet.create({
  image: {
    width: 55,
    height: 55,
    marginHorizontal: 20,
  },

  twitter: {
    width: 55,
    height: 60,
    marginHorizontal: 20,
  },

  icons: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
