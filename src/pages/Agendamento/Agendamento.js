import React, { useState } from "react";
import "./Agendamento.css";
import gif from "../Imagens/Imagens Site/Conference.gif";

function Agendamento() {
  const [nome, setNome] = useState("");
  const [turma, setTurma] = useState("");
  const [motivo, setMotivo] = useState("");
  const [equipamentos, setEquipamentos] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [data, setData] = useState("");
  const [bloco, setBloco] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      nome.trim() === "" ||
      turma.trim() === "" ||
      motivo.trim() === "" ||
      equipamentos.trim() === "" ||
      periodo.trim() === "" ||
      data.trim() === "" ||
      bloco.trim() === ""
    ) {
      alert("Por favor, preencha todos os campos.");
    } else {

      alert("Enviado com sucesso!");

      setNome("");
      setTurma("");
      setMotivo("");
      setEquipamentos("");
      setPeriodo("");
      setData("");
      setBloco("");
    }
  };

  return (
    <div className="Agendamento">
      <h1 id="title">Agendamento de Anfiteatro</h1>
      <div className="base-site">
        <img src={gif} id="gif" />
        <div className="baseEquipamentos">
          <form id="form" onSubmit={handleSubmit}>
            <input
              placeholder="Digite seu nome"
              type="text"
              className="a"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              placeholder="Digite a turma"
              type="text"
              className="a"
              value={turma}
              onChange={(e) => setTurma(e.target.value)}
            />
            <input
              placeholder="Motivo..."
              type="text"
              className="a"
              value={motivo}
              onChange={(e) => setMotivo(e.target.value)}
            />
            <input
              placeholder="Equipamentos Utilizados"
              className="a"
              value={equipamentos}
              onChange={(e) => setEquipamentos(e.target.value)}
            />
            <input
              placeholder="Período"
              className="a"
              value={periodo}
              onChange={(e) => setPeriodo(e.target.value)}
            />

            <div className="selecao-anfiteatro">
              <input
                placeholder="Digite a data"
                type="datetime-local"
                id="Calendario"
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
              <select
                placeholder="Bloco"
                id="Bloco"
                value={bloco}
                onChange={(e) => setBloco(e.target.value)}
              >
                <option value="">Bloco</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="Ambos">Ambos</option>
              </select>
            </div>

            <button id="Enviar" type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Agendamento;
