import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './style.css';

export default function Peixes() {

    useEffect(() => {
    sessionStorage.setItem('lastPage', '/peixes')
  })

  return (
    <div className="animais-container">
      <div className="animais-top">
        <p className="animais-titulo">Produtos para peixes</p>
        <img src="/img/produtos-banners/4.png" alt="Peixes" className="animais-img-top" />
        <p className="animais-subtitulo">Os melhores produtos para o seu peixinho!</p>
      </div>

      <div className="animais-bottom">
        <img src="/img/produtos-peixes/9.png" alt="Tipos de peixes" className="animais-img-lateral" />
        <div className="animais-categorias">
          <Link to="/peixes/1" className="animais-categoria">
            <img src="/img/produtos-peixes/img-circles/37.png" alt="Peixes Betta" />
            <p>Peixes Betta</p>
          </Link>
          <Link to="/peixes/2" className="animais-categoria">
            <img src="/img/produtos-peixes/img-circles/38.png" alt="Cíclideos" />
            <p>Cíclideos</p>
          </Link>
          <Link to="/peixes/3" className="animais-categoria">
            <img src="/img/produtos-peixes/img-circles/39.png" alt="Carpas" />
            <p>Carpas</p>
          </Link>
          <Link to="/peixes/4" className="animais-categoria">
            <img src="/img/produtos-peixes/img-circles/40.png" alt="Outros" />
            <p>Outros</p>
          </Link>
        </div>
      </div>

      <div className="animais-bottom">
        <img src="/img/produtos-peixes/10.png" alt="Equipamentos e aquários" className="animais-img-lateral" />
        <div className="animais-categorias">
          <Link to="/peixes/5" className="animais-categoria">
            <img src="/img/produtos-peixes/img-circles/41.png" alt="Aquários" />
            <p>Aquários</p>
          </Link>
          <Link to="/peixes/6" className="animais-categoria">
            <img src="/img/produtos-peixes/img-circles/42.png" alt="Equipamentos" />
            <p>Equipamentos</p>
          </Link>
          <Link to="/peixes/7" className="animais-categoria">
            <img src="/img/produtos-peixes/img-circles/43.png" alt="Decoração" />
            <p>Decoração</p>
          </Link>
          <Link to="/peixes/8" className="animais-categoria">
            <img src="/img/produtos-peixes/img-circles/44.png" alt="Limpeza" />
            <p>Limpeza</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
