import Feedback from "@/components/feedback";
import ToggleField from "@/components/toggle";
import { useNotiState } from "@/hooks/notiState";
import { useThemeState } from "@/hooks/themeState";
import { View } from "react-native";

export default function Index() {
  const { theme, handleThemeChange } = useThemeState();
  const { notification, handleNotiChange } = useNotiState();

  return (
    <View
      id="container"
      className={`flex justify-center items-center h-screen px-8 gap-6 ${
        theme.STATE == "light" ? "bg-white" : "bg-black"
      }`}
    >
      <ToggleField
        theme={theme}
        setTheme={handleThemeChange}
        noti={notification}
        setNoti={handleNotiChange}
      />
      <Feedback theme={theme} />
    </View>
  );
}
