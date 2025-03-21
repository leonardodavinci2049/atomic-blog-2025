import usePosts from "../../../../context/usePosts";

const List = () => {
  const { posts } = usePosts();
  return (
    <>
      <ul className="grid list-none grid-cols-4 gap-8">
        {posts.map((post, i) => (
          <li
            key={i}
            className="border border-orange-100 px-5 py-4 hover:bg-orange-50"
          >
            <h3 className="mb-4 font-bold text-neutral-700 capitalize">
              {post.title}
            </h3>
            <p className="font-firacode">{post.body}</p>
          </li>
        ))}
      </ul>
      {/* <Test /> */}
    </>
  );
};

export default List;
