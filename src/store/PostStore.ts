import { create } from "zustand";
import { Post } from "../pages/CreatePost/CreatePost";

interface PostStore {
  step1Completed: boolean;
  createdPost: Post | null;
  activeListitem:string;
  created: () => void;
  newPost:(post:Post)=>void;
  setActive:(li:string)=>void
}

const usePostStore = create<PostStore>((set) => ({
  step1Completed: false,
  createdPost: null,
  activeListitem:localStorage.getItem("activeListitem") || "create",
  created: () => set(() => ({ step1Completed: true })),
  newPost:(post)=>set(()=>({createdPost:post})),
  setActive:(li)=>set(()=>({activeListitem:li}))
}));


export default usePostStore