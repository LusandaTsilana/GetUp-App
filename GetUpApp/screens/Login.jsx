import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { Link, useNavigation } from "@react-navigation/native";
import { React, useState } from "react";

//imports for validation
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//import for firebase auth
import { firebase } from "../firebase/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

//imports for reusable components
import Head from "../components/Head";
import BackButton from "../components/BackButton";
import SocialAuth from "../components/SocialAuth";

const Login = () => {
  const navigation = useNavigation();

  const [emailData, setEmailData] = useState("");
  const [passwordData, setPassData] = useState("");

  //validation rules
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Incorrect email format. Enter a valid email")
      .required("Your email is required"),
    password: yup.string().required("Password is required"),
  });

  //form hooks for form fields
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
  const onSubmit = async (emailData, passwordData) => {
    try {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, emailData, passwordData)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("User logged in successfully", user);
          navigation.navigate("Today");
        })
        .catch((error) => {
          console.log("eeeh", error);
        });
    } catch (error) {
      Alert.alert("error in logging in the user");
      console.error("login fail", error);
    }
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
                    onChangeText={(emailData) => {
                      field.onChange(emailData);
                      setEmailData(emailData);
                    }}
                    value={emailData}
                    autoCapitalize="none"
                    autoCorrect={false}
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
                    onChangeText={(passwordData) => {
                      field.onChange(passwordData);
                      setPassData(passwordData);
                    }}
                    value={passwordData}
                    autoCapitalize="none"
                    autoCorrect={false}
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
    marginTop: 20,
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
