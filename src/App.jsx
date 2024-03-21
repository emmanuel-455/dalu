import React from 'react';
import './App.css';
import Media from './pages/Media';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Work from './pages/Work';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='work' element={<Work />} />
          <Route path="media" element={<Media />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
