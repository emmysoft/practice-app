import { useState } from "react";
import { StyleSheet, TextInput, View, Text, Button } from "react-native";
import Ioncicons from "@expo/vector-icons/Ionicons";
import ButtonComponent from "./ButtonComponent";

const UserInput = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserNameInput = (enteredText) => {
    setUserName(enteredText);
  };
  const handlePasswordInput = (enteredPassword) => {
    setPassword(enteredPassword);
  };
  return (
    <View style={styles.inputContainer}>
      <View style={styles.firstInput}>
        <Ioncicons name="md-at" size={18} color="grey" />
        <TextInput
          value={username}
          onChangeText={handleUserNameInput}
          placeholder="enter your email"
          style={styles.inputStyle}
        />
      </View>
      <View style={styles.secondInput}>
        <Ioncicons name="md-key" size={18} color="grey" />
        <TextInput
          value={password}
          onChangeText={handlePasswordInput}
          placeholder="enter your password"
          style={styles.inputStyle}
          secureTextEntry={true}
        />
        <Ioncicons name="md-eye-off" size={18} color="grey" />
      </View>
      <Text style={styles.text}>Forgot Your Password?</Text>
      <View style={styles.button}>
        <ButtonComponent/>
      </View>
      <Text style={styles.textOption}>OR</Text>
      <View style={styles.googleButton}>
        <Button title="Login with Google" color="#add8e6"/>
      </View>
      <Text style={styles.finalText}>
        New to Logisitics? <Text style={styles.register}>Register</Text>
      </Text>
    </View>
  );
};

export default UserInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  firstInput: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
  },
  secondInput: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    marginTop: 10,
  },
  inputStyle: {
    width: "90%",
    paddingHorizontal: 8,
  },
  text: {
    color: "blue",
    marginLeft: "60%",
    padding: 8,
    fontSize: 13,
    fontFamily: "fontsOne",
  },
  textOption: {
    alignItems: "center",
    fontFamily: "fontsTwo",
    fontSize: 20,
    padding: 10,
    color: "grey",
  },
  button: {
    borderRadius: 10,
    width: "100%",
    margin: 5,
    paddingVertical: 5,
    paddingHorizontal: 5,
    elevation: 2,
    fontFamily: "fontsOne",
  },
  googleButton: {
    width: "80%",
    borderRadius: 12,
  },
  finalText: {
    color: "grey",
    fontSize: 19,
    padding: 8,
    fontFamily: "fontsTwo",
    color: "#000",
  },
  register: {
    color: "blue",
    fontFamily: "fontsOne",
    fontSize: 19,
  },
});
