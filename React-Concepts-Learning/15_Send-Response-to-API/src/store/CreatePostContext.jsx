import { createContext, useReducer, useState, useEffect } from "react";

export const PostContext = createContext({
    postList: [],
    fetching: false,
    addPost: () => { },
    addInitialPosts: () => { },
    deletePost: () => { }
})

const postListOperation = (currValue, action) => {
    let newPostList = {};

    if (action.type === "ADD_POST") {
        const newPost = {
            userId: action.payload.userId,
            title: action.payload.title,
            body: action.payload.body,
            reactions: {
                likes: action.payload.reactions.likes,
                dislikes: action.payload.reactions.dislikes,
            },
            tags: action.payload.tags
        };
        newPostList = [newPost, ...currValue];

    } else if (action.type === "ADD_INITIAL_POSTS") {
        newPostList = action.payload.posts; // return array-object

    } else {
        newPostList = currValue.filter((post) => post.id !== action.payload.postId)
    }
    return newPostList;
}

export default function PostListProvider({ children }) {

    const [postList, dispatchpostList] = useReducer(postListOperation, [])
    const [fetching, setFetching] = useState(false)
    const addPost = (post) => {

        const addPostAction = {
            type: "ADD_POST",
            payload: post
        }
        dispatchpostList(addPostAction)
    }

    const addInitialPosts = (posts) => {

        const addInitialPostAction = {
            type: "ADD_INITIAL_POSTS",
            payload: {
                posts // [{}]
            }
        }
        dispatchpostList(addInitialPostAction)
    }

    const deletePost = (postId) => {

        const deletePostAction = {
            type: "DELETE_POST",
            payload: {
                postId
            }
        }
        dispatchpostList(deletePostAction)
    }

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
            <PostContext.Provider value={{ postList, fetching, addPost, addInitialPosts, deletePost }}>
                {children}
            </PostContext.Provider>
        </>
    )
}