import { darkTheme, lightTheme, themeState } from "@/constants/theme";
import { useState } from "react";

export const useThemeState = () => {
  const [theme, setTheme] = useState<themeState>(lightTheme);

  const handleThemeChange = () => {
    setTheme((preState) =>
      preState.STATE !== "light" ? lightTheme : darkTheme
    );
  };

  return { theme, handleThemeChange };
};
