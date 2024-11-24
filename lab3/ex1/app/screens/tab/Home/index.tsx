import React from "react";
import { View, Text } from "react-native";
import Sidebar from "./sidebar";

export default function Home() {
  return (
    <View className="flex flex-row h-full">
      <Sidebar />
      <View className="flex-1 p-4">
        <Text className="text-2xl">Home Page</Text>
      </View>
    </View>
  );
}