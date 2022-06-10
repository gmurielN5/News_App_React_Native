import React, { useContext, useState } from "react"
import { AppContext } from "../Context"

import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from "react-native"
import { API_URL2 } from "@env"

import List from "../components/List"
import SearchBar from "../components/Searchbar"

const Search = ({ navigation }) => {
  const { state, setQuery, setUrl } = useContext(AppContext)
  const { isLoading, isError, data } = state
  const [text, setText] = useState("")

  const handleSearch = (input) => {
    setText(input)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setQuery(text)
    setUrl(API_URL2)
    setText("")
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <SearchBar handleSearch={handleSearch} onPress={onSubmit} text={text} />
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
  )
}

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
})

export default Search
