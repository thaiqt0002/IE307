import { NoteProvider } from "@/helper/note";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <NoteProvider>
        <StackWithNote/>
    </NoteProvider>
  );
}

const StackWithNote = () => {
    return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="addNote" />
    </Stack>
    )}
