import React, { useState } from 'react';
import './App.css';

// Função construtora para o formulário
function Formulario() {
  const [dados, setDados] = useState({
    nome: '',
    email: '',
  });

  const handleChange = (e) => {
    setDados({
      ...dados,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', dados);
  };

  return (
    <form onSubmit={handleSubmit}>
      <span>
        <label>
          Nome:
        </label>
        <input
          type="text"
          name="nome"
          value={dados.nome}
          onChange={handleChange}
        />
      </span>
      <span>
        <label>
          Telefone:
        </label>
        <input
          type="tel"
          name="telefone"
          value={dados.telefone}
          onChange={handleChange}
        />
        </span>
        <span>
        <label>
          Aniversario:
        </label>
        <input
          type="date"
          name="data"
          value={dados.tdata}
          onChange={handleChange}
        />
      </span>
      <span>
        <label>
          CPF:
        </label>
        <input
          type="text"
          name="cpf"
          pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
          title="Digite o CPF no formato nnn.nnn.nnn-nn"
          value={dados.cpf}
          onChange={handleChange}
        />
      </span>
      <span>
        <label>
          Email:
        </label>
        <input
          type="email"
          name="email"
          value={dados.email}
          onChange={handleChange}
        />
      </span>
      <span>
        <label>
          Senha:
        </label>
        <input
          type="password"
          name="senha"
          value={dados.senha}
          onChange={handleChange}
        />
      </span>

      <button type="submit">Enviar</button>
    </form>
  );
}
function App() {
  return (
    <div className="App">
      <h1>Formulário em React</h1>
      <Formulario />
    </div>
  );
}

export default App;
