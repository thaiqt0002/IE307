import { View } from "react-native";
import Toggle from "./Toggle";
import { themeState } from "../../constants/theme";

interface ToggleFieldProps {
  theme: themeState;
  setTheme: () => void;
  noti: boolean;
  setNoti: () => void;
}
const ToggleField = (props: ToggleFieldProps) => {
  const { theme, setTheme, noti, setNoti } = props;
  return (
    <View className="h-fit flex justify-center items-center gap-4 w-full">
      <Toggle text="Dark mode" onChange={setTheme} theme={theme} />
      <Toggle text="Notification" onChange={setNoti} theme={theme} />
    </View>
  );
};
export default ToggleField;
