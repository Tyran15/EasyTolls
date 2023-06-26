import "./Menu.css";
import React, { useState } from 'react';
import menu_mobile from "../Imagens/hamburger-menu.png"
import logo from "../Imagens/Logo-site/Logo-Transparente.png"

const Topnav = () => {
  const [isResponsive, setIsResponsive] = useState(false);

  const handleToggle = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <div className={`topnav ${isResponsive ? 'responsive' : ''}`} id="myTopnav">
      <a href="/" className="active"><img src={logo} id="logo"/></a>
      <a href="/Manutencao">Manutenção</a>
      <a href="/Agendamentos">Agendamentos</a>
      <a href="/Emprestimos">Empréstimos</a>
      <a href="/Horarios">Horarios</a>
      <a href="/Estoque">Estoque</a>
      <a href="javascript:void(0);" className="icon" onClick={handleToggle}>
        <i className="fa fa-bars"></i>
        <img src={menu_mobile} id="menu" />
      </a>
    </div>
  );
};

export default Topnav;
