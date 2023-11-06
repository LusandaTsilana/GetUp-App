import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Head from "../components/Head";
import Facebook from "../assets/facebook.png";
import Google from "../assets/google.png";

const Signup = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Head />
        {/*  Above is the header with the name & logo */}
        <View style={styles.box}>
          <Text style={styles.heading}>Sign Up</Text>

          <View style={styles.form}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your first name"
            />
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your last name"
            />
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} placeholder="Enter your email" />
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} placeholder="Enter your password" />
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirm your password"
            />

            <TouchableOpacity style={styles.buttonS} onPress={() => {}}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <Text style={styles.text}>Or Sign Up with:</Text>
            <View style={styles.icons}>
              <Image style={styles.image} source={Facebook} />
              <Image style={styles.image} source={Google} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
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

  image: {
    width: 55,
    height: 55,
    marginHorizontal: 20,
  },

  icons: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default Signup;
