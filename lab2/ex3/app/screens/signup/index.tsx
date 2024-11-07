import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon1 from "react-native-vector-icons/Fontisto";
import Icon2 from "react-native-vector-icons/Feather";
import Icon4 from "react-native-vector-icons/SimpleLineIcons";
import { useRouter } from "expo-router";

export default function Index() {
    const router = useRouter();

  const handleLogIn = () => {
    console.log("Log in");
  };

  const logInRedirect = () => {
    router.push("/screens/login");
}
  return (
    <View className="flex justify-center items-center pt-20 h-full gap-12">
      <Image
        className="bg-black rounded-full size-32"
        source={require("@/assets/images/react-logo.png")}
      />
      <Text className="text-3xl font-bold">Sign up</Text>
      <View className="w-2/3 flex">
        <View className="flex flex-row border w-full py-4 px-5 gap-2 rounded-xl mb-6">
          <Icon4 name="user" size={25} />
          <TextInput placeholder="Enter username" className="w-full" />
        </View>
        <View className="flex flex-row border w-full py-4 px-5 gap-2 rounded-xl mb-6">
          <Icon1 name="email" size={25} />
          <TextInput placeholder="Enter Email" className="w-full" />
        </View>
        <View className="flex flex-row border w-full py-4 px-5 gap-2 rounded-xl mb-6">
          <Icon2 name="lock" size={25} />
          <TextInput placeholder="Enter Password" className="w-full" />
        </View>
        <View className="flex flex-row border w-full py-4 px-5 gap-2 rounded-xl">
          <Icon2 name="lock" size={25} />
          <TextInput placeholder="Confirm Password" className="w-full" />
        </View>

        <TouchableOpacity
          onPress={handleLogIn}
          className="bg-orange-500 text-white py-4 mt-6 rounded-xl"
        >
          <Text className="text-center text-white text-xl">CREATE</Text>
        </TouchableOpacity>
        <Text onPress={logInRedirect} className="text-center mt-4">
          Already have an account?{" "}
          <Text className="text-blue-800 font-bold">Login now!</Text>
        </Text>
      </View>
    </View>
  );
}
