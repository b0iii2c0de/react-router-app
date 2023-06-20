import { Routes, Route, useHistory } from 'react-router-dom';
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
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/post" element={<NewPost />} />
        <Route path="/post/:id" element={<PostPage />} /> 
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
