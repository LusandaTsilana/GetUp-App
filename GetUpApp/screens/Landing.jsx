import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import Head from "../components/Head";
import RunGirl from "../assets/run-girl.gif";

const Landing = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Head />
      <Image style={styles.image} source={RunGirl} />
      <Text style={styles.slogan}>Embrace Your Power</Text>
      <Text style={styles.phrase}>Maximize your fitness potential</Text>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.buttonS}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonL}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center", // Center the content vertically
    backgroundColor: "white",
  },
  image: {
    width: 393,
    height: 490,
  },
  slogan: {
    fontSize: 32,
    marginTop: 20,
  },
  phrase: {
    fontSize: 16,
    marginTop: 10,
  },
  buttons: {
    flexDirection: "row",
    marginTop: 10,
  },
  buttonL: {
    backgroundColor: "#E88328",
    width: 140,
    height: 42,
    margin: 10,
    flexShrink: 0,
    borderRadius: 20,
  },
  buttonS: {
    backgroundColor: "#E07D23",
    width: 140,
    height: 42,
    margin: 10,
    flexShrink: 0,
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    marginTop: 5,
    textAlign: "center",
    letterSpacing: 2.4,
  },
});

export default Landing;
