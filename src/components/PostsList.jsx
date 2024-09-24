import Post from "./Post";
import classes from "./PostsList.module.css";
import { useEffect, useState } from "react";

function PostList() {
    const [ posts, setPosts ] = useState([]);
    const [ isFetching, setIsFetching ] = useState(false)

    useEffect(() => {
        async function fetchPosts() {
            setIsFetching(true)
            const response = await fetch('http://localhost:8080/posts');
            const resData = await response.json();
            setPosts(resData.posts)
            setIsFetching(false)
        }
        fetchPosts();
    }, []);

    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
            {!isFetching && posts.length > 0 && (
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
            {!isFetching && posts.length === 0 && (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <h2>Não existem posts.</h2>
                </div>
            )}
            {isFetching && (
                <div className={classes.loadingContainer}>
                    <div className={classes.spinner} />
                    <p>Loading posts...</p>
                </div>
            )}
        </>  
    );  
}

export default PostList;
