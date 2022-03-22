import React from "react";
import { useSelector } from 'react-redux';
import './evento-cadastro.css';
import { link } from 'react-router-dom';
import Navbar from "../../components/navbar";

import firebase from '../../config/firebase';

function CadastroEvento() {
  return (
    <div>
      <>
        <Navbar />
      </>
      <div className="col-12 mt-5 container-event">
        <div className="row">
          <h3 className="text-center font-weight-bold">Novo Evento</h3>
        </div>

        <form>
          <div className="form-group">
            <label>Titulo:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Tipo do Evento:</label>
            <select className="form-control">
              <option disabled selected value>-- Selecione um tipo --</option>
              <option>Festa</option>
              <option>Teatro</option>
              <option>Show</option>
              <option>Evento</option>
            </select>
            <div className="form-group">
              <label>Descrição do evento:</label>
              <textarea className="form-control" rows="3"></textarea>
            </div>
            <div className="form-group-date row">
              <div className="col-6">
                <label>Data:</label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-6">
                <label>Data:</label>
                <input type="time" className="form-control" />
              </div>
            </div>

          </div>
          <div className="form-group">
            <label>Upload da foto:</label>
            <input type="file" className="form-control" />
          </div>

          <button type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">Publicação de novo evento</button>
        </form>

      </div>
    </div>
  )
}

export default CadastroEvento;