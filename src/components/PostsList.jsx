import Post from "./Post";
import classes from "./PostsList.module.css";

function PostList() {
    return (
        <ul className={classes.posts}>
            <Post 
                author="Vitor Hugo"
                body="Sou desenvolvedor front end!"
            />
            <Post 
                author="Vitor Hugo"
                body="Sou desenvolvedor front end!"
            />
        </ul>
    );
}

export default PostList;
