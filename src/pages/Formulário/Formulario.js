import { useState } from 'react';
import emailjs from '@emailjs/browser'
import './Formulario.css'

function Formulario() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [unidade, setUnidade] = useState('')
  const [message, setMessage] = useState('')
  const [lab, setLab] = useState('')
  const [maquina, setMaquina] = useState('')
  const dataAtual = new Date();

  function sendEmail(e){
    e.preventDefault();

    if(name === '' || email === '' || unidade === '' || message === '' || lab === '' || maquina === ''){
      alert("PREENCHA TODOS OS CAMPOS!")
      return;
    }


    const templeteParams = {
      from_name: name,
      from_email: email,
      from_unidade: unidade,
      from_message: message,
      from_lab: lab,
      from_maquina: maquina,
    }
    
    emailjs.send("service_of82lbq", "template_2in716p", templeteParams, "1cjuAr1dZBWyykFGy")
    .then((response) => {
      alert('FORMULÁRIO ENVIADO COM SUCESSO!', response.status, response.text)
      setName('')
      setEmail('')
      setUnidade('')
      setMessage('')
      setLab('')
      setMaquina('')
    }, (err) => {
      alert("ERRO: ", err)
    }) 
  }

  return (
    <div className="container">
      <h1 className="title">Nome Formulário</h1>

      <form className="form" onSubmit={sendEmail}>
        <input 
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <input 
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <input 
          className="input"
          type="text"
          placeholder="Digite a sua unidade escolar"
          onChange={(e) => setUnidade(e.target.value)}
          value={unidade}
        />

        <input 
          className="input"
          type="text"
          placeholder="Digite o número do láboratorio"
          onChange={(e) => setLab(e.target.value)}
          value={lab}
        />

        <textarea 
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input 
          className="input"
          type="text"
          placeholder="Digite número da máquina"
          onChange={(e) => setMaquina(e.target.value)}
          value={maquina}
        />

        <input className="button" type="submit" value="Enviar" />
      </form>

    </div>
  );
}

export default Formulario;