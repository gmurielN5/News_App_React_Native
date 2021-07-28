import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const LogoTitle = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Ionicons name="ios-earth" size={24} color="#F2F2F7" />
      </View>
      <View>
        <Text style={props.style}>{props.children}</Text>
      </View>
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
  logo: {
    padding: 5,
  },
});
