import { useState } from "react";
import usePosts from "../../../../context/usePosts";


const FormAddPost = () => {
  const { onAddPost } = usePosts();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!body || !title) return;
    onAddPost({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <form className="p-6 bg-orange-50 flex gap-6 mb-10" onSubmit={handleSubmit}>
      <input className="bg-white border-2 border-neutral-300 rounded-md p-2 w-1/3"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
      />
      <textarea className="bg-white border-2 border-neutral-300 rounded-md p-2 w-2/3"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Post body"
      />
      <button className="border border-amber-400 bg-amber-400 font-bold py-2.5 px-6 cursor-pointer">Add post</button>
    </form>
  );
}

export default FormAddPost