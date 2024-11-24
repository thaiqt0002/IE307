import { addNote, getNotes, updateNote } from "@/helper/db";
import { useNote } from "@/helper/note";
import { useConfig } from "@/helper/config";
import { router } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
export default function AddNoteContext() {
  const { notes, loadNotes } = useNote();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [selectedNote, setSelectedNote] = useState<any | null>(null);
  const { isDarkTheme } = useConfig();

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
      className={`h-full flex justify-center items-center gap-4 ${
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
          className={`w-64 overflow-x-auto border p-2 ${
            isDarkTheme ? "text-white border-white" : "text-black"
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
          className={`w-64 overflow-x-auto border p-2 ${
            isDarkTheme ? "text-white border-white" : "text-black"
          }`}
          placeholder="Nhập nội dung"
          multiline={true}
          numberOfLines={4}
          placeholderTextColor="gray"
          value={content}
          onChangeText={(content) => {
            setContent(content);
          }}
        />
      </View>
      <View className='flex flex-row gap-4'>
        <TouchableOpacity
          onPress={() => navigateBack()}
          className="bg-red-400 h-fit p-4 rounded-full"
        >
          <Icon name="close" color="white" size={16} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleAddNote(title, content)}
          className="bg-green-400 p-4 rounded-full"
        >
          <Icon name="check" color="white" size={16} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
