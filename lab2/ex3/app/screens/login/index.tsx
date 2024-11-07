import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon1 from "react-native-vector-icons/Fontisto";
import Icon2 from "react-native-vector-icons/Feather";
import Icon3 from "react-native-vector-icons/FontAwesome6";
import { useRouter } from "expo-router";
import { useState } from "react";
import users from "@/constants/user";
export default function Index() {
  const router = useRouter();
  const [ email, setEmail ] = useState<string>("");
  const [ password, setPassword ] = useState<string>("");

  const handleLogIn = () => {
    const userVerify = users.find(user => user.email === email && user.password === password);
    if (userVerify) {
      router.replace("/screens/tab");
    } else {
      alert("Tài khoản hoặc mật khẩu không hợp lệ");
    }
  };
  const signUpRedirect = () => {
    router.push("/screens/signup");
  };
  return (
    <View className="flex justify-center items-center pt-20 h-full gap-12">
      <Image
        className="bg-black rounded-full size-32"
        source={require("@/assets/images/react-logo.png")}
      />
      <Text className="text-3xl font-bold">Welcome</Text>
      <View className="w-2/3 flex">
        <View className="flex flex-row border w-full py-4 px-5 gap-2 rounded-xl mb-6">
          <Icon1 name="email" size={25} />
          <TextInput placeholder="Email" value={email} onChangeText={setEmail} className="w-full" />
        </View>
        <View className="flex flex-row border w-full py-4 px-5 gap-2 rounded-xl">
          <Icon2 name="lock" size={25} />
          <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} className="w-full" />
        </View>
        <Text className="w-full text-right text-pink-500">
          Forgot password?
        </Text>
        <TouchableOpacity
          onPress={handleLogIn}
          className="bg-orange-500 text-white py-4 mt-6 rounded-xl"
        >
          <Text className="text-center text-white text-xl">LOG IN</Text>
        </TouchableOpacity>
        <Text className="text-center mt-4 text-xl font-bold">
          Or login with
        </Text>
        <View className="flex flex-row justify-center gap-10 mt-6">
          <Icon3 name="facebook" size={50} />
          <Icon3 name="google" size={50} />
        </View>
        <Text onPress={signUpRedirect} className="text-center mt-4">
          Don't have an account?{" "}
          <Text className="text-blue-800 font-bold">Sign up here!</Text>
        </Text>
      </View>
    </View>
  );
}
