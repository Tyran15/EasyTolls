import React from 'react';
import './Login.css';
import Formulario from '../Formulário/Formulario';
<<<<<<< HEAD
import login from '../Imagens/Gifs/Privacy-policy-unscreen.gif';

function Login() {
  return (
    <div className='Login'>
      <div id='texto-img'>
        <p className='texto1'><b>Faça login</b></p>
        <p className='texto1'><b>E entre para o nosso time</b></p>
        <img src={login} id='figura-animada'/>
      </div>
      <div id='base-input'>
        <h1 id='tiulo'>Login</h1>
        <input className='campo-texto' type='email' placeholder='Digite seu email' ></input>
        <input className='campo-texto' type='password' placeholder='Digite sua senha' ></input>
        <button id='confirmar'>Confirmar</button>
      </div>
    </div>
  );
}

export default Login;
=======
import login from '../Imagens/Gifs/Figura login.gif'
import { useState } from 'react';

function Login(){

    return(
        <div className='Login'>
            <div id='texto-img'>
                    <p className='texto1'><b>Faça login</b></p>
                    <p className='texto1'><b>E entre para o nosso time</b></p>
                    <img src={login} id='figura-animada'/>
                </div>
            <div id='base-input'>
                <h1 id='tiulo'>Login</h1>
                <input className='campo-texto' type='email' placeholder='Digite seu email' ></input>
                <input className='campo-texto' type='password' placeholder='Digite sua senha'></input>
                <button id='confirmar'>Confimar</button>
            </div>
        </div>
    );

}

export default Login;
>>>>>>> 3fb31e2375fd5288d3c4307996bd9439aa0f048c
