import { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({
    nome: '',
    cpf: '',
    endereco: '',
    email: '',
    senha: ''
  });
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const camposObrigatorios = ['nome', 'cpf', 'endereco', 'email', 'senha'];
    const camposVazios = camposObrigatorios.some(campo => !form[campo]);

    if (camposVazios) {
      setErro('Por favor, preencha todos os campos.');
      return;
    }

    setErro('');
    console.log('Cadastro bem-sucedido!', form);
    navigate('/perfil');
  };

  return (
    <div className="login-container">
      <p className="login-title">Preencha seus dados para cadastrar</p>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-grid">
          <label className="login-label">
            Nome:
            <input
              className="login-input"
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
            />
          </label>

          <label className="login-label">
            CPF:
            <input
              className="login-input"
              type="text"
              name="cpf"
              value={form.cpf}
              onChange={handleChange}
            />
          </label>

          <label className="login-label">
            Endereço:
            <input
              className="login-input"
              type="text"
              name="endereco"
              value={form.endereco}
              onChange={handleChange}
            />
          </label>

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
        </div>

        {erro && <p className="login-error">{erro}</p>}

        <button className="login-button" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
