import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Noti() {
    const router = useRouter();
    const handleNavigate = () => {
        router.push("/screens/tab/Home/notiDetail");
    }
  return (
    <View className="w-full h-full flex justify-center items-center">
      <Text>Noti Screen</Text>
      <TouchableOpacity onPress={handleNavigate} className="bg-blue-400 p-2 ">
        <Text className="text-white font-bold">GO TO DETAILS</Text>
      </TouchableOpacity>
    </View>
  );
}
