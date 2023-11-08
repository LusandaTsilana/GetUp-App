import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>
        <Icon
          onPress={() => navigation.goBack()}
          name="angle-left"
          size={35}
          color="black"
        />
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export default BackButton;
