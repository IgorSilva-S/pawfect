import React from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";

export default function Materia2() {
  return (
    <div className="materia2-container">
      <div className="materia2-content">
        <img
          src="/public/img/blog-img/noticias-img/not2.png"
          className="not2-img"
        ></img>
        <p className="not2-t">
          5 ERROS COMUNS NO CUIDADO DE PETS (E COMO EVITÁ-LOS)
        </p>
        <p className="not2-p">
          Cuidar bem do seu pet é fundamental para garantir saúde e bem-estar,
          mas muitos tutores acabam cometendo erros comuns que podem prejudicar
          a qualidade de vida dos animais. O primeiro erro é negligenciar a
          alimentação adequada. Oferecer alimentos não indicados ou em excesso
          pode causar obesidade e problemas digestivos. Para evitar isso,
          consulte sempre um veterinário para definir a dieta ideal. Outro erro
          frequente é a falta de exercícios regulares. Pets precisam se
          movimentar para manter o peso saudável e a mente ativa; a falta de
          estímulos físicos pode levar ao estresse e a comportamentos
          destrutivos. Reserve um tempo diário para brincadeiras e passeios. A
          ausência de visitas periódicas ao veterinário é um problema grave. A
          saúde preventiva, com vacinas em dia e exames regulares, é essencial
          para evitar doenças sérias. Agende consultas preventivas e siga as
          recomendações do profissional. Muitos tutores também subestimam a
          importância da higiene adequada. Banhos, escovação e cuidados
          dentários devem fazer parte da rotina para evitar infecções e
          desconfortos. Por fim, a falta de atenção e interação pode causar
          ansiedade e depressão nos pets. Dedique momentos diários para carinho
          e brincadeiras, fortalecendo o vínculo entre você e seu animal. Evitar
          esses erros é simples e faz toda a diferença para garantir uma vida
          mais feliz e saudável ao seu melhor amigo.
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
