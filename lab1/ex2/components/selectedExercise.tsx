import { Text, View } from "react-native";

interface SelectedExerciseProps {
    SelectedList: string[];
}

const SelectedExercise = ({SelectedList} : SelectedExerciseProps ) => { 
  return (
    <View className="flex w-full items-center gap-2">
      <Text className="text-xl text-red-600 font-bold">
        SELECTED EXERCISE
      </Text>
      <View>
        <Text>{SelectedList.toString()}</Text>
      </View>
    </View>
  );
};

export default SelectedExercise;
