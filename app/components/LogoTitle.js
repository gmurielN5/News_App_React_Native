import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useAssets } from "expo-asset";
import AppLoading from "expo-app-loading";

export const LogoTitle = (props) => {
  const [assets] = useAssets([require("../../assets/images/icon.png")]);

  if (!assets) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 50, height: 50 }}
        source={require("../../assets/images/adaptive-icon.png")}
      />
      <View>
        <Text style={props.style}>News</Text>
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
});
