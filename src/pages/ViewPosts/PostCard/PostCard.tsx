import { Post } from "../../CreatePost/CreatePost"

const PostCard = ({post}:{post:Post}) => {
    const {userId,title,body}=post
  return (
    <div className="card">
        <h2 className="card-title">{title?.split(" ")?.slice(0,5)?.join(" ")}</h2>
        <p className="card-userid"><span>User ID:</span> {userId}</p>
        <p className="card-description"><span>Description:</span> {body}</p>
    </div>
  )
}

export default PostCard