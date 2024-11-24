import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Href, usePathname, useRouter } from "expo-router";
import Icon from "react-native-vector-icons/Entypo";


export default function Sidebar({setInvisible} : {setInvisible: (value: boolean) => void}) {
  const router = useRouter();
  const path = usePathname();
  const HOME = "/screens/tab/Home/base";
  const NOTI = "/screens/tab/Home/noti";
  const HELP = "/screens/tab/Home/help";
  const handleNavigation = (path: Href<string>) => {
    router.push(path);
    setInvisible(false);
  }
  return (
    <View className="h-full pt-12 flex gap-3 w-full">
      <TouchableOpacity
        className={`w-full py-4 pl-6 flex flex-row items-center gap-6 ${
          path == HOME ? "bg-blue-200" : ""
        }`}
        onPress={() => handleNavigation(HOME)}
      >
        <Icon name="home" size={24} color={path == HOME ? "#2563EB" : 'black'} />
        <Text className={`text-lg ${path == HOME ? "text-blue-600" : ""}`}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className={`w-full py-4 pl-6 flex flex-row items-center gap-6 ${
          path == NOTI ? "bg-blue-200" : ""
        }`}
        onPress={() => handleNavigation(NOTI)}
      >
        <Icon name="notification" size={24} color={path == NOTI ? "#2563EB" : 'black'} />
        <Text className={`text-lg ${path == NOTI ? "text-blue-600" : ""}`}>
          Notification
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className={`w-full py-4 pl-6 flex flex-row items-center gap-6 ${
          path == HELP ? "bg-blue-200" : ""
        }`}
        onPress={() => handleNavigation(HELP)}
      >
        <Icon name="help" size={24} color={path == HELP ? "#2563EB" : 'black'} />
        <Text className={`text-lg ${path == HELP ? "text-blue-600" : ""}`}>
          Help
        </Text>
      </TouchableOpacity>
    </View>
  );
}
