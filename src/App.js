import { Routes, Route, useNavigate  } from 'react-router-dom';
import { useState, useEffect } from 'react';

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

  return (
    <div className="App">
      <Header title="React JS Blog" />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/post" element={<NewPost />} />
        <Route path="/post/:id" element={<PostPage />} /> 
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
