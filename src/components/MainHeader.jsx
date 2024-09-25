import { Link } from 'react-router-dom';
import classes from './MainHeader.module.css';
import { MdPostAdd, MdMessage } from 'react-icons/md';

function MainHeader() {
    return (
        <header className={classes.header} >
            <h1 className={classes.logo}>
                <MdMessage />
                Posts
            </h1>

            <p>
                <Link to='/create-post' className={classes.button} >
                    <MdPostAdd size={18} />
                    Novo Post
                </Link>
            </p>
        </header>
    )
}

export default MainHeader;
