import { useContext, useEffect, useState } from "react"
import Post from "./Post"
import { PostContext } from "../store/CreatePostContext"
import WelcomeMessage from "./WelcomeMessage"
import LoadingSpinner from "./LoadingSpinner"

function PostList() {

  const { postList, fetching } = useContext(PostContext)

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 ? <WelcomeMessage /> : postList.map((post, idx) =>
        <Post key={idx} post={post} />
      )}
    </>
  )
}

export default PostList

// postList.map((post) =>
//         <Post key={post.id} post={post} />
//       )}

// this extract the object class(single post) from array and pass it as props.
// idx -> idx always means “the index of the item"