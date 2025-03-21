import {  createContext } from "react";
import createRandomPost from "../core/createRandomPost";

// 1) CREATE A CONTEXT
interface PostContextType {
  posts: ReturnType<typeof createRandomPost>[];
  onAddPost: (post: ReturnType<typeof createRandomPost>) => void;
  onClearPosts: () => void;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const PostContext = createContext<PostContextType>({
  posts: [],
  onAddPost: () => {},
  onClearPosts: () => {},
  searchQuery: "",
  setSearchQuery: () => {},
});


export default PostContext;
// 3) USE THE CONTEXT IN YOUR COMPONENTS