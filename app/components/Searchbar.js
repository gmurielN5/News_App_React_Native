import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const SearchBar = ({ query, handleQuery }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput
          style={styles.searchBar}
          placeholder="Topics & Stories..."
          placeholderTextColor="#F2F2F7"
          value={query}
          onChangeText={(input) => handleQuery(input)}
          onClear={(input) => handleQuery("")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: "#1C1C1E",
    borderWidth: 0.5,
    borderColor: "#28282B",
    padding: 10,
  },
  searchBar: {
    flex: 1,
    padding: 5,
    color: "#F2F2F7",
    fontSize: 18,
  },
});

export default SearchBar;
