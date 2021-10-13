import React, { useContext, useEffect } from "react";
import { AppContext } from "../Context";

import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";

import List from "../components/List";
import SearchBar from "../components/Searchbar";

const Search = ({ navigation }) => {
  const { state, query, setQuery, setUrl } = useContext(AppContext);
  const { isLoading, isError, data } = state;

  // const handleQuery = (input) => {
  //   setQuery(input);
  // };
  console.log(query);

  const onSubmit = (e, input) => {
    e.preventDefault();
    setUrl(`https://newsapi.org/v2/everything?q=`);
    setQuery(input);
  };

  // useEffect(() => {
  //   if (query) {
  //     setUrl(`https://newsapi.org/v2/everything?q=`);
  //   } else {
  //     setUrl(`https://newsapi.org/v2/top-headlines?country=gb`);
  //   }
  // }, [query]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <SearchBar query={query} handleQuery={handleQuery} onPress={onSubmit} />
      </View>

      <View style={styles.content}>
        <List
          data={data}
          navigation={navigation}
          isLoading={isLoading}
          isError={isError}
        />
      </View>
    </SafeAreaView>
  );
};

// redo css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
  },
  searchBar: {
    height: 60,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Search;
