import './Login.css'
import Formulario from '../Formulário/Formulario';

function Login(){

    return(
        <div>
            <h1>Login</h1>
            <input type="text" id="nome" placeholder="Digite o seu nome" name='nome'/>
            <input type="password" id="senha" placeholder="Digite a sua senha" name='senha'/>
            <button >Confirmar</button>
        </div>
    );

}

export default Login;