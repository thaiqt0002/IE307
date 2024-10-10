import { Text, View } from "react-native";

interface listItemProps {
  text: string;
  index: number;
}

const ListItem = ({index, text} : listItemProps) => {
  return (
    <View>
      <View
        className="flex flex-row justify-between items-center bg-white py-2 px-2 rounded-xl mb-1 mt-2 mx-3"
        key={index}
      >
        <Text className="text-2xl">{text}</Text>
        <View className="bg-sky-500 h-12 w-28 rounded-sm flex justify-center items-center">
          <Text className="text-white text-xl">SELECT</Text>
        </View>
      </View>
    </View>
  );
};

export default ListItem;
