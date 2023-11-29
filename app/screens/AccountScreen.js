import React from "react";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemsSeparator";


const menuItems = [
  {
    title: "My Listings",
    icon: { name: "format-list-bulleted", backgroundColor: colors.primary },
  },
  {
    title: "My Messages",
    icon: { name: "email", backgroundColor: colors.secondary },
  },
];

const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Bloop Doop"
          subTitle="bloopydoopy@gmail.com"
          image={require("../assets/me.png")}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItems) => menuItems.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>

      <ListItem title='Log Out' ImageComponent={<Icon name='logout' backgroundColor="orange"/>}/>

    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;
