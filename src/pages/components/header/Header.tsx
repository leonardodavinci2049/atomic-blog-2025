import usePosts from "../../../context/usePosts";
import Results from "./components/results"
import SearchPosts from "./components/SearchPosts"

const Header = () => {
  // 3) USE THE CONTEXT
  const {onClearPosts} = usePosts();
  return (
    <header className="mb-8 font-bold justify-between flex">
    <h1 className="text-2xl flex items-center gap-2">
      <span className="text-[140%] leading-none">⚛️</span>The Atomic Blog
    </h1>
    <div className="flex items-center gap-8">
      <Results />
      <SearchPosts />
      <button 
        className="text-sm border border-amber-400 bg-amber-400 font-bold py-2.5 px-6 cursor-pointer" 
        onClick={onClearPosts}
      >
        Clear posts
      </button>
    </div>
  </header>
  )
}

export default Header