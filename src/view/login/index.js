import React from 'react';
import './login.css';


function Login() {


  return (



    <div className='login-content d-flex align-itens-center' /* d-flex é usado para dar um comportamento de caixas para a div */ >


      <form className='form-signin mx-auto' /* mx-auto alinha automaticamente a div para o centro */  >
        <div className='text-center mb-4'>
          <h1 className='h3 nb-3 font-weight-normal text-white fw-bold' /* text-white é uma classe do bootstrap que deixar a font branca  fw-bold deixa em negrito */ > Login </h1>
        </div>


        <input type="email" id='inputEmail' class='form-control my-2' /* my-2 está dando um margin y (top e bottom) de 2 */ placeholder='Email' />
        <input type="password" id='inputPassword' class='form-control my-2' /* my-2 está dando um margin y (top e bottom) de 2 */ placeholder='Senha' />


        <button className='btn btn-lg btn-block btn-login' type='button'> Logar </button>

        <div className='msg-login text-white text-center my-3'>
          <span><strong>Wow!! </strong>Você está conectado &#128540;</span>
          <br />
          <span><strong>Oops!! </strong>Verifique se o usuario e senha estão corretos &#129300;</span>
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