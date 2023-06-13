import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login/Login"
import Formulario from "./pages/Formulário/Formulario";
import style from './App.css'
import profile from './Imagens/profile-user.png'

function App() {
  return (
    <div className="pou">
      <div>
        
      </div>
      <nav>
        <img src="./Imagens/Logo-site/Logo-Transparente.png" id="logo"/>
        <div id="mensagem_perfil">
        <p><b>Seja bem-vindo, Usuário!</b></p>
        <img src={profile} id="profile"/>
        </div>
      </nav>
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Login">Login</Link></li>
          <li><Link to="/Formulario">Formulario</Link></li>
        </ul>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Login" element={<Login/>} /> 
          <Route path="/Formulario" element={<Formulario/>} />  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
