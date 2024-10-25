import classes from './Post.module.css';
function Post({authors,body}){
       return (<div className={classes.post}>
        <p className={classes.author}>{ authors}</p>
        <p className={classes.text}>{ body}</p>

    </div>
    );
}

export default Post;