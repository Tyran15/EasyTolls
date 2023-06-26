import React, { useState } from "react";
import "./Agendamento.css";
import gif from "../Imagens/Imagens Site/Conference.gif";

function Agendamento() {
  const [outrosSelecionado, setOutrosSelecionado] = useState(false);

  const handleSelectChange = (event) => {
    if (event.target.value === "Outros") {
      setOutrosSelecionado(true);
    } else {
      setOutrosSelecionado(false);
    }
  };

  const limparTexto = () => {
    document.getElementById("nome").value = "";
    document.getElementById("option").selectedIndex = 0;
    if (outrosSelecionado) {
      document.getElementById("Textarea").value = "";
    }
    document.getElementById("Calendario").value = "";
    alert("Enviado com sucesso!");
  };

  return (
    <div className="Agendamento">
      <h1 id="title">Agendamento de Anfiteatro</h1>
      <div className="base-site">
        <img src={gif} id="gif" />
        <div className="baseEquipamentos">
          <input placeholder="Digite seu nome" type="text" id="nome" />
          <select onChange={handleSelectChange} id="option">
            <option value="Palestra">Palestra</option>
            <option value="Apresentação">Apresentação</option>
            <option value="Entretenimento">Entretenimento</option>
            <option value="Reunião">Reunião</option>
            <option value="Outros">Outros...</option>
          </select>

          {outrosSelecionado && (
            <textarea
              id="Textarea"
              placeholder="Digite o tipo de evento..."
              rows="4"
              cols="50"
            ></textarea>
          )}

          <input placeholder="Digite a data" type="datetime-local" id="Calendario" />
          
          <button onClick={limparTexto} id="Enviar">Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default Agendamento;
