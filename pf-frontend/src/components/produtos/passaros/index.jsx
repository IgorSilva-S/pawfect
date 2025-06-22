import { Link } from 'react-router-dom';
import './style.css';

export default function Passaros() {
  return (
    <div className="animais-container">
      <div className="animais-top">
        <p className="animais-titulo">Produtos para pássaros</p>
        <img src="/img/produtos-passaros/passaros.png" alt="Pássaros" className="animais-img-top" />
        <p className="animais-subtitulo">Os melhores produtos para seu pássaro!</p>
      </div>

      <div className="animais-bottom">
        <img src="/img/produtos-passaros/passaros1.png" alt="Pássaros categoria" className="animais-img-lateral" />
        <div className="animais-categorias">
          <Link to="/passaros/1" className="animais-categoria">
            <img src="/img/produtos-passaros/img-circles/a-calopsita.png" alt="Calopsitas" />
            <p>Calopsitas</p>
          </Link>
          <Link to="/passaros/2" className="animais-categoria">
            <img src="/img/produtos-passaros/img-circles/a-papagaio.png" alt="Papagaios" />
            <p>Papagaios</p>
          </Link>
          <Link to="/passaros/3" className="animais-categoria">
            <img src="/img/produtos-passaros/img-circles/a-canario.png" alt="Canários" />
            <p>Canários</p>
          </Link>
          <Link to="/passaros/4" className="animais-categoria">
            <img src="/img/produtos-passaros/img-circles/a-outros.png" alt="Outros" />
            <p>Outros</p>
          </Link>
        </div>
      </div>

      <div className="animais-bottom">
        <img src="/img/produtos-passaros/passaros2.png" alt="Acessórios pássaros" className="animais-img-lateral" />
        <div className="animais-categorias">
          <Link to="/passaros/5" className="animais-categoria">
            <img src="/img/produtos-passaros/img-circles/a-acessorios.png" alt="Acessórios" />
            <p>Acessórios</p>
          </Link>
          <Link to="/passaros/6" className="animais-categoria">
            <img src="/img/produtos-passaros/img-circles/a-gaiola.png" alt="Gaiolas e Viveiros" />
            <p>Gaiolas e Viveiros</p>
          </Link>
          <Link to="/passaros/7" className="animais-categoria">
            <img src="/img/produtos-passaros/img-circles/a-higiene.png" alt="Higiene" />
            <p>Higiene</p>
          </Link>
          <Link to="/passaros/8" className="animais-categoria">
            <img src="/img/produtos-passaros/img-circles/a-comedouro.png" alt="Comedouros" />
            <p>Comedouros</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
