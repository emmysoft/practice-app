import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import UserInput from "./components/UserInput";

export default function App() {
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
