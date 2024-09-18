import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";

function PostList(props) {
    return (
        <>
            {props.isPosting && (
                <Modal onClose={props.onStopPosting}>
                    <NewPost 
                        onCancel={props.onStopPosting}
                    />
                </Modal>
            )}
            
            <ul className={classes.posts}>
                <Post 
                    author={enteredAuthor}
                    body={enteredBody}
                />
            </ul>
        </>  
    );  
}

export default PostList;
