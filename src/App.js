import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


/*  Paginas  */

import Login from './view/login';
import User from './view/user';
import Home from './view/home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/new-user" exact element={<User />} />
        <Route path="/login" exact element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
