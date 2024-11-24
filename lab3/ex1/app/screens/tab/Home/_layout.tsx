import { Stack } from "expo-router";
import { useState } from "react";
import {
  Button,
  View,
  Modal,
  Animated,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import Sidebar from "./sidebar";
import Icon from "react-native-vector-icons/Feather";

export default function RootLayout() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [sidebarAnimation] = useState(new Animated.Value(-250)); // Sidebar width

  const toggleSidebar = () => {
    if (isSidebarVisible) {
      Animated.timing(sidebarAnimation, {
        toValue: -250,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setSidebarVisible(false));
    } else {
      setSidebarVisible(true);
      Animated.timing(sidebarAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen
          name="base"
          options={{
            title: "Home",
            headerLeft: () => (
              <TouchableOpacity
                className="ml-1 mt-1 mr-4"
                onPress={toggleSidebar}
              >
                <Icon name="menu" size={28} />
              </TouchableOpacity>
            ),
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen name="sidebar" options={{ headerShown: false }} />
        <Stack.Screen
          name="noti"
          options={{
            title: "Notification",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="help"
          options={{
            title: "Help",
            headerLeft: () => (
              <TouchableOpacity
                className="ml-1 mt-1 mr-4"
                onPress={toggleSidebar}
              >
                <Icon name="menu" size={28} />
              </TouchableOpacity>
            ),
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="notiDetail"
          options={{
            title: "NotificationDetailsScreen",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen name="homeDetail" options={{ title: "HomeDetails" }} />
      </Stack>
      <Modal
        transparent={true}
        visible={isSidebarVisible}
        animationType="none"
        onRequestClose={toggleSidebar}
      >
        <TouchableWithoutFeedback onPress={toggleSidebar}>
          <View style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
            <TouchableWithoutFeedback>
              <Animated.View
                style={{
                  width: 250,
                  backgroundColor: "white",
                  transform: [{ translateX: sidebarAnimation }],
                }}
              >
                <Sidebar setInvisible={setSidebarVisible} />
              </Animated.View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}
