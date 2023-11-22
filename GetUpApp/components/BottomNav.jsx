import { StyleSheet, View } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Workout from "../screens/Workout";
import Community from "../screens/Community";
import Profile from "../screens/Profile";
import Today from "../screens/Today";

const BottomNav = () => {
  const Tab = createBottomTabNavigator();

  return (
    <View style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name="Today" component={Today} />
        <Tab.Screen name="Workout" component={Workout} />
        <Tab.Screen name="Community" component={Community} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
export default BottomNav;
