import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";
import { useState } from "react";

function PostList(props) {
    const [ posts, setPosts ] = useState([]);

    function addPostHandler(postData) {
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
            {props.isPosting && (
                <Modal onClose={props.onStopPosting}>
                    <NewPost 
                        onCancel={props.onStopPosting}
                        onAddPost={addPostHandler}
                    />
                </Modal>
            )}
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => {
                        return(
                            <Post 
                                key={post.body}
                                author={post.author}
                                body={post.body}
                            />
                        )
                    })}
                </ul>
            )}
            {posts.length === 0 && (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <h2>Não existem posts.</h2>
                </div>
            )}
        </>  
    );  
}

export default PostList;
