import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const handleLogout = () => {
    router.replace("/screens/login");
  };
  return (
    <View className="w-full h-full flex justify-center items-center">
      <Text>Profile Screen</Text>
      <TouchableOpacity onPress={handleLogout} className="bg-blue-400 p-2 ">
        <Text className="text-white font-bold">LOG OUT</Text>
      </TouchableOpacity>
    </View>
  );
}
