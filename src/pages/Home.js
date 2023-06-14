import {Link} from "react-router-dom";
import './Home.css'
import banner from '../Imagens/Logo-site/Imagem-Home.png'
import office from '../Imagens/Gifs/Office.gif'
import objetivo from '../Imagens/Gifs/objetivo.gif'
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
                    <h1 className="Titulo">O que é a EasyTools?</h1>
                    <p>Somos uma empresa que foi criada com o objetivo de facilitar a administração dentro de instituições escolares e empresarial. Hoje estamos já com mais de 10 mil instituições no Brasil e sempre procurando nos expandir mais.</p>
                </div>
            </div>
            <div className='base1'>
                <div className="texto">
                    <h1 className="Titulo">Qual o nosso objetivo?</h1>
                    <p>Quando tivemos a ideia de criar essa empresa foi pensando na facilidade para que empresas e insttuições de ensino tivessem apenas um local para que por lá conseguissem administrar o que acontece dentro de sua instituição.</p>
                </div>
                <img src={objetivo} id='objetivo' />
            </div>
        </div>
    );

}

export default Home;