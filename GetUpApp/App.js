import { useEffect, useState, createContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//config for firebase
import { firebase } from "./firebase/firebase.js";

import Landing from "./screens/Landing.jsx";
import Login from "./screens/Login.jsx";
import Signup from "./screens/Signup.jsx";
// import Biometrics from "./screens/Biometrics.jsx";
import Goal from "./screens/Goal.jsx";
import Today from "./screens/Today.jsx";
import Workout from "./screens/Workout.jsx";
import Community from "./screens/Community.jsx";
import Profile from "./screens/Profile.jsx";

const Stack = createNativeStackNavigator();
export const AppContext = createContext();

export default function App() {
  //initialize app and authenticate the user

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [firstnameData, setFirstnameData] = useState("");

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; //to unsibscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <AppContext.Provider value={{ firstnameData, setFirstnameData }}>
      <NavigationContainer>
        <View style={styles.container}>
          <StatusBar style="auto" />

          {/* Declaration of screens as stack of cards */}
          <Stack.Navigator initialRouteName={user ? "Landing" : "Landing"}>
            <Stack.Screen
              name="Landing"
              component={Landing}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />

            {/* <Stack.Screen
            name="Biometrics"
            component={Biometrics}
            options={{ headerShown: false }}
          /> */}

            <Stack.Screen
              name="Goal"
              component={Goal}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Today"
              component={Today}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Workout"
              component={Workout}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Community"
              component={Community}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "white",
  },
});
