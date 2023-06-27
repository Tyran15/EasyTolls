import "./Horarios.css"
import icon from "../Imagens/Imagens Site/Curious-amico.png"

function Horarios(){
    return(
        <div className="Horarios">
            <h1 id="title">Entrada com atraso & saida antecipada</h1>
            <div className="base-site">
                <img src={icon} id="gif" />
        <div className="baseEquipamentos">
          <input placeholder="Digite seu nome" type="text" className="a" />
          <input placeholder="Digite a turma" type="text" className="a"/>
          <input placeholder="Motivo..." type="text" className="a"/>

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
    )
}

export default Horarios;