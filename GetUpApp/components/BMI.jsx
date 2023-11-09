import { StyleSheet, Text, View } from "react-native";
import { React, useContext, useState } from "react";

import { AppContext } from "../screens/Biometrics";

const BMICalculator = () => {
  const { height } = useContext(AppContext);
  const { weight } = useContext(AppContext);

  const [bmi, setBmi] = useState("");
  const [description, setDescription] = useState("");

  const resultBMI = () => {
    const bmi = weight / (height * height);
    setBmi(bmi.toFixed(1));

    if (bmi < 18.5) {
      setDescription(
        "You have a great potential to get in better shape. Eat right and please consult your doctor"
      );
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setDescription("You've got a great figure. Keep it up!");
    } else if (bmi >= 25 && bmi <= 29.9) {
      setDescription(
        "You only need a bit more sweat exercises for a fitter figure"
      );
    } else if (bmi >= 30) {
      setDescription(
        "You may need to do more workouts and eat healthier for a better figure"
      );
    }
  };
  return (
    <View>
      <Text style={styles.labelBMI}>Your BMI:</Text>
      <Text style={styles.textBMI}>{bmi}</Text>
      <Text style={styles.BMIDes}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  labelBMI,
  textBMI: {
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
