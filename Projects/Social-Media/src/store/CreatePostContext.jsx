import { createContext, useReducer, useRef } from "react";

export const PostContext = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { }
})

const postListOperation = (currValue, action) => {
    let newPostList = {};

    if (action.type === "ADD_POST") {
        const newPost = {
            id: currValue.length === 0 ? 1 : currValue[0].id + 1,
            title: action.payload.Title,
            body: action.payload.Content,
            like: action.payload.Likes,
            userId: action.payload.UserId,
            tags: action.payload.Tags
        };
        
        console.log([newPost, ...currValue]);
        
        return [newPost, ...currValue];
    } else {
        newPostList = currValue.filter((post) => post.id !== action.payload.postId)
    }
    return newPostList;
}

export default function PostListProvider({ children }) {

    const [postList, dispatchpostList] = useReducer(postListOperation, [])
    const addPost = (UserId, Title, Content, Likes, Tags) => {

        const addPostAction = {
            type: "ADD_POST",
            payload: {
                UserId,
                Title,
                Content,
                Likes,
                Tags
            }
        }
        dispatchpostList(addPostAction)
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

    return (
        <>
            <PostContext.Provider value={{ postList, addPost, deletePost }}>
                {children}
            </PostContext.Provider>
        </>
    )
}


