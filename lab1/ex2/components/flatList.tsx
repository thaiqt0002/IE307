import { workouts } from "@/data/data";
import { ImageBackground, ScrollView, Text, View } from "react-native";

const FlatListShow = () => {
  return (
    <View className="w-full flex gap-2 items-center">
      <Text className="text-xl text-blue-800 font-bold">
        Flatlist - Workouts
      </Text>
      <ScrollView showsVerticalScrollIndicator={false} className="bg-gray-300 h-80 w-full flex overflow-scroll">
        <ImageBackground src="https://picsum.photos/seed/picsum/400/800">
          {workouts.map((item, index) => (
            <View
              className="flex flex-row justify-between items-center bg-white py-2 px-2 rounded-xl mb-1 mt-2 mx-3"
              key={index}
            >
              <Text className="text-2xl">{item.type}</Text>
              <View className="bg-sky-500 h-12 w-28 rounded-sm flex justify-center items-center">
                <Text className="text-white text-xl">SELECT</Text>
              </View>
            </View>
          ))}
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default FlatListShow;