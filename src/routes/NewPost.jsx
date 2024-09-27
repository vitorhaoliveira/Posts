import classes from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Link, redirect, useFetcher } from "react-router-dom";

function NewPost() {
  const fetcher = useFetcher();

  return (
    <Modal>
      <fetcher.Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Texto</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Seu nome</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          <Link type="button" to=".." className={classes.cancelButton}>
            Cancelar
          </Link>
          <button className={classes.button}>
            {fetcher.state === "submitting" ? "Enviando..." : "Enviar"}
          </button>
        </p>
      </fetcher.Form>
    </Modal>
  );
}

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);

  await fetch("https://postsbd.onrender.com/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect("/");
}
