import React from 'react';
import './App.css';
import Media from './pages/Media';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Work from './pages/Work';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Each Route should be a direct child of Routes */}
        <Route path="/" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work" element={<Media />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

