import './Login.css'
import Formulario from '../Formulário/Formulario';
import login from '../Imagens/Gifs/Privacy-policy-unscreen.gif'
import { useState } from 'react';

function initialState(){
    return {user: '', password: ''};
}

function login({ user, password}){
    if (user === 'admin' &&  password === 'admin'){
        return { token: '1234'}
    }
    return {error: "Usúario ou senha inválida"}
}

function Login(){

    const UserLogin = () => {
        const [values, setValues] = useState(initialState);
    }

    function onChange(event){
        const {value, name} = event.target;
        
        setValues({
            ...values,
            [name]: value,
        });
    }

    function onSubmit(event){
        event.preventDefault();
    }

    //* 16:59 https://www.youtube.com/watch?v=FVxdFxxkdDI

    return(
        <div className='Login'>
            <div id='texto-img'>
                    <p className='texto1'><b>Faça login</b></p>
                    <p className='texto1'><b>E entre para o nosso time</b></p>
                    <img src={login} id='figura-animada'/>
                </div>
            <div id='base-input'>
                <h1 id='tiulo'>Login</h1>
                <input className='campo-texto' type='email' placeholder='Digite seu email' onChange={onChange}></input>
                <input className='campo-texto' type='password' placeholder='Digite sua senha' onChange={onChange} value={values.password}></input>
                <button id='confirmar'>Confimar</button>
            </div>
        </div>
    );

}

export default Login;