import { useContext } from 'react';
import '../Styles/CreatePost.css'
import { useRef } from 'react';
import { PostContext } from '../store/CreatePostContext';

function CreatePosts() {

    const { addPost } = useContext(PostContext)

    const UserId = useRef(null)
    const Title = useRef(null)
    const Content = useRef(null)
    const Reactions = useRef(null)
    const Tags = useRef(null)

    const handlePostButton = (e) => {
        e.preventDefault();

        addPost(
            UserId.current.value,
            Title.current.value,
            Content.current.value,
            Reactions.current.value,
            Tags.current.value.split(" ")
        )
        UserId.current.value = ""
        Title.current.value = ""
        Content.current.value = ""
        Reactions.current.value = ""
        Tags.current.value = ""
    }

    return (
        <>
            <form className='form-body' onSubmit={handlePostButton}>
                <div className="mb-3">
                    <label htmlFor="UserId" className="form-label">UserId</label>
                    <input type="text" className="form-control" id="UserId" required ref={UserId} />
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Post Title</label>
                    <input type="text" className="form-control" id="title" required ref={Title} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Content" className="form-label">Post Content</label>
                    <textarea className="form-control" id="Content" rows="3" required ref={Content}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="Reactions" className="form-label">Reactions</label>
                    <input type="number" className="form-control" id="Reactions" required ref={Reactions} />
                </div>
                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Tags</label>
                    <input type="text" className="form-control" id="tags" required placeholder='Enter your tags with space' ref={Tags} />
                </div>
                <button type="submit" className="btn btn-primary">Post</button>
            </form>
        </>
    )
}

export default CreatePosts;