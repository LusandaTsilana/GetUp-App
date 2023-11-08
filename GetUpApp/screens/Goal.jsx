import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

import Head from "../components/Head.jsx";

const Goal = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Head />
      <View style={styles.box}>
        <Text style={styles.heading}>What is your goal?</Text>

        <View style={styles.buttons}>
          <TouchableOpacity
            style={buttonGoal}
            onPress={() => navigation.navigate("Today")}
          >
            <Text style={styles.buttonText}>Lose Weight</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={buttonGoal}
            onPress={() => navigation.navigate("Today")}
          >
            <Text style={styles.buttonText}>Gain Muscle</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0C9A5",
  },
  heading: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 30,
    marginTop: 50,
    letterSpacing: 2.4,
  },

  buttons: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    marginVertical: 20,
  },
});

const buttonGoal = {
  width: 295,
  height: 69,
  backgroundColor: "#E07D23",
  marginVertical: 30,
  borderRadius: 8,
  borderWidth: 1,
  borderColor: "#9F4E04",
  shadowColor: "rgba(0, 0, 0, 0.25)", // iOS shadow color
  shadowOffset: { width: 0, height: 4 }, // iOS shadow offset (x, y)
  shadowOpacity: 1, // iOS shadow opacity
  shadowRadius: 4, // iOS shadow radius
};

export default Goal;
