import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Today from "../screens/Today";
import Workout from "../screens/Workout";
import Community from "../screens/Community";
import Profile from "../screens/Profile";

const BottomNav = () => {
  const Tab = createBottomTabNavigator();

  return (
    <View>
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBarStyle,
          tabBarBackground: () => <BlurView overlayColor="" blurAmount={15} />,
        }}
      >
        <Tab.Screen name="Workout" component={Workout} />
        <Tab.Screen name="Community" component={Community} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </View>
  );
};
const styles = StyleSheet.create({});
export default BottomNav;
