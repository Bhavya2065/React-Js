import { useContext, useEffect } from "react"
import Post from "./Post"
import { PostContext } from "../store/CreatePostContext"
import WelcomeMessage from "./WelcomeMessage"

function PostList() {

  const { postList, addInitialPosts } = useContext(PostContext)
  // console.log(postList); // array-object

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then((data) => {
        addInitialPosts(data.posts); // return [{}] 
      });
  }, [])

  return (
    <>
      {postList.length === 0 ? <WelcomeMessage /> : postList.map((post) =>
        <Post key={post.id} post={post} />
      )}
    </>
  )
}

export default PostList

// postList.map((post) =>
//         <Post key={post.id} post={post} />
//       )}

// this extract the object class(single post) from array and pass it as props.