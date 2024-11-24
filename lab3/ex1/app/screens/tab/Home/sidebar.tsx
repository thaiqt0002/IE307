import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Sidebar() {
  const router = useRouter();

  return (
    <View className="w-1/4 h-full bg-gray-200 p-4">
      <TouchableOpacity onPress={() => router.push("/screens/tab/Categories/categories1")}>
        <Text className="text-lg mb-4">Categories 1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/screens/tab/Categories/categories2")}>
        <Text className="text-lg mb-4">Categories 2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/screens/tab/Categories/categories3")}>
        <Text className="text-lg mb-4">Categories 3</Text>
      </TouchableOpacity>
    </View>
  );
}