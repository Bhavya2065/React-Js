import { useContext } from "react"
import Post from "./Post"
import { PostContext } from "../store/CreatePostContext"

function PostList() {

  const { postList } = useContext(PostContext)

  return (
    <>
      {postList.map((post) => 
        <Post key={post.id} post={post}/>
      )}
    </>
  )
}

export default PostList