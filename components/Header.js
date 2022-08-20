import { Image, StyleSheet, View, Text } from "react-native";

const Header = () => {
  return (
    <View>
      <Image
        source={require("../assets/images/authPicture.png")}
        alt="auth_lady"
        style={styles.image}
      />
      <Text style={styles.loginText}>
        Login
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300,
        marginTop: 70,
    },
    loginText: {
      fontWeight: 'bold',
      fontSize: 24,
      margin: 8,
      padding: 10,
    }
});
