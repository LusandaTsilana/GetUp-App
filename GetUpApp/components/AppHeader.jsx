import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const AppHeader = ({ title, award }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.heading}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AppHeader;
