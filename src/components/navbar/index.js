import React from "react";
import './navbar.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";


function Navbar() {

  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <span className="navbar-brand text-white font-weight-bold" >Eventos</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li className="nav-item"> <Link className="nav-link" to="/">Home</Link> </li>



            {
              useSelector(state => state.userLoged) > 0 ?

                <>
                  <li className="nav-item"> <Link className="nav-link" to="/cadastro-eventos">Publicar Evento</Link> </li>
                  <li className="nav-item"> <Link className="nav-link" to="">Meus Eventos</Link> </li>
                  <li className="nav-item"> <Link className="nav-link" to="/" onClick={() => dispatch({ type: 'LOG_OUT' })}>Sair</Link> </li>
                </>
                :
                <>
                  <li className="nav-item"> <Link className="nav-link" to="/new-user">Cadastrar</Link> </li>
                  <li className="nav-item"> <Link className="nav-link" to="/login">Login</Link> </li>
                </>

            }


          </ul>
        </div>npm
      </div>
    </nav>
  )
}

export default Navbar;