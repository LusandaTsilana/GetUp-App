import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import { React, useState, useEffect, createContext } from "react";
import Head from "../components/Head";

import { useNavigation } from "@react-navigation/native";

import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const AppContext = createContext();

const Biometrics = () => {
  const navigation = useNavigation();

  // biometric info to be used for BMI calculator
  const [newheight, setHeight] = useState("");
  const [newweight, setWeight] = useState("");

  //below the height and weight is updated and stored using useEffect which i will use in the BMI calculator
  useEffect(() => {
    const updatedBiometrics = {
      height: newheight,
      weight: newweight,
    };
    setHeight(updatedBiometrics.height);
    setWeight(updatedBiometrics.weight);
  }, [newheight, newweight]);

  const bmiCalculator = () => {
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
  };
  // validation rules for input fields
  const schema = yup.object().shape({
    height: yup
      .number("Height must be numerical")
      .positive("Height must be a positive number")
      .required("Your height is required to get your BMI"),
    weight: yup
      .number("Weight must be numerical")
      .positive("Height must be a positive number")
      .required("Your weight is required to get your BMI"),
  });

  const {
    control,
    handleSubmit,
    fieldState: { error },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      height: null,
      weight: null,
    },
  });

  //data will be collected and stored through the functions of submission
  const onSubmit = (data) => {
    try {
      // Submit the form data to the server
      console.log(data);
      navigation.navigate("Goal");
    } catch (error) {
      // Handle the error
      if (error.message === "Network error") {
        // Display an error message to the user
        console.log("network/server errors");
      } else if (error.message === "Server error") {
        // Display an error message to the user
        console.log("network/server errors");
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={100}
      style={{ flex: 1, backgroundColor: "#F0C9A5" }}
    >
      <Head />
      <ScrollView>
        {/*  Above is the header with the name & logo */}
        <View style={styles.box}>
          <Text style={styles.heading}>Biometrics</Text>

          <View style={styles.form}>
            <Text style={styles.label}>Height (m)</Text>
            <Controller
              name="height"
              control={control}
              render={({ field, fieldState }) => (
                <>
                  <TextInput
                    style={styles.input}
                    placeholder="How tall are you?"
                    // below we will bind the user height to newWeight variable
                    onChangeText={(event) => {
                      const newHeight = event.target.value;
                      setHeight(newHeight);
                      field.onChange(newHeight); // Update the Controller's value
                    }}
                    value={field.height}
                  />
                  {fieldState.invalid && (
                    <Text style={styles.emessage}>
                      {fieldState.error?.message}
                    </Text>
                  )}
                </>
              )}
            />

            <Text style={styles.label}>Weight (kg)</Text>
            <Controller
              name="weight"
              control={control}
              render={({ field, fieldState }) => (
                <>
                  <TextInput
                    style={styles.input}
                    placeholder="How much do you weigh?"
                    onChangeText={(event) => {
                      const newWeight = event.target.value;
                      setWeight(newWeight);
                      field.onChange(newWeight); // Update the Controller's value
                    }}
                    value={field.weight}
                  />
                  {fieldState.invalid && (
                    <Text style={styles.emessage}>
                      {fieldState.error?.message}
                    </Text>
                  )}
                </>
              )}
            />
            {/* BMI container*/}
            <View>
              <Text style={styles.labelBMI}>Your BMI:</Text>
              <Text style={styles.textBMI}>{bmi}</Text>
              <Text style={styles.BMIDes}>{description}</Text>
            </View>

            <TouchableOpacity
              style={styles.buttonN}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  box: {
    backgroundColor: "#F0C9A5",
  },
  heading: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 30,
    marginTop: 50,
    letterSpacing: 2.4,
  },
  form: {
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  label: {
    fontSize: 16,
    paddingBottom: 15,
  },

  input: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    marginBottom: 20,
    width: 307,
    height: 42,
    borderRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.25)", // iOS shadow color
    shadowOffset: { width: 0, height: 4 }, // iOS shadow offset (x, y)
    shadowOpacity: 1, // iOS shadow opacity
    shadowRadius: 4, // iOS shadow radius
  },

  emessage: {
    color: "red",
    fontSize: 12,
    paddingBottom: 25,
  },

  buttonN: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E88328",
    width: 307,
    height: 42,
    flexShrink: 0,
    marginVertical: 20,
    borderRadius: 20,
    flexShrink: 0,
    shadowColor: "rgba(0, 0, 0, 0.25)", // iOS shadow color
    shadowOffset: { width: 0, height: 4 }, // iOS shadow offset (x, y)
    shadowOpacity: 1, // iOS shadow opacity
    shadowRadius: 4, // iOS shadow radius
    borderColor: "white", // Border color
    borderWidth: 1, // Border width
  },
  buttonText: {
    fontSize: 20,
    marginTop: 5,
    paddingBottom: 10,
    color: "#fff",
    textAlign: "center",
  },

  labelBMI: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 25,
  },
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
export default Biometrics;
