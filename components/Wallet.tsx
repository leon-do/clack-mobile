import { View } from "react-native";
import { ConnectButton } from "thirdweb/react";
import { client, chain } from "../constants/Thirdweb";
import { inAppWallet } from "thirdweb/wallets/in-app";
import { Colors } from "../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export function Wallet() {
  // Create two overlapping div elements where the bottom one is clickable
  return (
    <View
      style={{
        overflow: "hidden",
        marginHorizontal: 10,
        height: 40,
        width: 40,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "white",
      }}
    >
      <View
        style={{
          pointerEvents: "none" /* Allow clicks to pass through */,
          zIndex: 2 /* Higher z-index */,
          position: "absolute",
          backgroundColor: Colors.background,
          borderRadius: 100,
          width: 39,
          height: 39,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons name="mail" size={22} color="white" />
      </View>

      <View
        style={{
          zIndex: 1 /* Lower z-index */,
          position: "absolute",
        }}
      >
        <ConnectButton
          client={client}
          wallets={[
            inAppWallet({
              auth: {
                options: ["email"],
              },
              smartAccount: {
                chain,
                sponsorGas: true,
              },
            }),
          ]}
        ></ConnectButton>
      </View>
    </View>
  );
}
