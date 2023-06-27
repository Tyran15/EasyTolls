import "./Emprestimos.css";
import gif from "../Imagens/Imagens Site/Research paper.gif";
import React, { useState } from "react";

function Emprestimos() {
  const [quantidades, setQuantidades] = useState({
    lapis: 0,
    borracha: 0,
    apontador: 0,
    caneta: 0,
    canetao: 0,
    fitaDurex: 0,
    grampeador: 0,
    colaLiquida: 0,
    colaQuente: 0,
  });

  const incrementarQuantidade = (item) => {
    if (quantidades[item] < 20) {
      setQuantidades((prevState) => ({
        ...prevState,
        [item]: prevState[item] + 1,
      }));
    }
  };

  const decrementarQuantidade = (item) => {
    if (quantidades[item] > 0) {
      setQuantidades((prevState) => ({
        ...prevState,
        [item]: prevState[item] - 1,
      }));
    }
  };

  const resetarValores = () => {
    setQuantidades({
      lapis: 0,
      borracha: 0,
      apontador: 0,
      caneta: 0,
      canetao: 0,
      fitaDurex: 0,
      grampeador: 0,
      colaLiquida: 0,
      colaQuente: 0,
    });
  
    const algumaQuantidadeAcimaDeZero = Object.values(quantidades).some(
      (quantidade) => quantidade > 0
    );
  
    if (algumaQuantidadeAcimaDeZero) {
      alert("Pedido enviado com sucesso!");
    } else {
      alert("Selecione pelo menos um item antes de enviar o pedido.");
    }
  };
  

  return (
    <div className="Emprestimos">
      <h1 id="title">Empréstimos de equipamentos</h1>
      <div className="base-site">
        <img src={gif} alt="Research paper" />
        <div className="base-itens">
          <div className="itens">
            <p>Lápis</p>
            <div className="quantidade">
              <button className="acrescimo" onClick={() => decrementarQuantidade("lapis")}>-</button>
              <span>{quantidades.lapis}</span>
              <button className="acrescimo" onClick={() => incrementarQuantidade("lapis")}>+</button>
            </div>
          </div>
          <div className="itens">
            <p>Borracha</p>
            <div className="quantidade">
              <button className="acrescimo" onClick={() => decrementarQuantidade("borracha")}>-</button>
              <span>{quantidades.borracha}</span>
              <button className="acrescimo" onClick={() => incrementarQuantidade("borracha")}>+</button>
            </div>
          </div>
          <div className="itens">
            <p>Apontador</p>
            <div className="quantidade">
              <button className="acrescimo" onClick={() => decrementarQuantidade("apontador")}>-</button>
              <span>{quantidades.apontador}</span>
              <button className="acrescimo" onClick={() => incrementarQuantidade("apontador")}>+</button>
            </div>
          </div>
          <div className="itens">
            <p>Caneta</p>
            <div className="quantidade">
              <button className="acrescimo" onClick={() => decrementarQuantidade("caneta")}>-</button>
              <span>{quantidades.caneta}</span>
              <button className="acrescimo" onClick={() => incrementarQuantidade("caneta")}>+</button>
            </div>
          </div>
          <div className="itens">
            <p>Canetão</p>
            <div className="quantidade">
              <button className="acrescimo" onClick={() => decrementarQuantidade("canetao")}>-</button>
              <span>{quantidades.canetao}</span>
              <button className="acrescimo" onClick={() => incrementarQuantidade("canetao")}>+</button>
            </div>
          </div>
          <div className="itens">
            <p>Fita durex</p>
            <div className="quantidade">
              <button className="acrescimo" onClick={() => decrementarQuantidade("fitaDurex")}>-</button>
              <span>{quantidades.fitaDurex}</span>
              <button className="acrescimo" onClick={() => incrementarQuantidade("fitaDurex")}>+</button>
            </div>
          </div>
          <div className="itens">
            <p>Grampeador</p>
            <div className="quantidade">
              <button className="acrescimo" onClick={() => decrementarQuantidade("grampeador")}>-</button>
              <span>{quantidades.grampeador}</span>
              <button className="acrescimo" onClick={() => incrementarQuantidade("grampeador")}>+</button>
            </div>
          </div>
          <div className="itens">
            <p>Cola líquida</p>
            <div className="quantidade">
              <button className="acrescimo" onClick={() => decrementarQuantidade("colaLiquida")}>-</button>
              <span>{quantidades.colaLiquida}</span>
              <button className="acrescimo" onClick={() => incrementarQuantidade("colaLiquida")}>+</button>
            </div>
          </div>
          <div className="itens">
            <p>Cola quente</p>
            <div className="quantidade">
              <button className="acrescimo" onClick={() => decrementarQuantidade("colaQuente")}>-</button>
              <span>{quantidades.colaQuente}</span>
              <button className="acrescimo" onClick={() => incrementarQuantidade("colaQuente")}>+</button>
            </div>
          </div>
          <div className="itens">
          <button id="botao" onClick={resetarValores}>Enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emprestimos;
