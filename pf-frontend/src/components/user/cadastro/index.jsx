import { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

export default function Cadastro() {
  const [form, setForm] = useState({
    nome: '',
    endereco: '',
    email: '',
    senha: '',
    telefone: ''
  });
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const camposObrigatorios = ['nome', 'endereco', 'email', 'senha'];
    const camposVazios = camposObrigatorios.some(campo => !form[campo]);

    if (camposVazios) {
      setErro('Por favor, preencha todos os campos.');
      return;
    }

    setErro('');
    console.log('Cadastro bem-sucedido!', form);
  };

  const sendNewUser = async () => {
    const response = await fetch('http://localhost:3000/api/user/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: form.nome,
        address: form.endereco,
        email: form.email,
        password: form.senha,
        phone: form.telefone
      })
    })

    if (response.ok) {
      const login = await fetch('http://localhost:3000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: form.email.trim(), password: form.senha.trim() })
      })

      if (login.ok) {
        console.log('Login bem-sucedido!');
        let responseMsg = await login.json()
        localStorage.setItem('token', responseMsg.token)
        navigate('/perfil');
      } else {
        console.log('Erro no login')
      }
    } else {
      console.error('Erro na criação do usuário')
    }
  }

  return (
    <section className="cadastro-container">
      <p className="cadastro-title">Preencha seus dados para cadastrar</p>
      <form className="cadastro-form" onSubmit={handleSubmit}>
        <div className="cadastro-grid">
          <label className="cadastro-label">
            Nome:
            <input
              className="cadastro-input"
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
            />
          </label>

          <label className="cadastro-label">
            Endereço:
            <input
              className="cadastro-input"
              type="text"
              name="endereco"
              value={form.endereco}
              onChange={handleChange}
            />
          </label>

          <label className="cadastro-label">
            E-mail:
            <input
              className="cadastro-input"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </label>

          <label className="cadastro-label">
            Senha:
            <input
              className="cadastro-input"
              type="password"
              name="senha"
              value={form.senha}
              onChange={handleChange}
            />
          </label>

          <label className="cadastro-label">
            Telefone:
            <input
              className="cadastro-input"
              type="text"
              name="telefone"
              value={form.telefone}
              onChange={handleChange}
            />
          </label>

          <button className="cadastro-button" type="submit" onClick={sendNewUser}>
            Cadastrar
          </button>
        </div>

        {erro && <p className="cadastro-error">{erro}</p>}


      </form>
    </section>
  );
}
