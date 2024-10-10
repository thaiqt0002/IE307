import { fruits_vegetables } from "@/data/data";
import { ImageBackground, ScrollView, Text, View } from "react-native";

const SectionListShow = () => {
  return (
    <View className="flex w-full items-center gap-2">
      <Text className="text-xl text-blue-800 font-bold">
        SectionList - Fruit & Vegetables
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="bg-gray-300 h-80 w-full flex overflow-scroll"
      >
        <ImageBackground src="https://picsum.photos/seed/picsum/400/800">

          {fruits_vegetables.map((item, index) => (
            
            <View
              className="flex"
              key={index}
            >
              {item.data.map((data, index) => (
                <View
                  className="flex flex-row justify-between items-center bg-white py-2 px-2 rounded-xl mb-1 mt-2 mx-3"
                  key={index}
                >
                  <Text key={index} className="text-2xl">
                    {data}
                  </Text>
                  <View className="bg-sky-500 h-12 w-28 rounded-sm flex justify-center items-center">
                <Text className="text-white text-xl">SELECT</Text>
              </View>
                </View>
              ))}
            </View>
          ))}
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default SectionListShow;
