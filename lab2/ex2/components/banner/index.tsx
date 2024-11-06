import { themeState } from "@/constants/theme";
import { View } from "@ant-design/react-native";
import { Image, Text } from "react-native";

interface BannerProps {
    theme: themeState;
}

const Banner = ({theme} : BannerProps) => {
  return (
    <View className="">
      <View className="h-40 w-full bg-black">
        <Image
          source={{ uri: "https://picsum.photos/seed/picsum/600/600" }}
          className="w-60 h-40"
        />
      </View>
      <Text className={`font-bold text-xl text-center mt-4 ${theme.TEXT_COLOR}`}>
        React Native App
      </Text>
    </View>
  );
};
export default Banner;
