import { View, Text } from "react-native";
import { Colors } from "../constants/Colors";
import { inAppWallet } from "thirdweb/wallets/in-app";
import { ConnectButton, lightTheme } from "thirdweb/react";
import { client, chain } from "../constants/Thirdweb";
export default function Login() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "orange",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Login</Text>
      </View>
      <View
        style={{
          width: "50%",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <ConnectButton
          // https://portal.thirdweb.com/react-native/v5/ConnectButton
          connectButton={{
            label: "Login",
          }}
          theme={lightTheme({
            colors: {
              primaryButtonBg: "white",
              primaryButtonText: "black",
            },
          })}
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
        />
      </View>
    </View>
  );
}
