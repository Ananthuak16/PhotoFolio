// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AlbumsListPage from './Components/AlbumsListPage';
import ImagesListPage from './Components/ImagesListPage';
import Navbar from "./Components/Navbar"
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<AlbumsListPage />} />
        <Route path="/albums/:albumId" element={<ImagesListPage />} />
      </Routes>
    </Router>
  );
};

export default App;
