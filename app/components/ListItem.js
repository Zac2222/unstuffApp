import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";

const ListItem = ({ title, subTitle, image, onPress, renderRightActions, ImageComponent }) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>

        <View style={styles.container}>
          {ImageComponent}
          {image && <Image source={image} style={styles.image}/>}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View> 
        </View>

      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", //switch to row because react native defaults to column (because mobile device)
    padding: 20,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "500",
    fontSize: 21,
  },
  subTitle: {
    color: colors.medium,
    fontSize: 19,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
});

export default ListItem;
