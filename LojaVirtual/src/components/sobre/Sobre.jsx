import React from 'react';
import './Sobre.css';

function Sobre() {
  return (
    <div className="sobre-container">
      <div className="sobre-hero">
        <h1>Nossa História</h1>
        <p>Nascidos para impulsionar atletas e entusiastas do esporte.</p>
      </div>
      
      <div className="sobre-conteudo">
        <div className="sobre-texto">
          <h2>Quem Somos</h2>
          <p>
            Fundada em 2026, a <strong>SPORTZONE</strong> nasceu com o objetivo claro de democratizar o acesso a materiais esportivos de alta performance. Acreditamos que o esporte transforma vidas.
          </p>
          <p>
            Selecionamos a dedo cada tênis, peça de vestuário e acessório em nosso catálogo para garantir que você tenha a melhor experiência possível em seus treinos.
          </p>
        </div>
        <div className="sobre-imagem">
          <img src="https://unsplash.com" alt="Atletas correndo" />
        </div>
      </div>

      <div className="valores-grid">
        <div className="valor-card">
          <h3>Qualidade</h3>
          <p>Apenas produtos testados e aprovados pelas maiores marcas globais.</p>
        </div>
        <div className="valor-card">
          <h3>Inovação</h3>
          <p>Tecnologias de absorção de impacto e materiais sustentáveis.</p>
        </div>
        <div className="valor-card">
          <h3>Foco no Cliente</h3>
          <p>Suporte humanizado e envio expresso para todo o Brasil.</p>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
