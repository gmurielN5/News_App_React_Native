import React, { useContext, useCallback } from "react";
import { AppContext } from "../Context";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Linking,
  Image,
} from "react-native";
import moment from "moment";

const Article = ({ route, navigation }) => {
  const { itemId } = route.params;
  const { state } = useContext(AppContext);
  const { data } = state;
  const article = data.filter((item) => {
    if (item.title === itemId) {
      return item;
    }
  });
  const [item] = article;
  const {
    author,
    content,
    description,
    publishedAt,
    source,
    title,
    url,
    urlToImage,
    ...rest
  } = item;
  const publishedDate = moment(publishedAt).format("dddd D MMMM YYYY");
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.h1}>{title}</Text>
            <Text style={styles.span}>{publishedDate}</Text>
            <Text style={styles.span}>
              by {author}
              {source.name}{" "}
            </Text>
          </View>
          <View style={styles.image}>
            <Image
              source={{ uri: urlToImage }}
              style={{ width: 350, height: 350 }}
            />
          </View>
          <View style={styles.content_line}>
            <Text style={styles.h2}>{description}</Text>
            <Text style={styles.p}>{content}</Text>
            <TouchableHighlight onPress={handlePress} underlayColor="white">
              <View style={styles.button}>
                <Text style={styles.buttonText}>Read full article</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  content_line: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    marginTop: 30,
    marginBottom: 30,
    width: 260,
    alignItems: "center",
    backgroundColor: "#8E8E93",
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white",
    textTransform: "uppercase",
  },
  h1: {
    color: "#F2F2F7",
    fontFamily: "Inter-Black",
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  h2: {
    color: "#F2F2F7",
    fontFamily: "Inter-Black",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  span: {
    color: "#8E8E93",
    fontFamily: "Inter-Black",
  },
  p: {
    color: "#F2F2F7",
    fontSize: 16,
  },
  image: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export default Article;
