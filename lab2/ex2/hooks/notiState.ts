import { useState } from "react";

export const useNotiState = () => {
  const [notification, setNotification] = useState(false);

  const handleNotiChange = () => {
    setNotification((preState) => !preState);
  };

  return { notification, handleNotiChange };
};
