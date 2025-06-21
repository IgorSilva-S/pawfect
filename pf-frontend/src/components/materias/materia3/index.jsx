import React from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";

export default function Materia3() {
  return (
    <div className="materia3-container">
      <div className="materia3-content">
        <img
          src="/public/img/blog-img/noticias-img/not3.png"
          className="not3-img"
        ></img>
        <p className="not3-t">COMO MANTER A SAÚDE DO SEU PET</p>
        <p className="not3-p">
          Manter a saúde do seu pet em dia é essencial para garantir uma vida
          longa, feliz e cheia de energia ao seu companheiro. O primeiro passo é
          investir em uma alimentação balanceada e adequada às necessidades
          específicas de cada animal, levando em consideração idade, porte e
          possíveis restrições alimentares. Além disso, é fundamental garantir
          exercícios físicos regulares para evitar o sedentarismo, controlar o
          peso e estimular a mente do seu pet, prevenindo problemas
          comportamentais. Outro cuidado importante é manter as vacinas
          atualizadas e realizar visitas periódicas ao veterinário para exames
          preventivos, que ajudam a identificar e tratar doenças antes que se
          tornem graves. A higiene também não pode ser negligenciada: banhos,
          escovação dos pelos e dos dentes colaboram para o bem-estar geral do
          animal, evitando infecções e desconfortos. Além dos cuidados físicos,
          oferecer atenção e carinho diariamente fortalece o vínculo entre tutor
          e pet, reduzindo o estresse e promovendo o equilíbrio emocional do seu
          amigo. Pequenas atitudes, como momentos de brincadeira e interação,
          fazem grande diferença na qualidade de vida do seu pet. Com esses
          cuidados simples, você garante saúde, felicidade e muito mais
          disposição para seu melhor amigo aproveitar cada momento ao seu lado.
        </p>
      </div>

      <div className="others-not">
        {" "}
        <div className="noticia-blog">
          <img
            className="img-blog"
            src="../../../../public/img/blog-img/dica1.png"
            alt="Dica 1"
          ></img>
          <p className="p-blog">Como Deixar Seu Pet Mais Feliz e Saudável</p>
          <div className="ler-mais" id="ler-mais-3">
            <p className="ler-mais-t">Ler mais</p>
            <button className="seta-blog">
              <Link to="/materia1">
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
            src="../../../../public/img/blog-img/dica4.png"
            alt="Dica 4"
          ></img>
          <p className="p-blog">Banho e Tosa: Tudo o que Você Precisa Saber</p>
          <div className="ler-mais">
            <p className="ler-mais-t">Ler mais</p>
            <button className="seta-blog">
              <Link to="/materia4">
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
