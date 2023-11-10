import { React } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Head from "../components/Head";
import BackButton from "../components/BackButton";
import SocialAuth from "../components/socialauth";

const Signup = () => {
  const navigation = useNavigation();

  const schema = yup.object().shape({
    fname: yup.string().min(3).required("Your first name is required"),
    lname: yup.string().min(3).required("Your last name is required"),
    email: yup
      .string()
      .email("Incorrect email format. Enter a valid email")
      .required("Your email is required"),
    password: yup.string().min(3).required("Password is required"),
    cpassword: yup
      .string()
      .min(3)
      .required("Password is required")
      .oneOf([yup.ref("password"), null], "Password do not match. Try again"),
  });

  const {
    control,
    handleSubmit,
    // fieldState: { error },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fname: "",
      lname: "",
      email: "",
      password: "",
      cpassword: "",
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
      style={{ flex: 1, backgroundColor: "#F1D8C1" }}
    >
      <Head />
      <BackButton />
      <ScrollView>
        {/*  gg is the header with the name & logo */}
        <View style={styles.box}>
          <Text style={styles.heading}>Sign Up</Text>

          <View style={styles.form}>
            <View>
              <Text style={styles.label}>First Name</Text>
              <Controller
                name="fname"
                control={control}
                render={({ field, fieldState }) => (
                  <>
                    <TextInput
                      style={styles.input}
                      placeholder="Enter your first name"
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
            </View>

            <View>
              <Text style={styles.label}>Last Name</Text>
              <Controller
                name="lname"
                control={control}
                render={({ field, fieldState }) => (
                  <>
                    <TextInput
                      style={styles.input}
                      placeholder="Enter your last name"
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
            </View>

            <View>
              <Text style={styles.label}>Email</Text>
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <>
                    <TextInput
                      style={styles.input}
                      placeholder="Enter your email"
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
            </View>

            <View>
              <Text style={styles.label}>Password</Text>
              <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                  <>
                    <TextInput
                      style={styles.input}
                      placeholder="Enter your password"
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
            </View>

            <View>
              <Text style={styles.label}>Confirm Password</Text>
              <Controller
                name="cpassword"
                control={control}
                render={({ field, fieldState }) => (
                  <>
                    <TextInput
                      style={styles.input}
                      placeholder="Confirm your password"
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
            </View>

            <TouchableOpacity
              style={styles.buttonS}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <Text style={styles.text}>Or Sign Up with:</Text>

            {/* component for social auth */}
            <SocialAuth />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  box: {
    backgroundColor: "#F0C9A5",
    paddingBottom: 60,
  },
  heading: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 30,
    marginTop: 30,
    letterSpacing: 2.4,
  },
  form: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    paddingBottom: 15,
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    marginBottom: 30,
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
  buttonS: {
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
    color: "#fff",
    fontSize: 20,
    marginTop: 5,
    paddingBottom: 10,
    textAlign: "center",
    letterSpacing: 2.4,
  },

  text: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    marginTop: 20,
  },
});

export default Signup;
