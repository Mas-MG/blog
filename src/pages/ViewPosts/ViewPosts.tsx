import { useQuery } from "@tanstack/react-query";
import Sidebar from "../../components/Sidebar";
import { Post } from "../CreatePost/CreatePost";
import PostCard from "./PostCard/PostCard";
import { GridLoader } from "react-spinners";
import toast from "react-hot-toast";

const ViewPosts = () => {
  const allPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await res.json();
  };
  const { data, isPending, isError,error} = useQuery({
    queryKey: ["posts"],
    queryFn: allPosts,
  });

  const posts = data?.map((post: Post) => (
    <PostCard key={post?.id} post={post} />
  ));

  if(isError) toast.error(error?.message)

  return (
    <div className="main">
      <div className="main-container view">
        <Sidebar />
        <div className="content">
          <h1 className="title">View All Posts</h1>
          <div className={`posts ${isPending ? "items-center justify-center" : ""}`}>
          {isPending ?<GridLoader /> :isError ? error?.message : posts  }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPosts;
