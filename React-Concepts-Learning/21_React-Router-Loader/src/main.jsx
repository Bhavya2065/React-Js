import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import CreatePosts, { postAction } from './Components/CreatePosts.jsx'
import PostList, { postLoader } from './Components/PostList.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList />, loader: postLoader },
      { path: "/createPost", element: <CreatePosts />, action: postAction }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

// Here in this structure, the App components are fixed means If we navigate to the other page then these App component stays intact. It doesn't remove.
