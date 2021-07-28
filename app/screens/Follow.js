import React, { useContext, useEffect } from "react";
import { SafeAreaView, View, StatusBar, StyleSheet } from "react-native";
import { AppContext } from "../Context";
import { URL } from "@env";

import Categories from "../components/Categories";
import List from "../components/List";

const Follow = ({ navigation }) => {
  const categories = [
    {
      id: "1",
      title: "general",
    },
    {
      id: "2",
      title: "business",
    },
    {
      id: "3",
      title: "entertainment",
    },
    {
      id: "4",
      title: "health",
    },
    {
      id: "5",
      title: "science",
    },
    {
      id: "6",
      title: "sports",
    },
    {
      id: "7",
      title: "technology",
    },
  ];
  const { state, query, setQuery, setUrl, url } = useContext(AppContext);
  const { isLoading, isError, data } = state;

  const handleQuery = (item) => {
    setQuery(item);
  };

  useEffect(() => {
    if (query) {
      setUrl(`${URL}&category=`);
    } else {
      setUrl(URL);
    }
  }, [query]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Categories}>
        <Categories
          categories={categories}
          handleQuery={handleQuery}
          query={query}
        />
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

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
    marginTop: StatusBar.currentHeight || 0,
  },
  Categories: {
    height: 80,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Follow;
