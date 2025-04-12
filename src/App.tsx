import { Route, Routes } from "react-router";
import CreatePost from "./pages/CreatePost/CreatePost";
import ViewPosts from "./pages/ViewPosts/ViewPosts";
import { Toaster } from "react-hot-toast";
import usePostStore from "./store/PostStore";
import { Navigate } from "react-router";

const App = () => {
  const set1Completed = usePostStore((state) => state.step1Completed);
  return (
    <>
      <Routes>
        <Route path="/" element={<CreatePost />} />
        <Route path="/step/1" element={<CreatePost />} />
        <Route
          path="/step/2"
          element={set1Completed ? <ViewPosts /> : <Navigate to="/step/1" />}
        />
      </Routes>
      <Toaster position="top-center" />
    </>
  );
};

export default App;
