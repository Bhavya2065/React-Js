import { createContext, useReducer, useRef } from "react";

export const PostContext = createContext({
    postList: [],
    addPost: () => { },
    addInitialPosts: () => { },
    deletePost: () => { }
})

const postListOperation = (currValue, action) => {
    let newPostList = {};

    if (action.type === "ADD_POST") {
        const newPost = {
            id: currValue.length === 0 ? 1 : currValue[0].id + 1,
            title: action.payload.Title,
            body: action.payload.Content,
            Reaction: action.payload.Reactions,
            userId: action.payload.UserId,
            tags: action.payload.Tags
        };
        newPostList = [newPost, ...currValue];

    }else if(action.type === "ADD_INITIAL_POSTS"){
        newPostList = action.payload.posts; // return array-object

    }else {
        newPostList = currValue.filter((post) => post.id !== action.payload.postId)
    }
    return newPostList;
}

export default function PostListProvider({ children }) {

    const [postList, dispatchpostList] = useReducer(postListOperation, [])
    const addPost = (UserId, Title, Content, Reactions, Tags) => {

        const addPostAction = {
            type: "ADD_POST",
            payload: {
                UserId,
                Title,
                Content,
                Reactions,
                Tags
            }
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

    return (
        <>
            <PostContext.Provider value={{ postList, addPost, addInitialPosts, deletePost }}>
                {children}
            </PostContext.Provider>
        </>
    )
}

const DEFAULT_POST_LIST = [
    {
        id: 1,
        title: 'Go To Mumbai',
        body: 'Hi friends, I am going to Mumbai for my vacation. I am very excited to explore Marine Drive, Gateway of India, and street food.',
        Reaction: 2,
        userId: 'user-9',
        tags: ['Vacation', 'Mumbai', 'Enjoying']
    },
    {
        id: 2,
        title: 'Passing BTech',
        body: 'Hi friends, I am finally complete my BTech graduation. It was a long journey with lots of learning and challenges.',
        Reaction: 10,
        userId: 'user-10',
        tags: ['Unbelievable', 'Graduating']
    },
    {
        id: 3,
        title: 'First Job Offer',
        body: 'I am happy to share that I received my first job offer as a software developer. Hard work really pays off.',
        Reaction: 25,
        userId: 'user-11',
        tags: ['Career', 'Job', 'Success']
    },
    {
        id: 4,
        title: 'Learning React',
        body: 'Started learning React and hooks. Understanding useState and useEffect now feels much easier than before.',
        Reaction: 15,
        userId: 'user-12',
        tags: ['React', 'Learning', 'Frontend']
    },
    {
        id: 5,
        title: 'Weekend Trip',
        body: 'Went on a weekend trip with friends. The weather was amazing and we enjoyed a lot of outdoor activities.',
        Reaction: 8,
        userId: 'user-13',
        tags: ['Trip', 'Friends', 'Weekend']
    },
    {
        id: 6,
        title: 'Coding Practice',
        body: 'Daily coding practice helps improve problem-solving skills and builds confidence for interviews.',
        Reaction: 18,
        userId: 'user-14',
        tags: ['Coding', 'Practice', 'DSA']
    },
    {
        id: 7,
        title: 'Hackathon Experience',
        body: 'Participated in a hackathon and learned teamwork, time management, and real-world problem solving.',
        Reaction: 30,
        userId: 'user-15',
        tags: ['Hackathon', 'Experience', 'Teamwork']
    }
];



