import { TextareaItem } from "@ant-design/react-native";
import { useState } from "react";
import { Text, View } from "react-native";

const Feedback = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <View className="flex w-full justify-center gap-4">
      <Text className="text-2xl">Feedback</Text>
      <View className="p-2 border h-fit">
        <TextareaItem
          placeholder="高度自适应"
          autoHeight
          style={{
            backgroundColor: "transparent",
            minHeight: 80,
            borderWidth: 0,
          }}
        />
      </View>
    </View>
  );
};
export default Feedback;
