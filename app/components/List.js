import React, { useState } from "react";
import {
  FlatList,
  Text,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

import Item from "./Item";

function List({ navigation, route, data, isLoading, isError }) {
  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() =>
          navigation.navigate("Article", {
            itemId: item.title,
          })
        }
      />
    );
  };
  return (
    <SafeAreaView style={styles.grid}>
      {isError && <Text style={styles.text}>Something went wrong</Text>}
      {isLoading ? (
        <ActivityIndicator size="large" color="#8E8E93" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.title}
          renderItem={renderItem}
          numColumns={2}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  error: {
    color: "#F2F2F7",
    fontSize: 24,
  },
});

export default List;