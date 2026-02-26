import { createRoot } from 'react-dom/client'
import App from './Routes/App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Bag from './Routes/Bag.jsx'
import Home from './Routes/Home.jsx'
import itemStore from './store/index.js'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Bag", element: <Bag /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={itemStore}>
    <RouterProvider router={router} />
  </Provider>,
)
