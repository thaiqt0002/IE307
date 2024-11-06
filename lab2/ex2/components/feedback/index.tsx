import { Text, TextInput, View } from "react-native";
import { themeState } from "../../constants/theme";
import { TouchableOpacity } from "react-native";

interface FeedbackProps {
  theme: themeState;
}
const Feedback = ({ theme }: FeedbackProps) => {
  return (
    <View className="flex w-full justify-center gap-4">
      <Text
        className={`text-2xl ${
          theme.STATE == "light" ? "text-black" : "text-white"
        }`}
      >
        Feedback
      </Text>
      <View
        className={`border h-32 p-2 rounded-md ${
          theme.STATE == "light"
            ? "bg-white border-black text-black"
            : "bg-[#2f2f2f] border-[#bdbdbd] text-white"
        }`}
      >
        <TextInput
          placeholder="Your feedback here"
          multiline={true}
          className={`outline-none h-full bg-transparent align-top  ${
            theme.STATE == "light" ? "placeholder-black" : "placeholder-white"
          }`}
        ></TextInput>
      </View>
      <TouchableOpacity
        onPress={() => {}}
        className="flex justify-center items-center bg-blue-400 py-3"
      >
        <Text className="text-white font-bold">SEND FEEDBACK</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Feedback;
