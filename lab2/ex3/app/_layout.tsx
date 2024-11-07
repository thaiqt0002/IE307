import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import "../global.css";

export default function RootLayout() {
  const [isLogged, setIsLogged] = useState<"idle" | "success">("idle");
  const router = useRouter();

  useEffect(() => {
    if (isLogged == "idle") {
      router.replace("/screens/login");
    }
  }, [isLogged]);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="screens/login/index" options={{ headerShown: false }} />
      <Stack.Screen name="screens/signup/index" options={{ headerShown: false }} />
      <Stack.Screen name="screens/tab" options={{ headerShown: false }} />
    </Stack>
  );
}
