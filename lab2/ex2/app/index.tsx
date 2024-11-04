import Feedback from "@/components/feedback";
import ToggleField from "@/components/toggle";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className='flex justify-center items-center h-screen px-8 gap-6'>
      <View></View>
      <ToggleField />
      <Feedback />
    </View>
  );
}
