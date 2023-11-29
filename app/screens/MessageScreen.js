import React from "react";
import {
  FlatList,
  StyleSheet,
  View
} from "react-native";
import ListItem from "../components/ListItem";
import Constants from "expo-constants"; //imported to get the status bar height easily
import Screen from "../components/Screen";
import ListItemSeperator from "../components/ListItemsSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import { useState } from "react";

//hard coded data that would normally be backend data
const initalMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/me.png"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/me.png"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/me.png"),
  },
];

// const handlePress = () => {

// }

const MessageScreen = () => {

  const [messages, setMessages] = useState(initalMessages)
  const [refreshing, setRefreshing] = useState(false)

  //delete our messages from our array and update our ui
  //we also need to call the server to delete the message from the backend
  const handleDelete = (message) => {
    setMessages(messages.filter(m => m.id !== message.id)) 
   
  }

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('this is coming from our message screen', item)}
            renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />} //use as a component to add a function
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {setMessages([{id: 2, title: 'woop', description: 'flump', image: require('../assets/me.png')}])}}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    paddingTop: Constants.statusBarHeight
  },
});

export default MessageScreen;
