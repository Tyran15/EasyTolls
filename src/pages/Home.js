import {Link} from "react-router-dom";
import './Home.css'
import banner from '../Imagens/Logo-site/Imagem-Home.png'
import office from '../Imagens/Stack-imagens/Office.jpg'
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
                <h1>O que é a EasyTolls?</h1>
            </div>
        </div>
    );

}

export default Home;