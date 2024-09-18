import classes from './MainHeader.module.css';
import { MdPostAdd, MdMessage } from 'react-icons/md';

function MainHeader(props) {
    return (
        <header className={classes.header} >
            <h1 className={classes.logo}>
                <MdMessage />
                Posts
            </h1>

            <p>
                <button className={classes.button} onClick={props.createPost} >
                    <MdPostAdd size={18} />
                    Novo Post
                </button>
            </p>
        </header>
    )
}

export default MainHeader;
