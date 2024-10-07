import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import "../global.css";
export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
