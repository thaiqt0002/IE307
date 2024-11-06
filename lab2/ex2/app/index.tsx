import Banner from "@/components/banner";
import Feedback from "@/components/feedback";
import QuestionList from "@/components/questionList";
import ToggleField from "@/components/toggle";
import { useNotiState } from "@/hooks/notiState";
import { useQuestionListState } from "@/hooks/questionListState";
import { useThemeState } from "@/hooks/themeState";
import { View } from "react-native";

export default function Index() {
  const { theme, handleThemeChange } = useThemeState();
  const { notification, handleNotiChange } = useNotiState();
  const { questionList, handleQuestionListChange } = useQuestionListState();
  return (
    <View
      id="container"
      className={`flex justify-center items-center h-full px-8 gap-6 ${
        theme.STATE == "light" ? "bg-white" : "bg-black"
      }`}
    >
      <Banner theme={theme} />
      <ToggleField
        theme={theme}
        setTheme={handleThemeChange}
        noti={notification}
        setNoti={handleNotiChange}
      />
      <Feedback
        theme={theme}
        noti={notification}
        setList={handleQuestionListChange}
      />
      <QuestionList list={questionList} theme={theme} />
    </View>
  );
}
