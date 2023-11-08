import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import SaleScreen from './app/screens/SaleScreen';

export default function App() {
  return (
    <WelcomeScreen />
    // <ViewImageScreen />
    // <SaleScreen />
  );
}

