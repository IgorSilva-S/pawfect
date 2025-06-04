import { useState } from 'react';
import './style.css'; 
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ email: '', senha: '' });
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.senha) {
      setErro('Por favor, preencha todos os campos.');
      return;
    }

    // Só simulando -- linkar com o back dps
    if (form.email !== 'usuario@exemplo.com' || form.senha !== '123456') {
      setErro('E-mail ou senha incorretos.');
      return;
    }

    setErro('');
    console.log('Login bem-sucedido!');
    navigate('/perfil');
    };

  return (
    <div className="login-container">
      <p className="login-title">Insira um e-mail e uma senha!</p>
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

        <button className="login-button" type="submit">
          Login
        </button>

        <a className="login-link" onClick={() => navigate('/cadastro')}>
          Não tem conta? Cadastre-se
        </a>
      </form>
    </div>
  );
}
