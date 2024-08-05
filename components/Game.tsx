import { View } from "react-native";
import { Colors } from "../constants/Colors";
import { Info } from "@/components/Info";
import { Wallet } from "@/components/Wallet";
import { Button } from "@/components/Button";

export default function Game() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.background,
      }}
    >
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Info />
        <Wallet />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button />
      </View>
    </View>
  );
}
