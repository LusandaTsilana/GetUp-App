import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { Link } from "@react-navigation/native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

//imports for validation
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//imports for reusable components
import Head from "../components/Head";
import BackButton from "../components/BackButton";
import SocialAuth from "../components/socialauth";

const Login = () => {
  const navigation = useNavigation();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Incorrect email format. Enter a valid email")
      .required("Your email is required"),
    password: yup.string().min(3).required("Password is required"),
  });

  const {
    control,
    handleSubmit,
    // fieldState: { error },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  //data will be collected(console for now) and stored through the functions of submission
  const onSubmit = (data) => {
    console.log(data);
    navigation.navigate("Today");
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={100}
      style={{ flex: 1, backgroundColor: "#F1D8C1" }}
    >
      <Head />
      <BackButton />
      {/*  Above is the header with the name & logo */}
      <ScrollView style={styles.box}>
        <Text style={styles.heading}>Log In</Text>

        <View style={styles.form}>
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

          <TouchableOpacity
            style={styles.buttonL}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.text}>Or Log In with:</Text>

          {/* component for social auth */}
          <SocialAuth />

          <Text style={styles.text}>
            Don't have an account?
            <Link to={{ screen: "Signup" }} style={styles.signtext}>
              SIGN UP
            </Link>
          </Text>
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

  buttonL: {
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

  text: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    marginTop: 20,
  },

  signtext: {
    fontWeight: "bold",
  },

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

export default Login;
