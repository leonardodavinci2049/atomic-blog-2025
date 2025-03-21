import usePosts from "../../../../context/usePosts";

const SearchPosts = () => {
  const { searchQuery, setSearchQuery } = usePosts();
  return (
    <input
      className="bg-white border-2 border-neutral-300 rounded-md p-2 w-1/3"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}

export default SearchPosts