import { MdOutlineCreate } from "react-icons/md";
import { RiGalleryView2 } from "react-icons/ri";
import { Link } from "react-router";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="title">Blog</h1>
      <ul className="list">
        <li className="listitem">
          <button>
            <Link to={"/step/1"}>
              <MdOutlineCreate />
              <p>Create New Post</p>
            </Link>
          </button>
        </li>
        <li className="listitem">
          <button>
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
