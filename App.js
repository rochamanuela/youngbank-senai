import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from "expo-font";
import Routers from "./routers";

export default function App() {

  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Montserrat-Regular.ttf"),
    bold: require("./assets/fonts/Montserrat-Bold.ttf"),
    medium: require("./assets/fonts/Montserrat-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {


    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded])


  if (!fontsLoaded) {
    return null;
  }

  return <Routers/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
