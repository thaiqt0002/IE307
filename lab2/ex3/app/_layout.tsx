import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import "../global.css";
import IndexScreen from "./screens/IndexScreen";
import Index2Screen from "./screens/Index2Screen";
import Index3Screen from "./screens/Index3Screen";

const Stack = createStackNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Index" component={IndexScreen} />
        <Stack.Screen name="Index2" component={Index2Screen} />
        <Stack.Screen name="Index3" component={Index3Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}