import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

import Friends from './routes/Friends';
import Chats from './routes/Chats';
import Find from './routes/Find';
import More from './routes/More';
import Chating from './routes/Chating';
import ProfileUser from './routes/ProfileUser';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Friends />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/find" element={<Find />} />
        <Route path="/more" element={<More />} />
        <Route path="/profileuser" element={<ProfileUser />} />
        <Route path="/chating" element={<Chating />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
