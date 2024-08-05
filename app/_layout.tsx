import { Stack } from "expo-router";
import { Colors } from "../constants/Colors";
import { ThirdwebProvider } from "thirdweb/react";

export default function RootLayout() {
  return (
    <ThirdwebProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "",
            headerStyle: {
              backgroundColor: Colors.background,
            },
          }}
        />
      </Stack>
    </ThirdwebProvider>
  );
}
