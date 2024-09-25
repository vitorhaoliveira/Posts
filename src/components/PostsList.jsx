import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostList() {
    const posts = useLoaderData();

    return (
        <>
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
            {/* {isFetching && (
                <div className={classes.loadingContainer}>
                    <div className={classes.spinner} />
                    <p>Loading posts...</p>
                </div>
            )} */}
        </>  
    );  
}

export default PostList;
