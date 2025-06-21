import React from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";

export default function Materia1() {
  return (
    <div className="materia1-container">
      <div className="materia1-content">
        <img
          src="/public/img/blog-img/noticias-img/not1.png"
          className="not1-img"
        ></img>
        <p className="not1-t">COMO DEIXAR SEU PET MAIS FELIZ E SAUDÁVEL</p>
        <p className="not1-p">
          Garantir que seu pet tenha uma vida feliz e saudável envolve atenção a
          diversos aspectos que vão além do básico, como alimentação e higiene.
          Um dos pilares para o bem-estar do animal é oferecer uma dieta
          equilibrada e nutritiva, adequada à sua idade, porte e necessidades
          específicas. Além disso, manter a rotina de exercícios físicos é
          essencial para prevenir o sedentarismo, evitar problemas de obesidade
          e estimular a mente do seu pet. Passeios diários, brincadeiras
          interativas e até mesmo desafios simples dentro de casa são ótimas
          formas de garantir que ele gaste energia de maneira positiva e
          mantenha a saúde mental em dia. Outro ponto fundamental é o
          acompanhamento veterinário regular, que ajuda a identificar
          precocemente qualquer problema de saúde, manter as vacinas em dia e
          cuidar da prevenção contra parasitas. A higiene também faz parte dos
          cuidados essenciais, desde o banho até a escovação dos pelos e dos
          dentes, que contribuem para o conforto e a saúde geral do pet. Porém,
          talvez o fator mais importante para um pet feliz seja o vínculo
          emocional que ele desenvolve com seu tutor. Animais que recebem
          atenção, carinho e se sentem parte da rotina da família apresentam
          menos sinais de estresse e comportamentos problemáticos. Proporcionar
          momentos de interação, dedicação e cuidado diário cria um ambiente
          seguro e acolhedor para o seu amigo, estimulando seu equilíbrio
          emocional. Pequenas mudanças na rotina, como reservar tempo para
          brincar, investir em um ambiente enriquecido e acompanhar de perto a
          saúde do seu pet, já fazem uma grande diferença. Cuidar bem do seu
          companheiro é garantir mais qualidade de vida e uma relação cheia de
          amor e confiança. Afinal, um pet feliz é sinônimo de uma família mais
          completa e harmoniosa.
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
