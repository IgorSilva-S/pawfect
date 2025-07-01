import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './style.css';

export default function Roedores() {

    useEffect(() => {
    sessionStorage.setItem('lastPage', '/roedores')
  })

  return (
    <div className="animais-container">
      <div className="animais-top">
        <p className="animais-titulo">Produtos para roedores</p>
        <img src="/img/produtos-banners/3.png" alt="Roedores" className="animais-img-top" />
        <p className="animais-subtitulo">Os melhores produtos para seu pet!</p>
      </div>

      <div className="animais-bottom">
        <img src="/img/produtos-roedores/7.png" alt="Roedores tipos" className="animais-img-lateral" />
        <div className="animais-categorias">
          <Link to="/roedores/1" className="animais-categoria">
            <img src="/img/produtos-roedores/img-circles/29.png" alt="Hamsters" />
            <p>Hamsters</p>
          </Link>
          <Link to="/roedores/2" className="animais-categoria">
            <img src="/img/produtos-roedores/img-circles/30.png" alt="Coelhos" />
            <p>Coelhos</p>
          </Link>
          <Link to="/roedores/3" className="animais-categoria">
            <img src="/img/produtos-roedores/img-circles/31.png" alt="Porquinhos da índia" />
            <p>Porquinhos da índia</p>
          </Link>
          <Link to="/roedores/4" className="animais-categoria">
            <img src="/img/produtos-roedores/img-circles/32.png" alt="Chinchilas" />
            <p>Chinchilas</p>
          </Link>
        </div>
      </div>

      <div className="animais-bottom">
        <img src="/img/produtos-roedores/8.png" alt="Roedores acessórios" className="animais-img-lateral" />
        <div className="animais-categorias">
          <Link to="/roedores/5" className="animais-categoria">
            <img src="/img/produtos-roedores/img-circles/33.png" alt="Acessórios" />
            <p>Acessórios</p>
          </Link>
          <Link to="/roedores/6" className="animais-categoria">
            <img src="/img/produtos-roedores/img-circles/34.png" alt="Gaiolas e Viveiros" />
            <p>Gaiolas e Viveiros</p>
          </Link>
          <Link to="/roedores/7" className="animais-categoria">
            <img src="/img/produtos-roedores/img-circles/35.png" alt="Higiene" />
            <p>Higiene</p>
          </Link>
          <Link to="/roedores/8" className="animais-categoria">
            <img src="/img/produtos-roedores/img-circles/36.png" alt="Comedouros" />
            <p>Comedouros</p>
          </Link>
        </div>
      </div>
    </div>
  );
}