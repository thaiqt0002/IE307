import FlatListShow from "@/components/flatList";
import SectionListShow from "@/components/sectionList";
import { View } from "react-native";
export default function Index() {
  return (
    <View className="w-full mt-12 px-7 flex">
      <View className="flex justify-center items-center gap-4">
        <FlatListShow /> 
        <SectionListShow />  
      </View>
      <View></View>
    </View>
  );
}
