import { useContext } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { PostContext } from '../store/CreatePostContext';
import '../Styles/App.css'

function Post({ post }) {
    const { deletePost } = useContext(PostContext)
    
    return (
        <>
            <div className="card post-card">
                <div className="card-body">
                    <h5 className="card-title">{post.title}
                        <span className="position-absolute top-0 start-0 translate-middle badge rounded-circle bg-info text-black post-id">
                            {post.id}
                        </span>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{cursor: "pointer"}} onClick={() => deletePost(post.id)}>
                            <RiDeleteBin6Line />
                        </span>
                    </h5>
                    <p className="card-text">{post.body}</p>
                    {post.tags.map((tag) => <span className="badge text-bg-primary" key={tag} style={{ marginRight: "4px" }}># {tag}</span>)}
                    <div className="post-reactions">
                        <button className="reaction-btn like">
                            👍 <span>{post.reactions.likes}</span>
                        </button>

                        <button className="reaction-btn dislike">
                            👎 <span>{post.reactions.dislikes}</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post
