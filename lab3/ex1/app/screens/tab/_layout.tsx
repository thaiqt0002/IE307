import { Tabs } from "expo-router";
import Icon1 from "react-native-vector-icons/FontAwesome5";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/Entypo";

export default function Index() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="Home/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Icon1 name="home" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Categories"
        options={{
          title: "Categories",
          tabBarIcon: ({ color }) => (
            <Icon2 name="category" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Favorite/index"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color }) => (
            <Icon2 name="favorite" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile/index"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Icon3 name="user" size={25} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
