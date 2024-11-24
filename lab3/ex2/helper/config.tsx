import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ConfigContextType {
  isDarkTheme: boolean;
  toggleTheme: () => void;
  fontSize: number;
  setFontSize: (size: number) => void;
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const ConfigProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<number>(16);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <ConfigContext.Provider value={{ isDarkTheme, toggleTheme, fontSize, setFontSize }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};