import { useContext, useEffect, useState } from "react"
import Post from "./Post"
import { PostContext } from "../store/CreatePostContext"
import WelcomeMessage from "./WelcomeMessage"
import LoadingSpinner from "./LoadingSpinner"

function PostList() {

  const { postList, addInitialPosts } = useContext(PostContext)
  const [fetching, setFetching] = useState(false)

  useEffect(() => {
    setFetching(true)
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://dummyjson.com/posts', { signal })
      .then(res => res.json())
      .then((data) => {
        addInitialPosts(data.posts); // return [{}] 
        setFetching(false)
      });

    return () => {
      controller.abort();
    }
  }, [])

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 ? <WelcomeMessage /> : postList.map((post) =>
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