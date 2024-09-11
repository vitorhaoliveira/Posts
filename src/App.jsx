import { useState } from 'react';
import './App.css'
import MainHeader from './components/MainHeader'
import PostList from './components/PostsList'

function App() {
  const [ modalIsVisible, setModalIsVisible ] = useState(true);

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function showModalHandler() {
    setModalIsVisible(true);
  }

  return (
    <>
      <MainHeader createPost={showModalHandler} />

      <main>
        <PostList 
          isPosting={modalIsVisible} 
          onStopPosting={hideModalHandler} 
        />
      </main>
    </>
  )
}

export default App
