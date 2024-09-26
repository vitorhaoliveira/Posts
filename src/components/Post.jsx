import { Link, redirect  } from 'react-router-dom';
import classes from './Post.module.css';
import { FaTrash } from 'react-icons/fa';

function Post(props) {
    async function deletePostHandler() {
        try {
            await props.onDelete(props.id);  // Chama a função de deleção passada como prop
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className={classes.post}>
            <li>
                <p className={classes.author}>{props.author}</p>
                <p className={classes.text}>{props.body}</p>
            </li>
            <div className={classes.btnContainer}>
                <Link className={classes.btnDetails} to={props.id}> 
                    Detalhes
                </Link>

                <FaTrash 
                    className={classes.btnDelete} 
                    size={23} 
                    onClick={deletePostHandler} 
                />
            </div>
        </div>
    );
}

export default Post;

