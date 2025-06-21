import React from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";

export default function Materia5() {
  return (
    <div className="materia5-container">
      <div className="materia5-content">
        <img
          src="/public/img/blog-img/noticias-img/not5.png"
          className="not5-img"
        ></img>
        <p className="not5-t">COMO PREPARAR SEU PET PARA VIAGENS E PASSEIOS</p>
        <p className="not5-p">
          Viajar ou passear com seu pet pode ser uma experiência muito
          prazerosa, mas exige planejamento e cuidados para garantir o conforto
          e a segurança do seu amigo. Antes de sair, é importante preparar a
          saúde do animal: certifique-se de que as vacinas estão em dia, assim
          como a prevenção contra pulgas, carrapatos e verminoses. Leve sempre
          os documentos de vacinação e o cartão de identificação do pet. No
          momento do transporte, escolha uma caixa de transporte adequada ao
          tamanho do seu pet ou utilize cintos de segurança específicos para
          animais, garantindo que ele viaje com segurança e conforto. Durante o
          trajeto, mantenha o ambiente ventilado, evite oferecer comida em
          excesso e faça paradas para que o pet possa se movimentar e fazer suas
          necessidades. Para passeios mais longos, leve água fresca, brinquedos
          e uma pequena quantidade de alimento, além de itens essenciais como
          coleira, guia e sacolinhas para recolher resíduos. É fundamental
          também familiarizar o pet com a rotina do passeio, acostumando-o aos
          objetos e locais com antecedência para reduzir o estresse. Por fim,
          respeite os limites do seu pet e fique atento a sinais de cansaço,
          medo ou desconforto. Com preparação e cuidado, suas viagens e passeios
          serão momentos inesquecíveis para você e seu melhor amigo.
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
            src="../../../../public/img/blog-img/dica1.png"
            alt="Dica 1"
          ></img>
          <p className="p-blog">Como Deixar Seu Pet Mais Feliz e Saudável</p>
          <div className="ler-mais">
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
      </div>
    </div>
  );
}
