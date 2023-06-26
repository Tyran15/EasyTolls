import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { Helmet } from 'react-helmet';
import { slide as Menu } from 'react-burger-menu';
import Home from "./pages/Home"
import Login from "./pages/Login/Login"
import Formulario from "./pages/Formulário/Formulario";
import ControleDeEstoque from "./pages/Controle de estoque/ControleDeEstoque"
import Agendamento from "./pages/Agendamento/Agendamento"
import Emprestimos from "./pages/Empréstimos/Emprestimos";
import Horarios from "./pages/Horarios/Horarios"
import style from './App.css'
import profile from './Imagens/Imagens Site/icon-user.png'
import linkedin from './Imagens/Icons/linkedin.png'
import Menu_Response from "./pages/Components/Menu";


function App() {
  return (
    <div className="App">
      <Helmet>
        <lin rel="icon" href="./Imagens/Logo-site/Logo-Icon.png" />
      </Helmet>
      <nav>
        <a href="/">
          <img src="./Imagens/Logo-site/Logo-Transparente.png" id="logo"/>
        </a>
        
        <div id="mensagem_perfil">
        <p id="mensagem-boas-vidas"><b>Seja bem-vindo, Usuário!</b></p>
        <img src={profile} id="profile"/>
        </div>
      </nav>
      <Menu_Response />
      
      <Router>
        <ul id="bg-link">
          <li><Link className="link" to="/Manutencao">Manutenção</Link></li>
          <li><Link className="link" to="/Agendamentos">Agendamentos</Link></li>
          <li><Link className="link" to="/Emprestimos">Empréstimos</Link></li>
          <li><Link className="link" to="/Estoque">Estoque</Link></li>
          <li><Link className="link" to="/Horarios">Horarios</Link></li>
        </ul>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Login" element={<Login/>} /> 
          <Route path="/Manutencao" element={<Formulario/>} />  
          <Route path="/Estoque" element={<ControleDeEstoque />} />
          <Route path="/Agendamentos" element={<Agendamento />} />
          <Route path="/Emprestimos" element={<Emprestimos />} />
          <Route path="/Horarios" element={<Horarios />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
