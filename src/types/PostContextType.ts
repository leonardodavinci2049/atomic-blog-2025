import { PostType } from "./PostType";

export interface PostContextType {
  posts: PostType[];
  onAddPost: (post: PostType) => void;
  onClearPosts: () => void;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}