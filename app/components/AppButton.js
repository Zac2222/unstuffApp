import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../config/colors";

function AppButton({ title, color="primary", onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color[colors]}]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
