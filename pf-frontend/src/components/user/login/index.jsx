import React from 'react';
import './style.css';

export default function login() {
  return (
    <div className="login-container">
      <p className="login-message">Insira um e-mail e uma senha!</p>
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
    </div>
  );
}
