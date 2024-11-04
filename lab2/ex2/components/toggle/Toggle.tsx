import { useState } from "react";
import { Button, Text, View } from "react-native";
import { Switch } from "antd-mobile";

interface ToggleProps {
  text?: string;
  toggle?: boolean;
}

export default function Toggle({ text, toggle }: ToggleProps) {
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <View className="flex items-center justify-between w-full flex-row px-10">
      <Text className="">{text}</Text>
      <Switch colorPrimary onChange={onChange}/>
    </View>
  );
}
