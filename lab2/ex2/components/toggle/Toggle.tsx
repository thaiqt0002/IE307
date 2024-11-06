import { Switch } from "@ant-design/react-native";
import { Text, View } from "react-native";
import { themeState } from "../../constants/theme";
interface ToggleProps {
  theme: themeState;
  text?: string;
  onChange?: () => void;
}

export default function Toggle({ text, onChange, theme }: ToggleProps) {
  return (
    <View className="flex items-center justify-between w-full flex-row">
      <Text className={`${theme.TEXT_COLOR}`}>{"  " + text}</Text>
      <Switch color="#00d7c0" onChange={onChange} />
    </View>
  );
}
