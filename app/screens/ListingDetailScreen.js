import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

const ListingDetailScreen = (props) => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/jeanJacket.jpg")}
      />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>
          Great looking jean jacket for sale
        </AppText>
        <AppText style={styles.price}>$100</AppText>

        <ListItem
          image={require("../assets/me.png")}
          title="Pim"
          subTitle="12 Listings"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 500,
  },
  detailContainer: {
    padding: 20,
  },
  title: {
    fontSize: 21,
    fontWeight: "500",
  },
  price: {
    fontSize: 30,
    color: colors.secondary,
    marginVertical: 10,
  },
});

export default ListingDetailScreen;
