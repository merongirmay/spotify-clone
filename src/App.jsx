import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Spotify from './components/Spotify';

function App() {
 return (
   <Routes>
     <Route path="/" element={<Login />} />
     <Route path="/spotify" element={<Spotify />} />
   </Routes>
 );
}

export default App;