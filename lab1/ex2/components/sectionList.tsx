import { fruits_vegetables } from "@/data/data";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import ListItem, { ListItemStateProps } from "./listItem";

const SectionListShow = ({ isSelectedList, onSelect }: ListItemStateProps) => {
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
            <View className="flex" key={index}>
              <View className="pl-20 mt-6">
                <Text className="text-blue-800   text-2xl text-semibold">
                  {item.title}
                </Text>
              </View>
              {item.data.map((data, index) => (
                <ListItem
                  text={data}
                  key={index}
                  isSelectedList={isSelectedList}
                  onSelect={onSelect}
                ></ListItem>
              ))}
            </View>
          ))}
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default SectionListShow;
