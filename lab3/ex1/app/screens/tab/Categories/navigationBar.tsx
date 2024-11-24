import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useRouter, usePathname } from "expo-router";

export default function NavigationBar() {
  const router = useRouter();
  const pathname = usePathname();

  const CATEGORIES1 = "/screens/tab/Categories/categories1";
  const CATEGORIES2 = "/screens/tab/Categories/categories2";
  const CATEGORIES3 = "/screens/tab/Categories/categories3";

  return (
    <View className="w-full h-12 flex justify-around items-center flex-row">
      <TouchableOpacity
        onPress={() => router.push(CATEGORIES1)}
        className={`flex justify-center items-center h-full border-b-2 ${
          pathname === CATEGORIES1 ? " border-blue-400" : "border-transparent"
        }`}
      >
        <Text className={`${pathname === CATEGORIES1 ? "text-blue-400" : ""}`}>
          Categories 1
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push(CATEGORIES2)}
        className={`flex justify-center items-center h-full border-b-2 ${
          pathname === CATEGORIES2 ? " border-blue-400" : "border-transparent"
        }`}
      >
        <Text className={`${pathname === CATEGORIES2 ? "text-blue-400" : ""}`}>
          Categories 2
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push(CATEGORIES3)}
        className={`flex justify-center items-center h-full border-b-2 ${
          pathname === CATEGORIES3 ? " border-blue-400" : "border-transparent"
        }`}
      >
        <Text className={`${pathname === CATEGORIES3 ? "text-blue-400" : ""}`}>
          Categories 3
        </Text>
      </TouchableOpacity>
    </View>
  );
}
