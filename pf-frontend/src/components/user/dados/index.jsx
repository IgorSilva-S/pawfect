import './style.css';
import { useState } from 'react';

export default function MeusDados() {
  const [editando, setEditando] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [dados, setDados] = useState({
    email: 'emaildologin@gmail.com',
    nome: '',
    cpf: '',
    celular: '',
    senha: 'minhasenha123',
    endereco: 'Rua 4, Bairro, Cidade'
  });

  const handleChange = (e) => {
    setDados({ ...dados, [e.target.name]: e.target.value });
  };

  const handleSalvar = () => {
    setEditando(false);
    setMostrarSenha(false);
  };

  const handleCancelar = () => {
    setEditando(false);
    setMostrarSenha(false);
  };

  const toggleMostrarSenha = () => {
    setMostrarSenha((prev) => !prev);
  };

  return (
    <section className="meus-dados-container">
      <p className="meus-dados-titulo">Meus Dados</p>

      <div className="meus-dados-grid">
        <div className="meus-dado">
          <strong>Email:</strong>{' '}
          {editando ? (
            <input
              type="email"
              name="email"
              value={dados.email}
              onChange={handleChange}
              className={editando ? 'input-editavel' : ''}
            />
          ) : (
            dados.email
          )}
        </div>
        <div className="meus-dado">
          <strong>Nome:</strong>{' '}
          {editando ? (
            <input
              type="text"
              name="nome"
              value={dados.nome}
              onChange={handleChange}
              className={editando ? 'input-editavel' : ''}
            />
          ) : (
            dados.nome
          )}
        </div>
        <div className="meus-dado">
          <strong>CPF:</strong>{' '}
          {editando ? (
            <input
              type="text"
              name="cpf"
              value={dados.cpf}
              onChange={handleChange}
              className={editando ? 'input-editavel' : ''}
            />
          ) : (
            dados.cpf
          )}
        </div>
        <div className="meus-dado">
          <strong>Celular:</strong>{' '}
          {editando ? (
            <input
              type="text"
              name="celular"
              value={dados.celular}
              onChange={handleChange}
              className={editando ? 'input-editavel' : ''}
            />
          ) : (
            dados.celular
          )}
        </div>
        <div className="meus-dado senha">
          <strong>Senha:</strong>{' '}
          {editando ? (
            <>
              <input
                type={mostrarSenha ? 'text' : 'password'}
                name="senha"
                value={dados.senha}
                onChange={handleChange}
                className={editando ? 'input-editavel' : ''}
              />
              <img
                src={mostrarSenha ? '/img/perfil/c-eye.png' : '/img/perfil/o-eye.png'}
                alt="Mostrar senha"
                className="icone-senha"
                onClick={toggleMostrarSenha}
              />
            </>
          ) : (
            '*********'
          )}
        </div>
        <div className="meus-dado">
          <strong>Endereço:</strong>{' '}
          {editando ? (
            <input
              type="text"
              name="endereco"
              value={dados.endereco}
              onChange={handleChange}
              className={editando ? 'input-editavel' : ''}
            />
          ) : (
            dados.endereco
          )}
        </div>
      </div>

      <div className="meus-dados-botoes">
        {editando ? (
          <>
            <button className="btn-cancelar" onClick={handleCancelar}>
              Cancelar
            </button>
            <button className="btn-salvar" onClick={handleSalvar}>
              Salvar
            </button>
          </>
        ) : (
          <button className="btn-editar" onClick={() => setEditando(true)}>
            Editar
          </button>
        )}
      </div>

      <p className="meus-dados-priv">
        Para saber como tratamos os seus dados pessoais, acesse o nosso{' '}
        <a href="#" className="link-privacidade">
          Aviso de Privacidade
        </a>
      </p>
    </section>
  );
}
