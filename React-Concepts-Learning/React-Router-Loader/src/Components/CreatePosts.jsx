import { useContext } from 'react';
import '../Styles/CreatePost.css'
import { data, Form, redirect } from 'react-router-dom';

function CreatePosts() {

    // const { addPost } = useContext(PostContext)

    return (
        <>
            <Form method='POST' className='form-body'>
                <div className="mb-3">
                    <label htmlFor="UserId" className="form-label">UserId</label>
                    <input type="text" className="form-control" id="UserId" name='userId' required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Post Title</label>
                    <input type="text" className="form-control" id="title" name='title' required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Content" className="form-label">Post Content</label>
                    <textarea className="form-control" id="Content" rows="3" name='content' required></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="Reactions" className="form-label">Likes</label>
                    <input type="number" className="form-control" id="Reactions" name='likes' required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Reactions" className="form-label">Dislikes</label>
                    <input type="number" className="form-control" id="Reactions" name='dislikes' required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Tags</label>
                    <input type="text" className="form-control" id="tags" name='tags' required placeholder='Enter your tags with space'/>
                </div>
                <button type="submit" className="btn btn-primary">Post</button>
            </Form>
        </>
    )
}

export const postAction = async (data) => {
    const formData = await data.request.formData(); // (Async) get all the form data "Asynchronously"
    const postData = Object.fromEntries(formData)
    postData.tags = postData.tags.split(" ");
    console.log(postData);
    
    
    fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(post => console.log(post));

    return redirect("/")
}

export default CreatePosts;

// Used to navigate naviagte("/"): Go to Home page
// Note: from <input type="text" className="form-control" id="UserId" name='userId' required/>
// name: 'the exact name used in dummyJSON' <- compelsary property