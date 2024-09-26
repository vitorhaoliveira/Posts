import { Link } from 'react-router-dom';
import classes from './Post.module.css';

function Post(props) {
    return (
        <div className={classes.post}>
            <li >
                    <p className={classes.author}>{props.author}</p>
                    <p className={classes.text}>{props.body}</p>
            </li>
            <button>
                <Link to={props.id}> 
                    ...
                </Link>
            </button>
        </div>
    );
}

export default Post;
