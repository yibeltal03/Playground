import {MdPostAdd, MdMessage} from 'react-icons/md'
import classes from './MainHeader.module.css'
import { Link } from 'react-router-dom';
function MainHeader({onCreatePost}){
    return (
        <header className={classes.header}>
            <h1 className={classes.log}>
                <MdMessage/>
                React Poster
                 </h1>
                 <p>
                    <Link to='/createPost' className={classes.button}>
                        <MdPostAdd size={18}/>
                        New Post
                    </Link>
                    
                 </p>
        </header>

    );

}

export default MainHeader;