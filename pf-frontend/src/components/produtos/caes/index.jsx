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
        <img src="/img/produtos-banners/1.png" alt="Animais" className="animais-img-top" />
        <p className="animais-subtitulo">Selecionamos os melhores produtos para o seu melhor amigo!</p>
      </div>

      <div className="animais-bottom">
        <img src="/img/produtos-caes/4.png" alt="Animal comendo" className="animais-img-lateral" />
        <div className="animais-categorias">
          <Link to="/cachorro/1" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/1.png" alt="Rações secas" />
            <p>Rações secas</p>
          </Link>
          <Link to="/cachorro/2" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/2.png" alt="Rações úmidas" />
            <p>Rações úmidas</p>
          </Link>
          <Link to="/cachorro/3" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/3.png" alt="Rações medicamentosas" />
            <p>Rações medicamentosas</p>
          </Link>
          <Link to="/cachorro/4" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/4.png" alt="Rações especiais" />
            <p>Rações especiais</p>
          </Link>
        </div>
      </div>

      <div className="animais-bottom">
        <img src="/img/produtos-caes/1.png" alt="Animal no banho" className="animais-img-lateral" />
        <div className="animais-categorias">
          <Link to="/cachorro/5" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/5.png" alt="Itens de banho" />
            <p>Itens de banho</p>
          </Link>
          <Link to="/cachorro/6" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/6.png" alt="Pentes e escovas" />
            <p>Pentes e escovas</p>
          </Link>
          <Link to="/cachorro/7" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/7.png" alt="Tapetes higiênicos" />
            <p>Tapetes higiênicos</p>
          </Link>
          <Link to="/cachorro/8" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/8.png" alt="Outros" />
            <p>Outros</p>
          </Link>
        </div>
      </div>

      <div className="animais-bottom">
        <img src="/img/produtos-caes/2.png" alt="Animal brincando" className="animais-img-lateral" />
        <div className="animais-categorias">
          <Link to="/cachorro/9" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/9.png" alt="Pelúcias" />
            <p>Pelúcias</p>
          </Link>
          <Link to="/cachorro/10" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/10.png" alt="Bolinhas" />
            <p>Bolinhas</p>
          </Link>
          <Link to="/cachorro/11" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/11.png" alt="Mordedores" />
            <p>Mordedores</p>
          </Link>
          <Link to="/cachorro/12" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/12.png" alt="Outros" />
            <p>Outros</p>
          </Link>
        </div>
      </div>

      <div className="animais-bottom">
        <img src="/img/produtos-caes/3.png" alt="Animal descansando" className="animais-img-lateral" />
        <div className="animais-categorias">
          <Link to="/cachorro/13" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/13.png" alt="Itens de banho" />
            <p>Itens de banho</p>
          </Link>
          <Link to="/cachorro/14" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/14.png" alt="Camas" />
            <p>Camas</p>
          </Link>
          <Link to="/cachorro/15" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/15.png" alt="Colchonetes" />
            <p>Colchonetes</p>
          </Link>
          <Link to="/cachorro/16" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/16.png" alt="Caixas de transporte" />
            <p>Caixas de transporte</p>
          </Link>
        </div>
      </div>

      <div className="animais-bottom">
        <img src="/img/produtos-caes/4.png" alt="Extras" className="animais-img-lateral" />
        <div className="animais-categorias">
          <Link to="/cachorro/17" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/17.png" alt="Cobertores" />
            <p>Cobertores</p>
          </Link>
          <Link to="/cachorro/18" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/18.png" alt="Acessórios" />
            <p>Acessórios</p>
          </Link>
          <Link to="/cachorro/19" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/19.png" alt="Comedouros" />
            <p>Comedouros</p>
          </Link>
          <Link to="/cachorro/20" className="animais-categoria">
            <img src="/img/produtos-caes/img-circles/20.png" alt="Petiscos" />
            <p>Petiscos</p>
          </Link>
        </div>
      </div>
    </div>
  );
}