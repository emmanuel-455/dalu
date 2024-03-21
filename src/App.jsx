import React from 'react';
import './App.css';
import Media from './pages/Media';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Work from './pages/Work';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Each Route should be a direct child of Routes */}
        <Route path="/" element={<Media />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

