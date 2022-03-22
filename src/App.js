import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from '../src/store';
import { Provider } from 'react-redux';


/*  Paginas  */

import Login from './view/login';
import User from './view/user';
import Home from './view/home';
import CadastroEvento from './view/cadastro-eventos'


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/new-user" exact element={<User />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/cadastro-eventos" exact element={<CadastroEvento />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
