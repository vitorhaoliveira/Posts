import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostList() {
  const posts = useLoaderData();
    
  return (
    <>
      {posts.length > 0 ? (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              body={post.body}
              id={post.id}
            />
          ))}
        </ul>
      ) : (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>Não existem posts.</h2>
        </div>
      )}
    </>
  );
}

export default PostList;
