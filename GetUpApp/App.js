import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Landing from "./screens/Landing";
import Login from "./screens/Login";
// import Signup from "./screens/Signup";

// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
      <StatusBar style="auto" />
    </View>
    // <NavigationContainer>

    //   <Stack.Navigator>
    //     <Stack.Screen name="Landing" component={Landing} />
    //     <Stack.Screen name="Signup" component={Signup} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "#fff",
  },
});
