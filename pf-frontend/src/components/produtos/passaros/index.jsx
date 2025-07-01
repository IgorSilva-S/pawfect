import { Link } from 'react-router-dom';
import { use, useEffect } from 'react';
import './style.css';

export default function Passaros() {

  useEffect(() => {
    sessionStorage.setItem('lastPage', '/passaros')
  }) 

  return (
    <div className="animais-container">
      <div className="animais-top">
        <p className="animais-titulo">Produtos para pássaros</p>
        <img src="/img/produtos-banners/2.png" alt="Pássaros" className="animais-img-top" />
        <p className="animais-subtitulo">Os melhores produtos para seu pássaro!</p>
      </div>

      <div className="animais-bottom">
        <img src="/img/produtos-passaros/1.png" alt="Pássaros categoria" className="animais-img-lateral" />
        <div className="animais-categorias">
          <Link to="/pássaro/1" className="animais-categoria" >
            <img src="/img/produtos-passaros/img-circles/21.png" alt="Calopsitas" />
            <p>Calopsitas</p>
          </Link>
          <Link to="/pássaro/2" className="animais-categoria">
            <img src="/img/produtos-passaros/img-circles/22.png" alt="Papagaios" />
            <p>Papagaios</p>
          </Link>
          <Link to="/pássaro/3" className="animais-categoria">
            <img src="/img/produtos-passaros/img-circles/23.png" alt="Canários" />
            <p>Canários</p>
          </Link>
          <Link to="/pássaro/4" className="animais-categoria">
            <img src="/img/produtos-passaros/img-circles/24.png" alt="Outros" />
            <p>Outros</p>
          </Link>
        </div>
      </div>

      <div className="animais-bottom">
        <img src="/img/produtos-passaros/2.png" alt="Acessórios pássaros" className="animais-img-lateral" />
        <div className="animais-categorias">
          <Link to="/pássaro/5" className="animais-categoria">
            <img src="/img/produtos-passaros/img-circles/25.png" alt="Acessórios" />
            <p>Acessórios</p>
          </Link>
          <Link to="/pássaro/6" className="animais-categoria">
            <img src="/img/produtos-passaros/img-circles/26.png" alt="Gaiolas e Viveiros" />
            <p>Gaiolas e Viveiros</p>
          </Link>
          <Link to="/pássaro/7" className="animais-categoria">
            <img src="/img/produtos-passaros/img-circles/27.png" alt="Higiene" />
            <p>Higiene</p>
          </Link>
          <Link to="/pássaro/8" className="animais-categoria">
            <img src="/img/produtos-passaros/img-circles/28.png" alt="Comedouros" />
            <p>Comedouros</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
