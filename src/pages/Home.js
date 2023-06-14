import {Link} from "react-router-dom";
import './Home.css'
import banner from '../Imagens/Logo-site/Imagem-Home.png'
import office from '../Imagens/Gifs/Office.gif'
import Login from "./Login/Login"


function Home(){

    return(
        <div>
            <div id='base-banner'>
                <img src={banner} id='banner' alt='banner'/>
                <Link to="./Login">
                    <button id="button">Faça login</button>
                </Link>
            </div>
            <div className='base1'>
                <img src={office} id='office' />
                <div className="texto">
                    <h1 className="Titulo">O que é a EasyTolls?</h1>
                    <p>Somos uma empresa que foi criada com o objetivo de facilitar a administração dentro de instituições escolares e empresarial. Hoje estamos já com mais de 10 mil instituições no Brasil e sempre procurando nos expandir mais.</p>
                </div>
            </div>
            <div className='base1'>
                <img src={office} id='office' />
                <div className="texto">
                    <h1 className="Titulo">O que é a EasyTolls?</h1>
                    <p>Somos uma empresa que foi criada com o objetivo de facilitar a administração dentro de instituições escolares e empresarial. Hoje estamos já com mais de 10 mil instituições no Brasil e sempre procurando nos expandir mais.</p>
                </div>
            </div>
        </div>
    );

}

export default Home;