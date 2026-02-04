import { useContext } from 'react';
import '../Styles/CreatePost.css'
import { useRef } from 'react';
import { PostContext } from '../store/CreatePostContext';
import { useNavigate } from 'react-router-dom';

function CreatePosts() {

    const { addPost } = useContext(PostContext)
    const naviagte = useNavigate()

    const UserIdElement = useRef(null)
    const TitleElement = useRef(null)
    const ContentElement = useRef(null)
    const LikesElement = useRef(null)
    const DislikesElement = useRef(null)
    const TagsElement = useRef(null)

    const handlePostButton = (e) => {
        e.preventDefault();

        const UserId = UserIdElement.current.value;
        const Title = TitleElement.current.value;
        const Content = ContentElement.current.value;
        const Likes = LikesElement.current.value;
        const Dislikes = DislikesElement.current.value;
        const Tags = TagsElement.current.value.split(" ");

        fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: UserId,
                title: Title,
                body: Content,
                reactions: {
                    likes: Likes,
                    dislikes: Dislikes
                },
                tags: Tags
            })
        })
            .then(res => res.json())
            .then(post => {
                addPost(post)
                naviagte("/")
            });

        UserId.current.value = ""
        Title.current.value = ""
        Content.current.value = ""
        Likes.current.value = ""
        Dislikes.current.value = ""
        Tags.current.value = ""
    }

    return (
        <>
            <form className='form-body' onSubmit={handlePostButton}>
                <div className="mb-3">
                    <label htmlFor="UserId" className="form-label">UserId</label>
                    <input type="text" className="form-control" id="UserId" required ref={UserIdElement} />
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Post Title</label>
                    <input type="text" className="form-control" id="title" required ref={TitleElement} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Content" className="form-label">Post Content</label>
                    <textarea className="form-control" id="Content" rows="3" required ref={ContentElement}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="Reactions" className="form-label">Likes</label>
                    <input type="number" className="form-control" id="Reactions" required ref={LikesElement} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Reactions" className="form-label">Dislikes</label>
                    <input type="number" className="form-control" id="Reactions" required ref={DislikesElement} />
                </div>
                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Tags</label>
                    <input type="text" className="form-control" id="tags" required placeholder='Enter your tags with space' ref={TagsElement} />
                </div>
                <button type="submit" className="btn btn-primary">Post</button>
            </form>
        </>
    )
}

export default CreatePosts;

// Used to navigate naviagte("/"): Go to Home page