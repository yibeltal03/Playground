import { useEffect, useState } from "react"
import Post from "./Post"
import classes from './PostList.module.css'
import { useLoaderData } from "react-router-dom"
function PostList(){

    // const [posts, setPostData] = useState([])
    // const [isFetching , setIsFetching] = useState(false)
    const posts = useLoaderData()
   
    function addPostHandler(postData){
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        // setPostData([post, ...postData])
        setPostData((existingPost) => [postData, ...existingPost])

    }

    return (
        
           
        <> 
        {posts.length > 0 && (  <ul className={classes.posts}>
            {posts.map((post)=> 
            <Post key={post.body} authors={post.author} body={post.body}/>)}            

        </ul>)}
        { posts.length == 0 && (
            <div style={{textAlign:'center', color:'white'}}>
                <h2>There are not notes :(</h2>
                <p>No Notes Try adding some</p>
            </div>
            
        )}
       

        </>
        
    );
}

export default PostList;
