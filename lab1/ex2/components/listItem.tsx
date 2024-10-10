import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";


export interface ItemTitle {
  text: string;
}
export interface ListItemStateProps {
  isSelectedList: string[];
  onSelect: (item: string) => void;
}

export type ListItemProps = ItemTitle & ListItemStateProps;

const ListItem = ({ text, isSelectedList, onSelect }: ListItemProps) => {
  const isSelected = isSelectedList.includes(text);
  return (
    <View >
      <View className="flex flex-row justify-between items-center bg-white py-2 px-2 rounded-xl mb-1 mt-2 mx-3">
        <Text className="text-2xl">{text}</Text>
        <View className="bg-sky-500 h-12 w-28 rounded-sm flex justify-center items-center">
          <TouchableOpacity onPress={() => onSelect(text)}>
            <Text className="text-white text-xl">{isSelected ? "DESELECT" : "SELECT" }</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ListItem;
