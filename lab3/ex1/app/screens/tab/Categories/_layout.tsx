import { Stack } from "expo-router";
import { Text, View } from "react-native";
import NavigationBar from "./navigationBar";

export default function Categories() {
  return (
    <Stack screenOptions={{
        animation: "none"
    }}>
      <Stack.Screen
        name="categories1"
        options={{
          title: "Categories1",
          headerShown: true,
          header() {
            return (
              <View className='pt-10'>
                <View className="py-4 pl-6"><Text className="text-2xl">Categories 1</Text></View>
                <NavigationBar />
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        name="categories2"
        options={{
            title: "Categories2",
            headerShown: true,
            header() {
              return (
                <View className='pt-10'>
                <View className="py-4 pl-6"><Text className="text-2xl">Categories 2</Text></View>
                <NavigationBar />
              </View>
              );
            },
          }}
      />
      <Stack.Screen
        name="categories3"
        options={{
            title: "Categories3",
            headerShown: true,
            header() {
              return (
                <View className='pt-10'>
                <View className="py-4 pl-6"><Text className="text-2xl">Categories 3</Text></View>
                <NavigationBar />
              </View>
              );
            },
          }}
      />
    </Stack>
  );
}
