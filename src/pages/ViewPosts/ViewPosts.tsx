import { useQuery } from "@tanstack/react-query";
import Sidebar from "../../components/Sidebar";
import { Post } from "../CreatePost/CreatePost";
import PostCard from "./PostCard/PostCard";

const ViewPosts = () => {
  const allPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await res.json();
  };
  const { data, isPending, isSuccess } = useQuery({
    queryKey: ["posts"],
    queryFn: allPosts,
  });

  const posts = data?.map((post: Post) => (
    <PostCard key={post?.id} post={post} />
  ));

  return (
    <div className="main">
    <div className="main-container view">
      <Sidebar />
      <div className="content">
        <h1 className="title">View All Posts</h1>
        <div className="posts">
          {posts}
        </div>
      </div>
    </div>
    </div>
  );
};

export default ViewPosts;
