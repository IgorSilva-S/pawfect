import React from "react";
import "./style.css";
import { Link, useNavigate } from 'react-router-dom'

export default function Blog() {
  return (
    <div id="blog">
      <p id="titulo-blog">Blog da Pawfect</p>
      <div id="noticias">
        <div className="noticia-blog">
          <img
            className="img-blog"
            src="../../../../public/img/blog-img/dica1.png"
            alt="Dica 1"
          ></img>
          <p className="p-blog">Como Deixar Seu Pet Mais Feliz e Saudável</p>
          <Link to="/materia1">
            <div className="ler-mais">
              <p className="ler-mais-t">Ler mais</p>
              <button className="seta-blog">
                <img
                  src="../../../../public/img/blog-img/seta.png"
                  alt="Seta"
                ></img>
              </button>
            </div>
          </Link>
        </div>

        <div className="noticia-blog">
          <img
            className="img-blog"
            src="../../../../public/img/blog-img/dica2.png"
            alt="Dica 2"
          ></img>
          <p className="p-blog">
            5 Erros Comuns no Cuidado de Pets (E Como Evitá-los)
          </p>
          <Link to="/materia2">
            <div className="ler-mais">
              <p className="ler-mais-t">Ler mais</p>
              <button className="seta-blog">
                <img
                  src="../../../../public/img/blog-img/seta.png"
                  alt="Seta"
                ></img>
              </button>
            </div>
          </Link>
        </div>

        <div className="noticia-blog">
          <img
            className="img-blog"
            src="../../../../public/img/blog-img/dica3.png"
            alt="Dica 3"
          ></img>
          <p className="p-blog">Como Manter a Saúde do Seu Pet</p>
          <Link to="/materia3">
            <div className="ler-mais" id="ler-mais-3">
              <p className="ler-mais-t">Ler mais</p>
              <button className="seta-blog">
                <img
                  src="../../../../public/img/blog-img/seta.png"
                  alt="Seta"
                ></img>
              </button>
            </div>
          </Link>
        </div>

        <div className="noticia-blog">
          <img
            className="img-blog"
            src="../../../../public/img/blog-img/dica4.png"
            alt="Dica 4"
          ></img>
          <p className="p-blog">Banho e Tosa: Tudo o que Você Precisa Saber</p>
          <Link to="/materia4">
            <div className="ler-mais">
              <p className="ler-mais-t">Ler mais</p>
              <button className="seta-blog">
                <img
                  src="../../../../public/img/blog-img/seta.png"
                  alt="Seta"
                ></img>
              </button>
            </div>
          </Link>
        </div>

        <div className="noticia-blog">
          <img
            className="img-blog"
            src="../../../../public/img/blog-img/dica5.png"
            alt="Dica 5"
          ></img>
          <p className="p-blog">
            Como Preparar Seu Pet para Viagens e Passeios
          </p>
          <Link to="/materia5"  className="ler-mais">
            <div>
              <p className="ler-mais-t">Ler mais</p>
              <button className="seta-blog">
                <img
                  src="../../../../public/img/blog-img/seta.png"
                  alt="Seta"
                ></img>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
