import { useState } from "react";
import usePosts from "../../context/usePosts";
import createRandomPost from "../../core/createRandomPost";

const Archive = () => {
  const { onAddPost } = usePosts();

  // Here we don't need the setter function. We're only using state to store these posts because the callback function passed into useState (which generates the posts) is only called once, on the initial render. So we use this trick as an optimization technique, because if we just used a regular variable, these posts would be re-created on every render. We could also move the posts outside the components, but I wanted to show you this trick 😉
  const [posts] = useState(() =>
    // 💥 WARNING: This might make your computer slow! Try a smaller `length` first
    Array.from({ length: 30000 }, () => createRandomPost()),
  );

  const [showArchive, setShowArchive] = useState(false);

  return (
    <aside className="mb-10 opacity-75">
      <h2 className="mb-6 font-bold text-[#333] uppercase">Post archive</h2>
      <button className="mb-6 text-sm border border-amber-400 bg-amber-400 font-bold py-2.5 px-6 cursor-pointer" onClick={() => setShowArchive((s) => !s)}>
        {showArchive ? "Hide archive posts" : "Show archive posts"}
      </button>

      {showArchive && (
        <ul className="flex list-none flex-col gap-0.5 text-[90%]">
          {posts.map((post, i) => (
            <li
              key={i}
              className="flex items-center justify-between border border-orange-100 px-2 py-1"
            >
              <p>
                <strong>{post.title}:</strong> {post.body}
              </p>
              <button
                className="px-2 py-1 text-sm border border-amber-400 bg-amber-400 font-bold cursor-pointer"
                onClick={() => onAddPost(post)}
              >
                Add as new post
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
};

export default Archive;
