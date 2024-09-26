import { Link, useLoaderData, useParams } from "react-router-dom";
import Modal from "../components/Modal";
import classes from './PostDetails.module.css';

function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Post não encontrado</h1>
          <p>Infelizmente, a requisição do post não foi encontrada</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    )
  }

  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p> 
      </main>
    </Modal>
  )
}

export default PostDetails;

export async function loader({ params }) {
  const response = await fetch('https://postsbd.onrender.com/posts/' + params.id)
  const resData = await response.json();
  return resData.post;  
}