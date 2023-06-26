import React, { useState } from "react";
import "./Agendamento.css";
import gif from "../Imagens/Imagens Site/Conference.gif";

function Agendamento() {

  return (
    <div className="Agendamento">
      <h1 id="title">Agendamento de Anfiteatro</h1>
      <div className="base-site">
        <img src={gif} id="gif" />
        <div className="baseEquipamentos">
          <input placeholder="Digite seu nome" type="text" className="a" />
          <input placeholder="Digite a turma" type="text" className="a"/>
          <input placeholder="Motivo..." type="text" className="a"/>
          <input placeholder="Equipamentos Utilizados" className="a"/>
          <input placeholder="Período" className="a" />

          <div className="selecao-anfiteatro">
            <input placeholder="Digite a data" type="datetime-local" id="Calendario" />
            <select placeholder="Bloco" id="Bloco">
              <option>Bloco</option>
              <option>1</option>
              <option>2</option>
              <option>Ambos</option>
            </select>
          </div>
          
          <button id="Enviar">Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default Agendamento;
