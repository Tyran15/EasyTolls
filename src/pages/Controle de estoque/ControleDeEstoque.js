import React, { useState } from 'react';
import "./ControleDeEstoque.css";

function ControleDeEstoque() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='ControleDeEstoque'>
        <div className='Estoque'>
            <h1 id='titulo'>Controle de Estoque</h1>
            <select id='opção' value={selectedOption} onChange={handleChange}>
                <option value="">Selecione uma opção</option>
                <option value="opcao1">Lapís</option>
                <option value="opcao2">Borracha</option>
                <option value="opcao3">Régua</option>
            </select>
        </div>
      

      {selectedOption === 'opcao1' && <div className='Conteudo-opção'>345 unidades</div>}
      {selectedOption === 'opcao2' && <div className='Conteudo-opção'>547 unidades</div>}
      {selectedOption === 'opcao3' && <div className='Conteudo-opção'>242 unidades</div>}
    </div>
  );
}

export default ControleDeEstoque;
