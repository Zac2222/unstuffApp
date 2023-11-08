import { View, ImageBackground, StyleSheet, Image, Text, Button, Pressable } from "react-native";
import color from "../config/color";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/LivingRoom.jpg")}
      style={styles.background}
    >
      <Image
        style={styles.logo}
        source={require("../assets/UnStuffLogo.png")}
      />
      <Text style={styles.tagline}>Unstuff Your Life</Text>
      {/* <Button style={styles.loginButton}> */}
      {/* <View style={styles.loginButton} />
      <View style={styles.registerButton} /> */}

<Pressable style={styles.loginButton}>
        <Text style={styles.button}>Login</Text>
      </Pressable>
      <Pressable style={styles.registerButton}>
        <Text style={styles.button}>Register</Text>
      </Pressable>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: color.primary,
    borderRadius: 40,

  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: color.secondary,
    borderRadius: 40,
    margin: 10,
  },
  button: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
    textTransform: 'uppercase',
   
  },
  logo: {
    width: 200,
    height: 200,
    position: "absolute",
    top: 80,
  },
  tagline: {
    bottom: 400,
  },
});

export default WelcomeScreen;
