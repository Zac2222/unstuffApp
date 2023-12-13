import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import SaleScreen from "./app/screens/SaleScreen";
import Card from "./app/components/Card";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import MessageScreen from "./app/screens/MessageScreen";
import "react-native-gesture-handler";
import {
  GestureHandlerRootView,
  TextInput,
} from "react-native-gesture-handler";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppSwitch from "./app/components/AppSwitch";
import AppPicker from "./app/components/AppPicker";
import AppPicker2 from "./app/components/AppPicker2";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {


  return (

      <GestureHandlerRootView style={{ flex: 1 }}>
        <LoginScreen />
      </GestureHandlerRootView>

    );
  }
