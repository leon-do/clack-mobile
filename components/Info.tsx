import { View, Linking } from "react-native";
import { Colors } from "../constants/Colors";
import AwesomeButton from "react-native-really-awesome-button";
import Ionicons from "@expo/vector-icons/Ionicons";

export function Info() {
  const url = "https://docs.thirdweb.com";
  return (
    <View
      style={{
        marginHorizontal: 10,
      }}
    >
      <AwesomeButton
        backgroundColor={Colors.background}
        borderColor="white"
        borderWidth={1}
        borderRadius={100}
        raiseLevel={0}
        height={40}
        width={40}
        paddingHorizontal={0}
        textSize={25}
        onPress={(next: () => void) => {
          Linking.openURL(url);
          next && next();
        }}
      >
        <Ionicons name="information" size={25} color="white" />
      </AwesomeButton>
    </View>
  );
}
