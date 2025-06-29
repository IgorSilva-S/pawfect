import { Link } from 'react-router-dom';
import './style.css';

export default function Gatos() {
  return (
    <div className="animais-container">
      <div className="animais-top">
        <p className="animais-titulo">Produtos para gatos</p>
        <img src="/img/produtos-gatos/gatos.png" alt="Animais" className="animais-img-top" />
        <p className="animais-subtitulo">Encontre tudo o que o seu felino precisa</p>
      </div>

      <div className="animais-bottom">
        <img src="/img/produtos-gatos/racoes-g.png" alt="Animal comendo" className="animais-img-lateral" />

        <div className="animais-categorias">
          <Link to="/gatos/1" className="animais-categoria">
            <img src="/img/produtos-gatos/img-circles/g-seca.png" alt="Rações secas" />
            <p>Rações secas</p>
          </Link>
          <Link to="/gatos/2" className="animais-categoria">
            <img src="/img/produtos-gatos/img-circles/g-umida.png" alt="Rações úmidas" />
            <p>Rações úmidas</p>
          </Link>
          <Link to="/gatos/3" className="animais-categoria">
            <img src="/img/produtos-gatos/img-circles/g-medicamentosa.png" alt="Rações medicamentosas" />
            <p>Rações medicamentosas</p>
          </Link>
          <Link to="/gatos/4" className="animais-categoria">
            <img src="/img/produtos-gatos/img-circles/g-natural.png" alt="Rações naturais" />
            <p>Rações naturais</p>
          </Link>
        </div>
      </div>

      <div className="animais-bottom">
        <img src="/img/produtos-gatos/bath-g.png" alt="Animal no banho" className="animais-img-lateral" />

        <div className="animais-categorias">
          <Link to="/gatos/5" className="animais-categoria">
            <img src="/img/produtos-gatos/img-circles/g-areia.png" alt="Areias e pás" />
            <p>Areias e pás</p>
          </Link>
          <Link to="/gatos/6" className="animais-categoria">
            <img src="/img/produtos-gatos/img-circles/g-caixaareia.png" alt="Caixas de areia" />
            <p>Caixas de areia</p>
          </Link>
          <Link to="/gatos/7" className="animais-categoria">
            <img src="/img/produtos-gatos/img-circles/g-shampoo.png" alt="Itens de banho" />
            <p>Itens de banho</p>
          </Link>
          <Link to="/gatos/8" className="animais-categoria">
            <img src="/img/produtos-gatos/img-circles/g-pente.png" alt="Pentes e escovas" />
            <p>Pentes e escovas</p>
          </Link>
        </div>
      </div>

      <div className="animais-bottom">
        <img src="/img/produtos-gatos/play-g.png" alt="Animal brincando" className="animais-img-lateral" />

        <div className="animais-categorias">
          <Link to="/gatos/9" className="animais-categoria">
            <img src="/img/produtos-gatos/img-circles/g-arranhadores.png" alt="Arranhadores" />
            <p>Arranhadores</p>
          </Link>
          <Link to="/gatos/10" className="animais-categoria">
            <img src="/img/produtos-gatos/img-circles/g-bolinhas.png" alt="Bolinhas" />
            <p>Bolinhas</p>
          </Link>
          <Link to="/gatos/11" className="animais-categoria">
            <img src="/img/produtos-gatos/img-circles/g-pelucias.png" alt="Pelúcias" />
            <p>Pelúcias</p>
          </Link>
          <Link to="/gatos/12" className="animais-categoria">
            <img src="/img/produtos-gatos/img-circles/g-varinhas.png" alt="Varinhas" />
            <p>Varinhas</p>
          </Link>
        </div>
      </div>

      <div className="animais-bottom">
        <img src="/img/produtos-gatos/toca-g.png" alt="Animal na toca" className="animais-img-lateral" />

        <div className="animais-categorias">
          <Link to="/gatos/13" className="animais-categoria">
            <img src="/img/produtos-gatos/img-circles/g-camas.png" alt="Camas" />
            <p>Camas</p>
          </Link>
          <Link to="/gatos/14" className="animais-categoria">
            <img src="/img/produtos-gatos/img-circles/g-tocas.png" alt="Tocas" />
            <p>Tocas</p>
          </Link>
          <Link to="/gatos/15" className="animais-categoria">
            <img src="/img/produtos-gatos/img-circles/g-caixat.png" alt="Caixas de transporte" />
            <p>Caixas de transporte</p>
          </Link>
          <Link to="/gatos/16" className="animais-categoria">
            <img src="/img/produtos-gatos/img-circles/g-cobertores.png" alt="Acessórios" />
            <p>Acessórios</p>
          </Link>
        </div>
      </div>

      <div className="animais-bottom">
        <img src="/img/produtos-gatos/extras-g.png" alt="Extras" className="animais-img-lateral" />

        <div className="animais-categorias">
          <Link to="/gatos/17" className="animais-categoria">
            <img src="/img/produtos-gatos/img-circles/g-lacos.png" alt="Acessórios" />
            <p>Acessórios</p>
          </Link>
          <Link to="/gatos/18" className="animais-categoria">
            <img src="/img/produtos-gatos/img-circles/g-comedouros.png" alt="Comedouros" />
            <p>Comedouros</p>
          </Link>
          <Link to="/gatos/19" className="animais-categoria">
            <img src="/img/produtos-gatos/img-circles/g-petiscos.png" alt="Petiscos" />
            <p>Petiscos</p>
          </Link>
          <Link to="/gatos/20" className="animais-categoria">
            <img src="/img/produtos-gatos/img-circles/g-medicamentos.png" alt="Medicamentos" />
            <p>Medicamentos</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

