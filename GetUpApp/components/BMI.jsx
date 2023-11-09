import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BMI = () => {
  return (
    <View>
      <Text style={styles.labelBMI}>Your BMI:</Text>
      <Text
        style={styles.BMIResult}
        placeholder="Your BMI based on our calculation"
      >
        BMI result
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  labelBMI: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 25,
  },

  BMIResult: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 30,
  },
});

export default BMI;
