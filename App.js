import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import Header from "./components/Header";
import UserInput from "./components/UserInput";

SplashScreen.preventAutoHideAsync()
  .then((result) =>
    console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`)
  )
  .catch(console.warn);

export default function App() {
  //import fonts
  const [fontsLoaded] = useFonts({
    "fontsOne": require("./assets/fonts/Roboto-Black.ttf"),
    "fontsTwo": require("./assets/fonts/Roboto-Thin.ttf")
  });

  useEffect(() => {
    async function hideSplashScreen() {
      await SplashScreen.hideAsync();
    }
    if (fontsLoaded) {
      hideSplashScreen();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {//returns null once font isn't loaded or is not in the app
    return null;
  };

  return (
    <>
      <StatusBar style="dark" />
      <ScrollView>
        <Header />
        <UserInput />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
