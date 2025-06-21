import React from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";

export default function Materia4() {
  return (
    <div className="materia4-container">
      <div className="materia4-content">
        <img
          src="/public/img/blog-img/noticias-img/not4.png"
          className="not4-img"
        ></img>
        <p className="not4-t">BANHO E TOSA: TUDO O QUE VOCÊ PRECISA SABER</p>
        <p className="not4-p">
          Banho e Tosa: Tudo o que Você Precisa Saber Manter a higiene do seu
          pet é fundamental para garantir saúde e conforto, e o banho e a tosa
          desempenham um papel essencial nesse cuidado. O banho regular ajuda a
          remover sujeiras, ácaros e resíduos que podem causar alergias e
          irritações na pele, além de manter o pelo brilhante e cheiroso. A
          frequência ideal varia de acordo com o tipo de pelo e o estilo de vida
          do animal, por isso é importante consultar um profissional para
          definir a rotina mais adequada. A tosa, por sua vez, vai além da
          estética: ela contribui para o conforto térmico, evita o acúmulo de
          pelos embaraçados e facilita a prevenção de parasitas. Existem
          diferentes estilos e técnicas, que devem ser escolhidos considerando o
          bem-estar do pet e as necessidades específicas da raça. Além disso, o
          cuidado com as unhas, orelhas e dentes costuma ser realizado durante o
          banho e a tosa, complementando a higiene geral do seu amigo. Optar por
          profissionais qualificados garante um serviço seguro e tranquilo,
          evitando estresse e possíveis acidentes. Por fim, criar uma
          experiência positiva durante o banho e a tosa fortalece a confiança do
          pet, tornando esses momentos mais tranquilos e prazerosos. Com atenção
          e cuidado, você ajuda seu pet a se sentir sempre limpo, confortável e
          feliz.
        </p>
      </div>

      <div className="others-not">
        {" "}
        <div className="noticia-blog">
          <img
            className="img-blog"
            src="../../../../public/img/blog-img/dica3.png"
            alt="Dica 3"
          ></img>
          <p className="p-blog">Como Manter a Saúde do Seu Pet</p>
          <div className="ler-mais" id="ler-mais-3">
            <p className="ler-mais-t">Ler mais</p>
            <button className="seta-blog">
              <Link to="/materia3">
                <img
                  src="../../../../public/img/blog-img/seta.png"
                  alt="Seta"
                ></img>
              </Link>
            </button>
          </div>
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
          <div className="ler-mais">
            <p className="ler-mais-t">Ler mais</p>
            <button className="seta-blog">
              <Link to="/materia2">
                <img
                  src="../../../../public/img/blog-img/seta.png"
                  alt="Seta"
                ></img>
              </Link>
            </button>
          </div>
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
          <div className="ler-mais">
            <p className="ler-mais-t">Ler mais</p>
            <button className="seta-blog">
              <Link to="/materia5">
                <img
                  src="../../../../public/img/blog-img/seta.png"
                  alt="Seta"
                ></img>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
