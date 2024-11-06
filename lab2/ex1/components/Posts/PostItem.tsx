import { Image, Text, Touchable, TouchableOpacity, View } from "react-native";
import Icon1 from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Octicons";
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons";
import { useState } from "react";

interface LikeStatus {
  liked: boolean;
}

interface InteractStatus {
  likedNow: number;
  commentedNow: number;
  sharedNow: number;
}
interface PostItemProps {
  username: string;
  description: string;
  likes: number;
  comments: number;
  shares: number;
  avatar: string;
  image: string;
}

const PostItem = (props: PostItemProps) => {
  const { username, description, likes, comments, shares, avatar, image } =
    props;
  const [isLiked, setIsLiked] = useState<LikeStatus>({ liked: false });
  const [interactNow, setInteractNow] = useState<InteractStatus>({
    likedNow: likes,
    commentedNow: comments,
    sharedNow: shares,
  });
  const [showDescription, setShowDescription] = useState<boolean>(false);
  const Interact = (action: string) => {
    switch (action) {
      case "like":
        setIsLiked({ liked: !isLiked.liked });
        setInteractNow((preState) =>({
          ...preState,
          likedNow: isLiked.liked ? interactNow.likedNow - 1 : interactNow.likedNow + 1 ,
          
        }));
        break;
      case "comment":
        setInteractNow((preState) => ({
          ...preState,
          commentedNow: interactNow.commentedNow + 1,
          
        }));
        break;
      case "share":
        setInteractNow((preState) => ({
          ...preState,
          sharedNow: interactNow.sharedNow + 1,
        }));
        break;
      default:
        break;
    }
  };
  const MoreDescription = () => {
    setShowDescription(!showDescription);
  }
  return (
    <View className="h-fit mx-5 my-3 rounded-lg bg-white p-4 flex flex-col gap-3">
      <View className="flex flex-row items-center gap-4">
        <View>
          <Image src={avatar} className="size-12 rounded-full bg-gray-200" />
        </View>
        <Text className="text-xl font-bold">{username}</Text>
      </View>
      <TouchableOpacity className="h-fit" activeOpacity={showDescription ? 0 : 1} onPress={showDescription ? MoreDescription : undefined} >
        <Text numberOfLines={showDescription ? undefined : 3} ellipsizeMode="tail" className="">
          {description}
        </Text>
        {showDescription ? 
          <Text className="text-gray-400" onPress={MoreDescription}>Rút gọn</Text> :
          <Text className="text-gray-400" onPress={MoreDescription}>Xem thêm</Text>
        }
      </TouchableOpacity>
      <View>
        <Image src={image} className="w-full h-60 rounded-lg bg-gray-100" />
      </View>
      <View className="flex flex-row justify-between">
        <Text>{interactNow.likedNow.toLocaleString("en-vi")} Likes</Text>
        <Text>{interactNow.commentedNow.toLocaleString("en-vi")} Comments </Text>
        <Text>{interactNow.sharedNow.toLocaleString("en-vi")} Shares</Text>
      </View>
      <View className="flex flex-row justify-between items-center h-12 border-t-2 border-gray-100 pt-4 px-2">
        <TouchableOpacity
          className="flex flex-row items-center gap-2"
          onPress={() => Interact("like")}
        >
          {isLiked.liked ? (
            <Icon1 name="like1" size={16} color="#0c9ef3" />
          ) : (
            <Icon1 name="like2" size={16} />
          )}
          {isLiked.liked ? (
            <Text className="font-bold text-lg align text-[#0c9ef3]">Like</Text>
          ) : (
            <Text className="font-bold text-lg align">Like</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity className="flex flex-row items-center gap-2" onPress={() => Interact("comment")}>
          <Icon2 name="comment" size={16} />
          <Text className="font-bold text-lg">Comments</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex flex-row items-center gap-2" onPress={() => Interact("share")}>
          <Icon3 name="share-outline" size={16} />
          <Text className="font-bold text-lg" onPress={() => Interact("share")}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostItem;
