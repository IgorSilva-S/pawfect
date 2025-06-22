import { Link } from 'react-router-dom';
import './style.css';

export default function Roedores() {
  return (
    <div className="animais-container">
      <div className="animais-top">
        <p className="animais-titulo">Produtos para roedores</p>
        <img src="/img/produtos-roedores/roedores.png" alt="Roedores" className="animais-img-top" />
        <p className="animais-subtitulo">Os melhores produtos para seu pet!</p>
      </div>

      <div className="animais-bottom">
        <img src="/img/produtos-roedores/roedores1.png" alt="Roedores tipos" className="animais-img-lateral" />
        <div className="animais-categorias">
          <Link to="/roedores/1" className="animais-categoria">
            <img src="/img/produtos-roedores/img-circles/r-hamster.png" alt="Hamsters" />
            <p>Hamsters</p>
          </Link>
          <Link to="/roedores/2" className="animais-categoria">
            <img src="/img/produtos-roedores/img-circles/r-coelho.png" alt="Coelhos" />
            <p>Coelhos</p>
          </Link>
          <Link to="/roedores/3" className="animais-categoria">
            <img src="/img/produtos-roedores/img-circles/r-porquinho.png" alt="Porquinhos da índia" />
            <p>Porquinhos da índia</p>
          </Link>
          <Link to="/roedores/4" className="animais-categoria">
            <img src="/img/produtos-roedores/img-circles/r-chinchila.png" alt="Chinchilas" />
            <p>Chinchilas</p>
          </Link>
        </div>
      </div>

      <div className="animais-bottom">
        <img src="/img/produtos-roedores/roedores2.png" alt="Roedores acessórios" className="animais-img-lateral" />
        <div className="animais-categorias">
          <Link to="/roedores/5" className="animais-categoria">
            <img src="/img/produtos-roedores/img-circles/r-acessorios.png" alt="Acessórios" />
            <p>Acessórios</p>
          </Link>
          <Link to="/roedores/6" className="animais-categoria">
            <img src="/img/produtos-roedores/img-circles/r-gaiola.png" alt="Gaiolas e Viveiros" />
            <p>Gaiolas e Viveiros</p>
          </Link>
          <Link to="/roedores/7" className="animais-categoria">
            <img src="/img/produtos-roedores/img-circles/r-higiene.png" alt="Higiene" />
            <p>Higiene</p>
          </Link>
          <Link to="/roedores/8" className="animais-categoria">
            <img src="/img/produtos-roedores/img-circles/r-comedouro.png" alt="Comedouros" />
            <p>Comedouros</p>
          </Link>
        </div>
      </div>
    </div>
  );
}