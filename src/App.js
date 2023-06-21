import { Routes, Route, useNavigate  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import NewPost from './components/newpost/NewPost';
import PostPage from './components/postpage/PostPage';
import About from './components/about/About';
import Missing from './components/missing/Missing';


function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My first post",
      dateTime: "June 21, 2023 14:00 PM",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione ducimus consectetur, rem non natus illum."
    },
    {
      id: 2,
      title: "My second post",
      dateTime: "June 21, 2023 15:00 PM",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione ducimus consectetur, rem non natus illum."
    },
    {
      id: 3,
      title: "My third post",
      dateTime: "June 21, 2023 16:00 PM",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione ducimus consectetur, rem non natus illum."
    },
    {
      id: 4,
      title: "My fourth post",
      dateTime: "June 21, 2023 17:00 PM",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione ducimus consectetur, rem non natus illum."
    },
  ]);

  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  // refactor useHistory ↓
  const navigate = useNavigate();

  useEffect(() => {
    const filteredResults = posts.filter(post => 
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()));

      setSearchResults(filteredResults.reverse());
  }, [posts, search])

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const dateTime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, dateTime, body: postBody };
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
    navigate.push('/');
  }
  
  const handleDelete = (id) => {
    const postsList = posts.filter(post => post.id !== id);
    setPosts(postsList);
    navigate.push('/');
  }

  return (
    <div className="App">
      <Header title="React JS Blog" />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home posts={searchResults} />} />
        <Route path="/post" element={<NewPost 
          handleSubmit={handleSubmit} 
          postTitle={postTitle} 
          setPostTitle={setPostTitle}
          postBody={postBody}
          setPostBody={setPostBody} 
          />} 
        />
        <Route path="/post/:id" element={<PostPage posts={posts} handleDelete={handleDelete} />} /> 
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
