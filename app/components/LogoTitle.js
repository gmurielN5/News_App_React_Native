import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const LogoTitle = (props) => {
  console.log(props);
  return (
    <View style={styles.container}>
      <Ionicons name="bulb-outline" size={24} color="white" />
      <Text style={props.style}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
