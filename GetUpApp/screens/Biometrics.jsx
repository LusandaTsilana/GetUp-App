import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import React from "react";
import Head from "../components/Head";
import { useNavigation } from "@react-navigation/native";

import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Biometrics = () => {
  const navigation = useNavigation();

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
    // fieldState: { error },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      height: null,
      weight: null,
    },
  });

  //data will be collected and stored through the functions of submission
  const onSubmit = (data) => {
    console.log(data);
    navigation.navigate("Goal");
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
            <Text style={styles.label}>Height (cm)</Text>
            <Controller
              name="height"
              control={control}
              render={({ field, fieldState }) => (
                <>
                  <TextInput
                    style={styles.input}
                    placeholder="How tall are you?"
                    onChangeText={field.onChange}
                    value={field.value}
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
                    onChangeText={field.onChange}
                    value={field.value}
                  />
                  {fieldState.invalid && (
                    <Text style={styles.emessage}>
                      {fieldState.error?.message}
                    </Text>
                  )}
                </>
              )}
            />

            <Text style={styles.label}>Your BMI:</Text>
            <TextInput
              style={styles.input}
              placeholder="Your BMI based on our calculation"
            />
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
});
export default Biometrics;
