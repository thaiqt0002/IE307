import { View } from "react-native";
import PostItem from "./PostItem";

const ItemList = [
  {
    username: "Jarrod Hayes",
    description:
      "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it. Nobody seemed to fully understand the beauty of this accomplishment except for the new worker who watched in amazement.",
    likes: 94717,
    comments: 14272,
    shares: 14272,
    avatar: "https://picsum.photos/seed/1000/200/300",
    image: "https://picsum.photos/seed/1001/400/300",
  },
  {
    username: "Lucas Wagner",
    description:
      "He heard the loud impact before he ever saw the result. It had been so loud that it had actually made him jump back in his seat. As soon as he recovered from the surprise, he saw the crack in the windshield. It seemed to be an analogy of the current condition of his life.",
    likes: 26325,
    comments: 2091,
    shares: 2091,
    avatar: "https://picsum.photos/seed/2000/200/300",
    image: "https://picsum.photos/seed/2002/400/300",
  },
  {
    username: "Gretchen Hartman",
    description:
      "Life isn't always beautiful. That was a lesson that Dan was learning. He also realized that life wasn't easy. This had come as a shock since he had lived a charmed life. He hated that this was the truth and he struggled to be happy knowing that his assumptions weren't correct. He wouldn't realize until much later in life that the difficult obstacles he was facing that were taking away the beauty in his life at this moment would ultimately make his life much more beautiful. All he knew was that at this moment was that life isn't always beautiful.",
    likes: 50747,
    comments: 2599,
    shares: 2599,
    avatar: "https://picsum.photos/seed/3000/200/300",
    image: "https://picsum.photos/seed/3003/400/300",
  },
  {
    username: "Mindy Peterson",
    description:
      "Since they are still preserved in the rocks for us to see, they must have been formed quite recently, that is, geologically speaking. What can explain these striations and their common orientation? Did you ever hear about the Great Ice Age or the Pleistocene Epoch? Less than one million years ago, in fact, some 12,000 years ago, an ice sheet many thousands of feet thick rode over Burke Mountain in a southeastward direction. The many boulders frozen to the underside of the ice sheet tended to scratch the rocks over which they rode. The scratches or striations seen in the park rocks were caused by these attached boulders. The ice sheet also plucked and rounded Burke Mountain into the shape it possesses today.",
    likes: 16903,
    comments: 3092,
    shares: 9957,
    avatar: "https://picsum.photos/seed/4000/200/300",
    image: "https://picsum.photos/seed/4004/400/300",
  },
  {
    username: "Kirsten Dunlap",
    description:
      "There was a leak in the boat. Nobody had yet noticed it, and nobody would for the next couple of hours. This was a problem since the boat was heading out to sea and while the leak was quite small at the moment, it would be much larger when it was ultimately discovered. John had planned it exactly this way.",
    likes: 87633,
    comments: 5292,
    shares: 9814,
    avatar: "https://picsum.photos/seed/5000/200/300",
    image: "https://picsum.photos/seed/5005/400/300",
  },
];
const Post = () => {
  return (
    <View>
      {ItemList.map((items, index) => {
        return <PostItem key={index} {...items} />;
      })}
    </View>
  );
};

export default Post
