import React, { useContext } from "react";
import { AppContext } from "../Context";
import { Text, StyleSheet, SafeAreaView, View } from "react-native";

import List from "../components/List";

const Home = ({ navigation, route }) => {
  const { state } = useContext(AppContext);
  const { isLoading, isError, data } = state;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text>
          <List
            data={data}
            navigation={navigation}
            isLoading={isLoading}
            isError={isError}
          />
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#8E8E93",
  },
});

export default Home;
