import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostList() {
    const [ enteredBody, setEnteryBody ] = useState('')

    function bodyChangeHandler(event) {
        setEnteryBody(event.target.value);
    }

    return (
        <>
            <NewPost onBodyChange={bodyChangeHandler} />
            <ul className={classes.posts}>
                <Post 
                    author="Vitor Hugo"
                    body={enteredBody}
                />
                <Post 
                    author="Vitor Hugo"
                    body="Sou desenvolvedor front end!"
                />
            </ul>
        </>
    );
}

export default PostList;
