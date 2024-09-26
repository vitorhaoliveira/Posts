import '../index.css'  
import PostList from '../components/PostsList'
import { Outlet } from 'react-router-dom';

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  )
}

export default Posts;

export async function loader() {
  const response = await fetch('https://postsbd.onrender.com/posts');
  const resData = await response.json();
  return resData.posts;
}
