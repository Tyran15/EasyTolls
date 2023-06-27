import "./ControleDeEstoque.css"
import gif from "../Imagens/Imagens Site/Checking boxes.gif"

function Estoque(){
  return(
    <div className="Estoque">
      <h1 className="title">Controle de estoque</h1>
      <div className="base">
        <img src={gif} />
        <div className="base-estoque">
          <div className="estoque">
            <div className="nome-estoque">
              <p className="nome">Lapís</p>
            </div>
            <div className="quantidade-estoque">
              <p>122</p>
            </div>
          </div>
          <div className="estoque">
            <div className="nome-estoque">
              <p className="nome">Borracha</p>
            </div>
            <div className="quantidade-estoque">
              <p>175</p>
            </div>
          </div>
          <div className="estoque">
            <div className="nome-estoque">
              <p className="nome">Apontador</p>
            </div>
            <div className="quantidade-estoque">
              <p>92</p>
            </div>
          </div>
          <div className="estoque">
            <div className="nome-estoque">
              <p className="nome">Caneta</p>
            </div>
            <div className="quantidade-estoque">
              <p>64</p>
            </div>
          </div>
          <div className="estoque">
            <div className="nome-estoque">
              <p className="nome">Canetão</p>
            </div>
            <div className="quantidade-estoque">
              <p>27</p>
            </div>
          </div>
          <div className="estoque">
            <div className="nome-estoque">
              <p className="nome">Fita durex</p>
            </div>
            <div className="quantidade-estoque">
              <p>Sem estoque</p>
            </div>
          </div>
          <div className="estoque">
            <div className="nome-estoque">
              <p className="nome">Grampeador</p>
            </div>
            <div className="quantidade-estoque">
              <p>3</p>
            </div>
          </div>
          <div className="estoque">
            <div className="nome-estoque">
              <p className="nome">Cola branca</p>
            </div>
            <div className="quantidade-estoque">
              <p>Sem estoque</p>
            </div>
          </div>
          <div className="estoque">
            <div className="nome-estoque">
              <p className="nome">Cola quente</p>
            </div>
            <div className="quantidade-estoque">
              <p>Sem estoque</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Estoque;