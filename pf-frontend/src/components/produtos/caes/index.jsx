import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './style.css';

export default function Caes() {

    useEffect(() => {
      sessionStorage.setItem('lastPage', '/caes')
    })

  return (
    <div className="animais-container">
      <div className="animais-top">
        <p className="animais-titulo">Produtos para cães</p>
        <img src="/img/produtos-caes/caes.png" alt="Animais" className="animais-img-top" />
        <p className="animais-subtitulo">Selecionamos os melhores produtos para o seu melhor amigo!</p>
      </div>

      <div className="animais-bottom">
        <img src="/img/produtos-caes/racoes-c.png" alt="Animal comendo" className="animais-img-lateral" />
        <div className="animais-categorias">
          <Link to="/cachorro/1" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/c-seca.png" alt="Rações secas" />
            <p>Rações secas</p>
          </Link>
          <Link to="/cachorro/2" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/c-umida.png" alt="Rações úmidas" />
            <p>Rações úmidas</p>
          </Link>
          <Link to="/cachorro/3" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/c-medicamentosa.png" alt="Rações medicamentosas" />
            <p>Rações medicamentosas</p>
          </Link>
          <Link to="/cachorro/4" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/c-especial.png" alt="Rações especiais" />
            <p>Rações especiais</p>
          </Link>
        </div>
      </div>

      <div className="animais-bottom">
        <img src="/img/produtos-caes/higiene-c.png" alt="Animal no banho" className="animais-img-lateral" />
        <div className="animais-categorias">
          <Link to="/cachorro/5" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/c-banho.png" alt="Itens de banho" />
            <p>Itens de banho</p>
          </Link>
          <Link to="/cachorro/6" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/c-pente.png" alt="Pentes e escovas" />
            <p>Pentes e escovas</p>
          </Link>
          <Link to="/cachorro/7" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/c-tapete.png" alt="Tapetes higiênicos" />
            <p>Tapetes higiênicos</p>
          </Link>
          <Link to="/cachorro/8" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/c-outros1.png" alt="Outros" />
            <p>Outros</p>
          </Link>
        </div>
      </div>

      <div className="animais-bottom">
        <img src="/img/produtos-caes/brinquedos-c.png" alt="Animal brincando" className="animais-img-lateral" />
        <div className="animais-categorias">
          <Link to="/cachorro/9" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/c-pelucia.png" alt="Pelúcias" />
            <p>Pelúcias</p>
          </Link>
          <Link to="/cachorro/10" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/c-bolinha.png" alt="Bolinhas" />
            <p>Bolinhas</p>
          </Link>
          <Link to="/cachorro/11" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/c-mordedor.png" alt="Mordedores" />
            <p>Mordedores</p>
          </Link>
          <Link to="/cachorro/12" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/c-outros2.png" alt="Outros" />
            <p>Outros</p>
          </Link>
        </div>
      </div>

      <div className="animais-bottom">
        <img src="/img/produtos-caes/camas-c.png" alt="Animal descansando" className="animais-img-lateral" />
        <div className="animais-categorias">
          <Link to="/cachorro/13" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/c-banho2.png" alt="Itens de banho" />
            <p>Itens de banho</p>
          </Link>
          <Link to="/cachorro/14" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/c-cama.png" alt="Camas" />
            <p>Camas</p>
          </Link>
          <Link to="/cachorro/15" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/c-colchonete.png" alt="Colchonetes" />
            <p>Colchonetes</p>
          </Link>
          <Link to="/cachorro/16" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/c-caixat.png" alt="Caixas de transporte" />
            <p>Caixas de transporte</p>
          </Link>
        </div>
      </div>

      <div className="animais-bottom">
        <img src="/img/produtos-caes/extras-c.png" alt="Extras" className="animais-img-lateral" />
        <div className="animais-categorias">
          <Link to="/cachorro/17" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/c-cobertor.png" alt="Cobertores" />
            <p>Cobertores</p>
          </Link>
          <Link to="/cachorro/18" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/c-acessorios.png" alt="Acessórios" />
            <p>Acessórios</p>
          </Link>
          <Link to="/cachorro/19" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/c-comedouro.png" alt="Comedouros" />
            <p>Comedouros</p>
          </Link>
          <Link to="/cachorro/20" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/c-petisco.png" alt="Petiscos" />
            <p>Petiscos</p>
          </Link>
        </div>
      </div>
    </div>
  );
}