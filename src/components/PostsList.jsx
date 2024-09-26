import { useFetcher, useLoaderData } from "react-router-dom";
import Post from "./Post";
import classes from "./PostsList.module.css";
import { useEffect, useState } from "react";

function PostList() {
    const loadedPosts = useLoaderData();
    const fetcher = useFetcher();
    const [posts, setPosts] = useState(loadedPosts);

    useEffect(() => {
        if (fetcher.state === "idle" && fetcher.data) {
            setPosts((prevPosts) => [...prevPosts, fetcher.data]);
        }
    }, [fetcher.state, fetcher.data]);

    async function deletePost(id) {
        try {
            const response = await fetch(`https://postsbd.onrender.com/posts/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Falha ao deletar o post.');
            }
            setPosts((prevPosts) => prevPosts.filter(post => post.id !== id));
            window.alert('Post deletado com sucesso!');
        } catch (error) {
            window.alert('Erro: ' + error.message);
        }
    }

    return (
        <>
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => {
                        return(
                            <Post 
                                key={post.id}
                                author={post.author}
                                body={post.body}
                                id={post.id}
                                onDelete={deletePost}
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
