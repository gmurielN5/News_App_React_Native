import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

//import query from context
// on press setquery + category
//
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
    height: 50,
    width: 150,
    backgroundColor: "white",
  },
  title: {
    padding: 20,
  },
});

export default Categories;
