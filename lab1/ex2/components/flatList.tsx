import { workouts } from "@/data/data";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import ListItem, { ListItemStateProps } from "./listItem";


const FlatListShow = ({ isSelectedList, onSelect } : ListItemStateProps) => {
  return (
    <View className="w-full flex gap-2 items-center">
      <Text className="text-xl text-blue-800 font-bold">
        Flatlist - Workouts
      </Text>
      <ScrollView showsVerticalScrollIndicator={false} className="bg-gray-300 h-80 w-full flex overflow-scroll">
        <ImageBackground src="https://picsum.photos/seed/picsum/400/800">
          {workouts.map((item, index) => (
            <ListItem text={item.type} key={index} isSelectedList={isSelectedList} onSelect={onSelect}></ListItem>
          ))}
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default FlatListShow;