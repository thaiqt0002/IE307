import { useTheme } from "@/helper/config";
import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

export default function Setting() {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <View
      className={`${
        isDarkTheme ? "bg-black" : "bg-white"
      } h-screen flex justify-center items-center`}
    >
      <View className="h-fit w-3/4 flex justify-between items-center flex-row">
        <Text className={`${isDarkTheme ? "text-white" : "text-black"}`}>
          Dark Theme
        </Text>
        <Switch value={isDarkTheme} onValueChange={toggleTheme} />
      </View>
    </View>
  );
}
