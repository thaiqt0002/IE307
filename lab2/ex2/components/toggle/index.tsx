import { useState } from "react";
import { View } from "react-native";
import Toggle from "./Toggle";

const ToggleField = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <View className='h-fit flex justify-center items-center gap-4'>
      <Toggle text="Dark mode"/>
      <Toggle text="Notification"/>
    </View>
  );
};
export default ToggleField;