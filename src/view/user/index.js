import React, { useState } from 'react';
import './user.css';


import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';



function Register() {

  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');


  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user)
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className=' container-input text-center'>
      <h1 className='title text-white my-5'> Registre-se </h1>
      <input className='input-button my-2 form-control' onChange={(e) => { setRegisterEmail(e.target.value) }} type="email" placeholder='Email' />
      <input className='input-button my-2 form-control' onChange={(e) => { setRegisterPassword(e.target.value) }} type="password" placeholder='Senha' />

      <button className='btn-register btn btn-lg btn-block btn-login my-2' onClick={register} type='button'> Registrar </button>

      <p className='mt-5 mb-3 text-muted text-center'> &copy; 2022</p>

    </div>
  )
}


export default Register;