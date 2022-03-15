import React, { useState } from 'react';
import './login.css';

import firebase from '../../config/firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msgType, setMsgType] = useState('');


  function logar() {

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      setMsgType(`Sucesso`);
    }).catch((error) => {
      setMsgType(`Erro`);
    });

  };

  return (


    <div className='login-content d-flex align-itens-center' /* d-flex é usado para dar um comportamento de caixas para a div */ >


      <form className='form-signin mx-auto' /* mx-auto alinha automaticamente a div para o centro */  >
        <div className='text-center mb-4'>
          <h1 className='h3 nb-3 font-weight-normal text-white fw-bold' /* text-white é uma classe do bootstrap que deixar a font branca  fw-bold deixa em negrito */ > Login </h1>
        </div>


        <input onChange={(e) => setEmail(e.target.value)} type="email" id='inputEmail' class='form-control my-2' /* my-2 está dando um margin y (top e bottom) de 2 -- (e) = evento */ placeholder='Email' />
        <input onChange={(e) => setPassword(e.target.value)} type="password" id='inputPassword' class='form-control my-2' /* my-2 está dando um margin y (top e bottom) de 2 */ placeholder='Senha' />


        <button onClick={logar} className='btn btn-lg btn-block btn-login' type='button'> Logar </button>



        <div className='msg-login text-white text-center my-5'>

          {msgType === 'Sucesso' && <span><strong>WOW!!</strong> Você está conectado!! &#128526; </span>}
          {msgType === 'Erro' && <span><strong>OOPS...</strong> Verifique se o email e sennha estão corretos &#128546;</span>}

        </div>


        <div className='login-options mt-5 text-center' /* mt-5 está definindo um margin top de 5 */  >
          <a href="www.google.com" className='mx-2 my-2' /* mx-2 está dando uma margin X (left e Right) de 2*/  > Recuperar senha </a>
          <span className='text-white'>&#9903;</span>
          <a href="www.google.com" className='mx-2' /* mx-2 está dando uma margin X (left e Right) de 2*/  > Quero Cadastrar </a>
        </div>

        <p className='mt-5 mb-3 text-muted text-center'> &copy; 2022</p>


      </form>
    </div>
  )
}

export default Login;