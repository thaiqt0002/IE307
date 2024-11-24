import { useConfig } from "@/helper/config";
import { deleteNote } from "@/helper/db";
import { useNote } from "@/helper/note";
import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

export default function Index() {
  const { isDarkTheme, fontSize } = useConfig();
  const { notes, loadNotes } = useNote();
  const router = useRouter();

  const navigateAddNote = () => {
    router.push("/home/addNote");
  };
  const handleDeleteNote = (id: number) => {
    deleteNote(id, loadNotes);
  };
  return (
    <View
      className={`flex items-center gap-2 w-full h-full ${
        isDarkTheme ? "bg-black" : "bg-white"
      }`}
    >
      <View className="mt-16">
        <Text className="text-3xl font-bold text-orange-600 ">Note App</Text>
      </View>
      <View className="flex flex-row justify-between items-center w-3/4">
        <Text
          className={`text-3xl font-bold ${
            isDarkTheme ? "text-white " : "text-black"
          }`}
        >
          Add Notes
        </Text>
        <TouchableOpacity
          onPress={() => navigateAddNote()}
          className="bg-blue-400 p-1 rounded-full"
        >
          <Icon name="plus" color="white" size={36} />
        </TouchableOpacity>
      </View>
      <ScrollView className="w-3/4">
        {notes.map((note) => (
          <View
            key={note.id}
            className={`flex flex-row gap-2 mb-3 w-full h-fit justify-between items-center border rounded-xl p-3 ${
              isDarkTheme ? "border-white" : ""
            }`}
          >
            <View className="w-2/3">
              <Text
                className={`font-bold text-xl ${
                  isDarkTheme ? "text-white" : "text-black"
                }`}
                style={{ fontSize }}
              >
                {note.title}
              </Text>
              <Text
                className={`text-lg font-normal ${
                  isDarkTheme ? "text-white" : "text-black"
                }`}
                style={{ fontSize }}
              >
                {note.content}
              </Text>
            </View>
            <View className="flex flex-row gap-2">
              <TouchableOpacity
                onPress={() => handleDeleteNote(note.id)}
                className="bg-red-400 p-2 h-12 rounded-xl flex justify-center items-center"
              >
                <Text className="text-white font-bold">Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
