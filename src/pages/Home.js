import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Home.css'
import banner from '../Imagens/Logo-site/Imagem-Home.png'
import office from '../Imagens/Imagens Site/Office.gif'
import objetivo from '../Imagens/Imagens Site/objetivo.gif'
import Login from "./Login/Login"
import facebook from './Imagens/Icons/facebook.png'
import instagram from './Imagens/Icons/instagram.png'

function Home() {
  const [feedbackEmail, setFeedbackEmail] = useState("");
  const [feedbackText, setFeedbackText] = useState("");

  const handleEmailChange = (event) => {
    setFeedbackEmail(event.target.value);
  };

  const handleTextChange = (event) => {
    setFeedbackText(event.target.value);
  };

  const enviarFeedback = () => {
    setFeedbackEmail("");
    setFeedbackText("");
    alert("Feedback enviado com sucesso!");
  };

  return (
    <div className="Home">
      <div id='base-banner'>
        <img src={banner} id='banner' alt='banner' />
        <Link to="./Login">
          <button id="button">Faça login</button>
        </Link>
      </div>
      <div className='base1'>
        <img src={office} id='office' />
        <div className="texto">
          <h1 className="Titulo">O que é a EasyTools?</h1>
          <img src={office} id='office-mobile' />
          <p>Somos uma empresa que foi criada com o objetivo de facilitar a administração dentro de instituições escolares e empresariais. Hoje estamos com mais de 10 mil instituições no Brasil e sempre procurando nos expandir.</p>
        </div>
      </div>
      <div className='base1'>
        <div className="texto">
          <h1 className="Titulo">Qual o nosso objetivo?</h1>
          <img src={objetivo} id='objetivo-mobile' />
          <p>Quando tivemos a ideia de criar essa empresa, pensamos na facilidade para que empresas e instituições de ensino tivessem apenas um local para administrar o que acontece dentro de sua instituição.</p>
        </div>
        <img src={objetivo} id='objetivo' />
      </div>
      <div id="base-feedback">
      <h1>Dê seu feedback</h1>
        <div id="base-input">
            <input
            placeholder="Digite seu e-mail"
            type="email"
            value={feedbackEmail}
            onChange={handleEmailChange}
            className="feedback"
            />
            <textarea
            placeholder="Digite seu feedback"
            rows="4"
            cols="50"
            value={feedbackText}
            onChange={handleTextChange}
            className="feedback"
            ></textarea>
            <button onClick={enviarFeedback} id="button-feedback">Enviar</button>
        </div>    
      </div>
      <div className="base-icons">
        <p id="copyrigth"><strong>Todos direitos reservados a EasyTools-Teams©</strong></p>
        <a href="https://www.facebook.com/profile.php?id=100093355073947" ><img src={facebook} className="icons" alt="facebook" /></a>
        <a href="https://www.instagram.com/easytools_oficial/" ><img src={instagram} className="icons" alt="instagram" /></a>
      </div>
    </div>
  );
}

export default Home;
