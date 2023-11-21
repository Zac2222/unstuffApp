import React from "react";
import { StyleSheet, View, Image } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

const Card = ({ title, subTitle, image }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden", // this is to make sure the image doesn't go outside the card
  },
  image: {
    width: "100%",
    height: 400,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
    fontSize: 30,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 28,
  }
});

export default Card;
