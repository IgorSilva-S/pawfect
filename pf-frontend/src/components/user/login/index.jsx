import { useState, useEffect } from 'react';
import '../login/style.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ email: '', senha: '' });
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: form.email.trim(), password: form.senha.trim() })
    })

    if (response.status == 401) {
      setErro('E-mail ou senha incorretos.');
      return;
    }

    if (response.status == 400) {
      setErro('Por favor, preencha todos os campos.');
      return;
    }

    if (response.ok) {
      setErro('');
      console.log('Login bem-sucedido!');
      let responseMsg = await response.json()
      localStorage.setItem('token', responseMsg.token)
      navigate('/perfil');
    }

    /*if (!form.email || !form.senha) {
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
    navigate('/perfil');*/
  };

  useEffect(() => {
    const autoLogin = async () => {
      let token = localStorage.getItem('token')
      if (token == undefined) {
        return;
      }

      const autoLogin = await fetch('http://localhost:3000/api/user/profile/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `bearer ${token}`
        },
      })

      if (autoLogin.ok) {
        setErro('');
        console.log('Auto Login Login bem-sucedido!');
        navigate('/perfil');
      } else {
        console.log('Auto Login mal-sucedido!');
        localStorage.removeItem('token')
        return;
      }
    }

    autoLogin()
  }, [])

  return (
    <section className="login-container">
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
    </section>
  );
}
