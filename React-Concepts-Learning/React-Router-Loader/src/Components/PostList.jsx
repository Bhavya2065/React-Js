import { useContext, useEffect, useState } from "react"
import Post from "./Post"
import { PostContext } from "../store/CreatePostContext"
import WelcomeMessage from "./WelcomeMessage"
import { useLoaderData } from "react-router-dom"

function PostList() {
  const postList = useLoaderData()

  return (
    <>
      {postList.length === 0 ? <WelcomeMessage /> : postList.map((post, idx) =>
        <Post key={idx} post={post} />
      )}
    </>
  )
}

export const postLoader = () => {
  return fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then((data) => {
      return data.posts;
    });
}


export default PostList

// postList.map((post) =>
//         <Post key={post.id} post={post} />
//       )}

// this extract the object class(single post) from array and pass it as props.
// idx -> idx always means “the index of the item"