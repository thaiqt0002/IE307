import FlatListShow from "@/components/flatList";
import SectionListShow from "@/components/sectionList";
import SelectedExercise from "@/components/selectedExercise";
import { useState } from "react";
import { View } from "react-native";

export default function Index() {
  const [isSelectedList, setIsSelectedList] = useState<string[]>([]);
  const handleSelect = (item: string) => {
    setIsSelectedList((prevSelectedItems) => {
      if (prevSelectedItems.includes(item)) {
        return prevSelectedItems.filter(
          (selectedItem) => selectedItem !== item
        );
      } else {
        return [...prevSelectedItems, item];
      }
    });
  };
  return (
    <View className="w-full h-full pt-12 px-7 flex bg-white">
      <View className="flex justify-center items-center gap-4">
        <FlatListShow isSelectedList={isSelectedList} onSelect={handleSelect} />
        <SectionListShow isSelectedList={isSelectedList} onSelect={handleSelect}  />
        <SelectedExercise SelectedList={isSelectedList} />
      </View>
      <View></View>
    </View>
  );
}
