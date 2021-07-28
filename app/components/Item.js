import React from "react";
import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
} from "react-native";

const Item = ({ item, onPress }) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor="black">
      <View style={styles.image}>
        <ImageBackground
          source={{ uri: item.urlToImage }}
          style={styles.imageThumbnail}
          imageStyle={{ borderRadius: 6 }}
        >
          <Text style={styles.text}>{item.title}</Text>
        </ImageBackground>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  image: {
    marginTop: 10,
  },
  imageThumbnail: {
    width: 180,
    height: 180,
    margin: "2%",
  },
  text: {
    color: "#F2F2F7",
    fontSize: 18,
    position: "absolute",
    bottom: 5,
    left: 5,
  },
});

export default Item;
