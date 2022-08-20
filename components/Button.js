import { Button } from "react-native";
import Page from "./Page";

const ButtonComponent = () => {
  const handlePress = () => {
    screen = <Page />;
  };

  return (
    <Button title="Login" color="#0000ff" onPress={handlePress}/>
  );
};

export default ButtonComponent;
