import { Stack, useRouter } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="sidebar" options={{ headerShown: false }} />
    </Stack>
  );
}
