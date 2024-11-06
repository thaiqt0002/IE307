import { themeState } from "@/constants/theme";
import { View, Text, FlatList, ScrollView } from "react-native";

type qaProps = {
  theme: themeState;
  list: string[];
};
const Item = ({ item, text_color }: { item: string; text_color: string }) => {
  return (
    <View>
      <Text className={`${text_color}`}>Q: {item}</Text>
    </View>
  );
};
const QuestionList = ({ theme, list }: qaProps) => {
  return (
    <View className="mt-2 max-h-44 h-44 w-full flex gap-4">
      <Text className={`text-xl font-bold ${theme.TEXT_COLOR}`}>
        Frequently Asked Questions
      </Text>
      <FlatList
        className="h-full overflow-scroll w-full"
        data={list}
        renderItem={(item) => (
          <Item item={item.item} text_color={theme.TEXT_COLOR} />
        )}
      />
    </View>
  );
};
export default QuestionList;
