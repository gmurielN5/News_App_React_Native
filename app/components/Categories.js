import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const Categories = ({ categories, handleQuery, query }) => {
  const renderItem = ({ item }) => {
    return <Item item={item} onPress={() => handleQuery(item.title)} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        horizontal
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2F2F7",
  },
  title: {
    padding: 15,
    margin: 5,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default Categories;
