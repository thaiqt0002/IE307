import { useState } from "react";

export const useQuestionListState = () => {
  const [questionList, setQuestionList] = useState<string[]>([]);
  const handleQuestionListChange = (newQuestion: string) => {
    setQuestionList((preState) => [...preState, newQuestion]);
  };
  return { questionList, handleQuestionListChange };
};
