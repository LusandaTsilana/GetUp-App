import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />

        {/* Declaration of screens as stack of cards */}
        <Stack.Navigator initialRouteName="Landing">
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "white",
  },
});
