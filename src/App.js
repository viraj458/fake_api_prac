import { useEffect, useState, } from 'react';
import './App.css';
import Album from './Components/Album';
import Comments from './Components/Comment';
import Photo from './Components/Photo';
import Post from './Components/Post';
import User from './Components/User';

function App() {

  const [users, setUsers] = useState(null)
  const [posts, setPosts] = useState(null)
  const [comments, setComments] = useState(null)
  const [albums, setAlbums] = useState(null)
  const [photos, setPhotos] = useState(null)
  const [shUsers, setShUsers] = useState(true)
  const [shPosts, setShPosts] = useState(true)
  const [shAlbums, setShAlbums] = useState(true)
  

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>{
        if(!res.ok) throw Error(res.statusText)
        return res.json()
      })
      .then(data=>{
        setUsers(data);
      })
      .catch(err=>{
        console.error(err.message);
      })
  }, [])

  const viewPost = (user_id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`)
      .then(res=>{
        if(!res.ok) throw Error(res.statusText)
        return res.json()
      })
      .then(data=>{
        setShUsers(false)
        setPosts(data)
      })
      .catch(err=>{
        console.error(err);
      })
  }


  const viewComments = (post_id) => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post_id}`)
      .then(res=>{
        if(!res.ok) throw Error(res.statusText)
        return res.json()
      })
      .then(data=>{
        setShPosts(false)
        setComments(data);
        
      })
      .catch(err=>{
        console.error(err.message);
      })
  }
  

  const viewAlbums = (user_id) => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${user_id}`)
      .then(res=>{
        if(!res.ok) throw Error(res.statusText)
        return res.json()
      })
      .then(data=>{
        setShUsers(false)
        setAlbums(data);
      })
      .catch(err=>{
        console.error(err.message);
      })
  }


  const viewPhotos = (album_id) => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${album_id}`)
      .then(res=>{
        if(!res.ok) throw Error(res.statusText)
        return res.json()
      })
      .then(data=>{
        setShAlbums(false)
        setPhotos(data)
      })
      .catch(err=>{
        console.error(err.message);
      })
  }



  return (
    <div className='w3-content w3-panel'>
      <h1 className='w3-opacity w3-center'>Fake API 2.0</h1>
      {
        shUsers && users &&
        users.map((singleUser)=><User key={singleUser['id']} id={singleUser['id']} name={singleUser['name']} username={singleUser['username']} email={singleUser['email']} viewPost={viewPost}  viewAlbums={viewAlbums} />)
      }

      {
        shPosts && posts &&
        <>

        <div className='w3-center w3-padding'>
          <button className='w3-button w3-border w3-red w3-hover-green w3-round'>Back</button>
        </div>

        {
          
          posts.map((post)=><Post key={post['id']} id={post['id']} title={post['title']} body={post['body']} viewComments={viewComments}/>)
        
        }
        
        </>
      }

      {
        comments &&
        <>
        <div className='w3-center w3-padding'>
          <button className='w3-button w3-border w3-red w3-hover-green w3-round'>Back</button>
        </div>
        {
          comments.map((comment)=><Comments key={comment['id']} name={comment['name']} body={comment['body']} email={comment['email']}/>)
        }
        </>
        
        
      }

      {
        shAlbums && albums &&
        <>
        <div className='w3-center w3-padding'>
          <button className='w3-button w3-border w3-red w3-hover-green w3-round'>Back</button>
        </div>
        {
          albums.map((album)=><Album key={album['id']} id={album['id']} title={album['title']} viewPhotos={viewPhotos}/>)
        }
        </>
        
        
      }


        {
         photos &&
        <>
        <div className='w3-center w3-padding'>
          <button className='w3-button w3-border w3-red w3-hover-green w3-round'>Back</button>
        </div>
        {
          photos.map((photo)=><Photo key={photo['id']} title={photo['title']} url={photo['url']} thumbnail={photo['thumbnail']} />)
        }
        </>
        
        
      }
    </div>
  );
}

export default App;
