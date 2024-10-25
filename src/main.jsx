import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts,{loader as postLoader} from './routes/Posts'
// import Post from './components/Post'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NewPost from './routes/NewPost'
import RootLayout from './routes/RootLayout'

const router = createBrowserRouter([
  {paht: '/', element: <RootLayout/>, 
    children: [  
    {path: '/', 
      element: <Posts/>, 
      loader: postLoader,
      children: [
      {path: '/createPost', element: <NewPost/>}
    ]},
]
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}/> 
  </React.StrictMode>
)
