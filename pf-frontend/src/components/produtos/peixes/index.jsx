import { Link } from 'react-router-dom';
import './style.css';

export default function Peixes() {
  return (
    <div className="animais-container">
      <div className="animais-top">
        <p className="animais-titulo">Produtos para peixes</p>
        <img src="/img/produtos-peixes/peixes.png" alt="Peixes" className="animais-img-top" />
        <p className="animais-subtitulo">Os melhores produtos para o seu peixinho!</p>
      </div>

      <div className="animais-bottom">
        <img src="/img/produtos-peixes/peixes1.png" alt="Tipos de peixes" className="animais-img-lateral" />
        <div className="animais-categorias">
          <Link to="/peixes/1" className="animais-categoria">
            <img src="/img/produtos-peixes/img-circles/p-betta.png" alt="Peixes Betta" />
            <p>Peixes Betta</p>
          </Link>
          <Link to="/peixes/2" className="animais-categoria">
            <img src="/img/produtos-peixes/img-circles/p-ciclideos.png" alt="Cíclideos" />
            <p>Cíclideos</p>
          </Link>
          <Link to="/peixes/3" className="animais-categoria">
            <img src="/img/produtos-peixes/img-circles/p-carpas.png" alt="Carpas" />
            <p>Carpas</p>
          </Link>
          <Link to="/peixes/4" className="animais-categoria">
            <img src="/img/produtos-peixes/img-circles/p-outros.png" alt="Outros" />
            <p>Outros</p>
          </Link>
        </div>
      </div>

      <div className="animais-bottom">
        <img src="/img/produtos-peixes/peixes2.png" alt="Equipamentos e aquários" className="animais-img-lateral" />
        <div className="animais-categorias">
          <Link to="/peixes/5" className="animais-categoria">
            <img src="/img/produtos-peixes/img-circles/p-aquario.png" alt="Aquários" />
            <p>Aquários</p>
          </Link>
          <Link to="/peixes/6" className="animais-categoria">
            <img src="/img/produtos-peixes/img-circles/p-equipamentos.png" alt="Equipamentos" />
            <p>Equipamentos</p>
          </Link>
          <Link to="/peixes/7" className="animais-categoria">
            <img src="/img/produtos-peixes/img-circles/p-decoracao.png" alt="Decoração" />
            <p>Decoração</p>
          </Link>
          <Link to="/peixes/8" className="animais-categoria">
            <img src="/img/produtos-peixes/img-circles/p-limpeza.png" alt="Limpeza" />
            <p>Limpeza</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
