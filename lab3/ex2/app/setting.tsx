import { useConfig } from "@/helper/config";
import React from "react";
import { View, Text, Switch } from "react-native";
import Slider from "@react-native-community/slider";

export default function Setting() {
  const { isDarkTheme, toggleTheme, fontSize, setFontSize } = useConfig();

  return (
    <View
      className={`${
        isDarkTheme ? "bg-black" : "bg-white"
      } h-screen flex justify-center items-center`}
    >
      <View className="h-fit w-3/4 flex justify-between items-center flex-row">
        <Text
          className={`${isDarkTheme ? "text-white" : "text-black"}`}
          style={{ fontSize }}
        >
          Dark Theme
        </Text>
        <Switch value={isDarkTheme} onValueChange={toggleTheme} />
      </View>
      <View className="h-fit w-3/4 flex justify-between items-center flex-row">
        <Text
          className={`${isDarkTheme ? "text-white" : "text-black"}`}
          style={{ fontSize }}
        >
          Font size: {fontSize}
        </Text>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={12}
          maximumValue={20}
          onValueChange={setFontSize}
          minimumTrackTintColor={isDarkTheme ? "#0fdbaf" : "#000000"}
          maximumTrackTintColor={isDarkTheme ? "#9df3d2" : "#000000"}
        />
      </View>
    </View>
  );
}
