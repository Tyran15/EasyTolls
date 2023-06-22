import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { Helmet } from 'react-helmet';
import { slide as Menu } from 'react-burger-menu';
import Home from "./pages/Home"
import Login from "./pages/Login/Login"
import Formulario from "./pages/Formulário/Formulario";
import ControleDeEstoque from "./pages/Controle de estoque/ControleDeEstoque"
import style from './App.css'
import profile from './Imagens/profile-user.png'
import facebook from './Imagens/Icons/facebook.png'
import instagram from './Imagens/Icons/instagram.png'
import linkedin from './Imagens/Icons/linkedin.png'


function App() {
  return (
    <div className="App">
      <Helmet>
        <link rel="icon" href="./Imagens/Logo-site/Logo-Icon.png" />
      </Helmet>
      <nav>
        <img src="./Imagens/Logo-site/Logo-Transparente.png" id="logo"/>
        <div id="mensagem_perfil">
        <p><b>Seja bem-vindo, Usuário!</b></p>
        <img src={profile} id="profile"/>
        </div>
      </nav>
      
      <Router>
        <ul id="bg-link">
          <li><Link className="link" to="/">Home</Link></li>
          <li><Link className="link" to="/Login">Login</Link></li>
          <li><Link className="link" to="/Formulario">Formulário</Link></li>
          <li><Link className="link" to="/Estoque">Estoque</Link></li>
        </ul>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Login" element={<Login/>} /> 
          <Route path="/Formulario" element={<Formulario/>} />  
          <Route path="/Estoque" element={<ControleDeEstoque/>}/>
        </Routes>
      </Router>
      <div className="base-icons">
        <p id="copyrigth"><strong>Todos direitos reservados a EasyTools-Teams©</strong></p>
        <img src={facebook} className="icons"/>
        <img src={instagram} className="icons"/>
        <img src={linkedin} className="icons"/>
      </div>
    </div>
  );
}

export default App;
