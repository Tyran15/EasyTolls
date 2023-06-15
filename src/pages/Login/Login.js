import './Login.css'
import Formulario from '../Formulário/Formulario';
import login from '../Imagens/Gifs/Figura login.gif'

function Login(){

    return(
        <div className='Login'>
            <div id='texto-img'>
                    <p className='texto1'><b>Faça login</b></p>
                    <p className='texto1'><b>E entre para o nosso time</b></p>
                    <img src={login}/>
                </div>
            <div id='base-input'>
                <h1 id='tiulo'>Login</h1>
                <input className='campo-texto' type='email' placeholder='Digite seu email'></input>
                <input className='campo-texto' type='password' placeholder='Digite sua senha'></input>
                <button id='confirmar'>Confimar</button>
            </div>
        </div>
    );

}

export default Login;