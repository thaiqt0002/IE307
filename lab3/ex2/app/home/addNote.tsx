import { addNote, getNotes, updateNote } from "@/helper/db";
import { useNote } from "@/helper/note";
import { useTheme } from "@/helper/config";
import { router } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function AddNoteContext() {
  const { notes, loadNotes } = useNote();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [selectedNote, setSelectedNote] = useState<any | null>(null);
  const { isDarkTheme } = useTheme();

  const handleAddNote = (newTitle: string, newContent: string) => {
    if (selectedNote) {
      updateNote(selectedNote.id, newTitle, newContent, () => {
        loadNotes();
        setSelectedNote(null);
        setTitle("");
        setContent("");
      });
    } else {
      addNote(newTitle, newContent, () => {
        loadNotes();
        setTitle("");
        setContent("");
      });
    }
    navigateBack();
  };

  const navigateBack = () => {
    router.back();
  };
  return (
    <View
      className={`h-full flex justify-center items-center ${
        isDarkTheme ? "bg-black" : "bg-white"
      }`}
    >
      <View className="flex flex-row gap-2 items-center">
        <Text
          className={`font-bold w-20 ${
            isDarkTheme ? "text-white" : "text-black"
          }`}
        >
          Title:
        </Text>
        <TextInput
          className={`w-32 overflow-x-auto ${
            isDarkTheme ? "text-white" : "text-black"
          }`}
          placeholder="Nhập tiêu đề"
          placeholderTextColor="gray"
          value={title}
          onChangeText={(title) => {
            setTitle(title);
          }}
        />
      </View>
      <View className="flex flex-row gap-2 items-center">
        <Text
          className={`font-bold w-20 text-left ${
            isDarkTheme ? "text-white" : "text-black"
          }`}
        >
          Content:
        </Text>
        <TextInput
          className={`w-32 overflow-x-auto ${
            isDarkTheme ? "text-white " : "text-black"
          }`}
          placeholder="Nhập nội dung"
          placeholderTextColor="gray"
          value={content}
          onChangeText={(content) => {
            setContent(content);
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => handleAddNote(title, content)}
        className="bg-blue-400 p-4 rounded-xl"
      >
        <Text className="font-bold text-white">Add Note</Text>
      </TouchableOpacity>
    </View>
  );
}
