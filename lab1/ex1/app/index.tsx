import Header from "@/components/Header";
import Post from "@/components/Posts";

import { ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView>
      <Header/>
      <Post/>
    </ScrollView>
  );
}