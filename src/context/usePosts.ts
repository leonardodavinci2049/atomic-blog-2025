import { useContext } from "react";
import { PostContextType } from "../types/PostContextType";
import PostContext from "./PostContext";

/**
 * Hook personalizado para acessar o contexto de posts
 * @returns Contexto de posts contendo os posts e métodos relacionados
 */

const usePosts = (): PostContextType => {
  const context = useContext(PostContext);
  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
  return context;
}

export default usePosts