import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = ({ query, handleQuery, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput
          style={styles.searchBar}
          placeholder="Topics & Stories..."
          placeholderTextColor="#F2F2F7"
          value={query}
          // onChangeText={(input) => handleQuery(input)}
          onClear={(input) => handleQuery("")}
        />
      </View>
      <TouchableHighlight onPress={onPress}>
        <View style={styles.content}>
          <Ionicons name="search" size={24} color="#8E8E93" />
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    height: 50,
    backgroundColor: "#1C1C1E",
    borderWidth: 0.5,
    borderColor: "#28282B",
    padding: 10,
  },
  searchBar: {
    flex: 1,
    padding: 5,
    color: "#8E8E93",
    fontSize: 18,
  },
});

export default SearchBar;
