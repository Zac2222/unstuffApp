import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import SaleScreen from "./app/screens/SaleScreen";
import Card from "./app/components/Card";

export default function App() {
  return (
    // <WelcomeScreen />
    // <ViewImageScreen />
    // <SaleScreen />
    <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}>
      <Card
        title="Jean Jacket for sale"
        subTitle="$100"
        image={require("./app/assets/jeanJacket.jpg")}
      />
    </View>
  );
}
