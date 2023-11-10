import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text style={styles.text}>
        <Icon
          name="angle-left"
          size={35}
          color="black"
          paddingHorizontal={20}
        />
        Back
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
export default BackButton;
