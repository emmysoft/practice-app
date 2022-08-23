import { Button, View } from "react-native";
import UserInput from "./UserInput";

const Page = () => {
  let screen = <UserInput/>
  return (
    <View style={{ width: 40, height: 40}}>
      <Button title="Go Back" onPress={screen}/>
    </View>
  );
};

export default Page;
