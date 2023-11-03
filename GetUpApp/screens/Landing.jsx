import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Head from "../components/Head";
import RunGirl from "../assets/run-girl.gif";

const Landing = () => {
  return (
    <View style={styles.container}>
      <Head />
      <Image style={styles.image} source={RunGirl} />
      <Text style={styles.slogan}>Embrace Your Power</Text>
      <Text style={styles.phrase}>Maximize your fitness potential</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.buttonL}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonS}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center", // Center the content vertically
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
    width: 112,
    height: 42,
    margin: 10,
    flexShrink: 0,
    borderRadius: 20,
  },
  buttonS: {
    backgroundColor: "#E07D23",
    width: 112,
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
  },
});

export default Landing;
