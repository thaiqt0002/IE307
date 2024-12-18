import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import "../global.css";

export default function RootLayout() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/screens/login");
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="screens/tab" options={{ headerShown: false }} />
      <Stack.Screen name="screens/login/index" options={{ headerShown: false }} />
      <Stack.Screen name="screens/signup/index" options={{ headerShown: false }} />
    </Stack>
  );
}
