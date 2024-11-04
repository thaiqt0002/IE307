import { Switch } from "@ant-design/react-native";
import { Text, View } from "react-native";
interface ToggleProps {
  text?: string;
  toggle?: boolean;
}

export default function Toggle({ text, toggle }: ToggleProps) {
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <View className="flex items-center justify-between w-full flex-row">
      <Text className="">{"  " + text}</Text>
      <Switch color="#00d7c0" onChange={onChange} />
    </View>
  );
}
