import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Login() {
  return (
    <div className="login-container">
      <p className="login-message">Insira seu e-mail e senha!</p>
      <form className="login-form">
        <label className="login-label">
          E-mail:
          <input className="login-input" type="email" name="email" />
        </label>
        <label className="login-label">
          Senha:
          <input className="login-input" type="password" name="senha" />
        </label>
        <button className="login-button" type="submit">Cadastrar</button>
      </form>
      <Link to="/user/cadastro" className="login-link">
        Não tem uma conta? Cadastre-se
      </Link>
    </div>
  );
}
