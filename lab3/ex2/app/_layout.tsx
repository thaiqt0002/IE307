import { Stack, Tabs, useRouter } from "expo-router";
import { useEffect } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import "../global.css";
import { ConfigProvider, useConfig } from "@/helper/config";


export default function RootLayout() {
  return (
    <ConfigProvider>
      <TabsWithTheme />
    </ConfigProvider>
  );
}

function TabsWithTheme() {
  const { isDarkTheme } = useConfig();
  const router = useRouter();

  useEffect(() => {
    router.replace("/home");
  }, []);
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: isDarkTheme ? "black" : "white",
        },
        tabBarActiveTintColor: isDarkTheme ? "white" : "blue",
        tabBarInactiveTintColor: isDarkTheme ? "gray" : "darkgray",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "Setting",
          tabBarIcon: ({ color }) => (
            <Icon name="settings" size={25} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
