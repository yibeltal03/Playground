import classes from './NewPost.module.css'
import { useState } from 'react';
import Modal from '../components/Modal';
import { Link } from 'react-router-dom';
function NewPost({ onAddPost}){
    const [currentBody, setCurrentBody] = useState('Note Text')
    const [currentAuthor, setCurrentAuthor] = useState('Author')

  
    function bodyChangeHandler(event){
        setCurrentBody(event.target.value)
    }

    function authorChangeHandler(event){
        setCurrentAuthor(event.target.value)
    }

    function submitHandler(event){
        event.preventDefault();
        const postData = {
            body: currentBody,
            author: currentAuthor
        };
        console.log(postData)
        onAddPost(postData)
        onCancel();
    }
    // const [currentBody, setCurrentBody] = useState('')
 
    // function changeBodyHandler(event) {
    //     console.log(event.target.value )
    //     setCurrentBody(event.target.value)
    // }
    return (
        <Modal>
        <form className={classes.form} onSubmit={submitHandler}>
            {/* <button class="close-button" aria-label="Close alert" type="button" data-close>
    <span aria-hidden="true">&times;</span>
  </button> */}
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler}/>
      </p>
      <p className={classes.actions}>
            <Link to='..' type="button" >Cancel</Link>
            <button>Submit</button>
      </p>
     
    </form>
    </Modal>
    );
}

export default NewPost;