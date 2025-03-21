import { ReactNode, useMemo, useState } from "react";
import createRandomPost from "../core/createRandomPost";
import PostContext from "./PostContext";

type PostProviderProps = {
  children: ReactNode;
};

function PostProvider({ children }: PostProviderProps) {
  const [posts, setPosts] = useState(() =>    Array.from({ length: 30 }, () => createRandomPost()),  );
  const [searchQuery, setSearchQuery] = useState("");

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase()),
        )
      : posts;

  function handleAddPost(post: ReturnType<typeof createRandomPost>) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  const value = useMemo(() => {
    return {
      posts: searchedPosts,
      onAddPost: handleAddPost,
      onClearPosts: handleClearPosts,
      searchQuery,
      setSearchQuery,
    };
  }, [searchedPosts, searchQuery]);

  return (
    // 2) PROVIDE VALUE TO CHILD COMPONENTS
    <PostContext.Provider value={value}>
      {children}
    </PostContext.Provider>
  );

  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
}

export { PostProvider};
