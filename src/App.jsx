import React from 'react';
import './App.css';
import Media from './pages/Media';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Work from './pages/Work';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
