import './style.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MeusDados() {
  const Navigate = useNavigate()

  const [editando, setEditando] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [dados, setDados] = useState({
    email: 'emaildologin@gmail.com',
    nome: '',
    celular: '',
    senha: '',
    endereco: 'Rua 4, Bairro, Cidade'
  });

  const handleChange = (e) => {
    setDados({ ...dados, [e.target.name]: e.target.value });
  };

  const handleSalvar = async () => {
    let token = localStorage.getItem('token')
    let tokenData = await fetch('http://localhost:3000/api/user/profile/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${token}`
      },
    })

    if (tokenData.ok) {
      console.log('Token OK')
    } else {
      console.error('Token inválido')
      setEditando(false);
      setMostrarSenha(false);
      return;
    }

    let user = await tokenData.json()
    user = user.user.email
    let passInp = dados.senha
    if (passInp == undefined) {
      passInp = ''
    }

    if (passInp.trim() === '') {
      await fetch(`http://localhost:3000/api/user/edit/${user}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: dados.nome,
          email: dados.email,
          phone: dados.celular,
          address: dados.address
        })
      })
    } else {
      await fetch(`http://localhost:3000/api/user/edit/${user}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: dados.nome,
          email: dados.email,
          phone: dados.celular,
          address: dados.address,
          password: dados.senha
        })
      })
    }



    setEditando(false);
    setMostrarSenha(false);

    Navigate('/perfil')
  };

  const handleCancelar = () => {
    setEditando(false);
    setMostrarSenha(false);
  };

  const toggleMostrarSenha = () => {
    setMostrarSenha((prev) => !prev);
  };

  useEffect(() => {
    const getData = async () => {
      let token = localStorage.getItem('token')
      let tokenData = await fetch('http://localhost:3000/api/user/profile/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `bearer ${token}`
        },
      })

      if (tokenData.ok) {
        console.log('Token OK')
      } else {
        Navigate('/user')
      }

      let resMsg = await tokenData.json()
      let user = resMsg.user
      const userData = await fetch(`http://localhost:3000/api/user/list/${user.email}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      let userJson = await userData.json()
      userJson = userJson.data.user
      setDados({
        email: userJson.email,
        nome: userJson.name,
        celular: userJson.phone,
        password: '',
        endereco: userJson.address
      })
    }

    getData()
  }, [])

  const deleteUser = async () => {
    let token = localStorage.getItem('token')
    let tokenData = await fetch('http://localhost:3000/api/user/profile/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${token}`
      },
    })

    if (tokenData.ok) {
      console.log('Token OK')
    } else {
      Navigate('/user')
    }

    let resMsg = await tokenData.json()
    let user = resMsg.user.email
    const response = await fetch(`http://localhost:3000/api/user/del/${user}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })

    if (response.ok) {
      alert('Usuário apagado!')
      localStorage.removeItem('token')
      Navigate('/user')
    } else {
      console.error('Não foi possível deletar o usuário')
      setEditando(false);
      setMostrarSenha(false);
      return
    }
  }

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
            'Não podemos mostrar a senha'
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
        <div className="meus-dado">
          <strong>Apagar usuário</strong>{' '}
          {editando ? (
            <button className="btn-cancelar" onClick={deleteUser}>
              Apagar
            </button>
          ) : (
            'Edite o usuário'
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
          <>
            <button className="btn-editar" onClick={() => setEditando(true)}>
              Editar
            </button>
          </>
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
