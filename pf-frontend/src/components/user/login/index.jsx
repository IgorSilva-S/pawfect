import React, { useState } from 'react';
import Cadastro from '../cadastro';
import './style.css';

export default function Login() {
  const [pagina, setPagina] = useState('login');
  const [form, setForm] = useState({ email: '', senha: '' });
  const [erro, setErro] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.senha) {
      setErro('Preencha todos os campos.');
      return;
    }

    setErro('');
    setPagina('dashboard');
  };

  if (pagina === 'user/cadastro') return <Cadastro />;
  if (pagina === 'dashboard') return <div>✅ Bem-vindo ao Dashboard!</div>;

  return (
    <div className="login-container">
      <p className="login-message">Insira seu e-mail e senha:</p>

      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-label">
          E-mail:
          <input
            className="login-input"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </label>

        <label className="login-label">
          Senha:
          <input
            className="login-input"
            type="password"
            name="senha"
            value={form.senha}
            onChange={handleChange}
          />
        </label>

        {erro && <p className="login-error">{erro}</p>}

        <button className="login-button" type="submit">Login</button>
      </form>

      <button
        className="login-link"
        type="button"
        onClick={() => setPagina('user/cadastro')}
      >
        Não tem uma conta? Cadastre-se!
      </button>
    </div>
  );
}


