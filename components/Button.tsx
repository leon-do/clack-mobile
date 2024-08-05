import { View } from "react-native";
import { Colors } from "../constants/Colors";
import AwesomeButton from "react-native-really-awesome-button";

export function Button() {
  const onButtonPress = async (): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return;
  };

  return (
    <View>
      <AwesomeButton
        progress={true}
        progressLoadingTime={9000}
        backgroundColor="#0a7ea4"
        backgroundDarker="#0a11a4"
        borderRadius={50}
        height={200}
        width={180}
        raiseLevel={20}
        textColor="orange"
        textSize={100}
        onPress={async (next) => {
          await onButtonPress();
          next && next();
        }}
      >
        88
      </AwesomeButton>
    </View>
  );
}
