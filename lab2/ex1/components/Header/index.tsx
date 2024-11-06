import { Text, View } from "react-native";

const Header = () => {
  return (
    <>
      <View className="h-20 w-full flex justify-center items-center bg-blue-400 mt-12">
        <Text className="text-white text-3xl font-bold">Social Media Feed</Text>
      </View>
    </>
  );
};

export default Header;
