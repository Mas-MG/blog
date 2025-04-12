import { MdOutlineCreate } from "react-icons/md";
import { RiGalleryView2 } from "react-icons/ri";
import { Link } from "react-router";
import usePostStore from "../store/PostStore";
import { useEffect } from "react";

const Sidebar = () => {
  const activeListitem = usePostStore((state) => state?.activeListitem);
  const setActive = usePostStore((state) => state?.setActive);
  const step1Completed=usePostStore(state=>state.step1Completed)

  useEffect(() => {
    localStorage.setItem("activeListitem", activeListitem);
  }, [activeListitem]);
  
  return (
    <div className="sidebar">
      <h1 className="title">Blog</h1>
      <ul className="list">
        <li
          className={`listitem ${activeListitem == "create" ? "active" : ""}`}
        >
          <button onClick={() => setActive("create")}>
            <Link to={"/step/1"}>
              <MdOutlineCreate />
              <p>Create New Post</p>
            </Link>
          </button>
        </li>
        <li className={`listitem ${activeListitem == "view" ? "active" : ""} ${!step1Completed ? "pointer-events-none opacity-50" : ""}`}>
          <button disabled={!step1Completed} onClick={() => setActive("view")}>
            <Link to={"/step/2"}>
              <RiGalleryView2 />
              <p>View All Posts</p>
            </Link>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
