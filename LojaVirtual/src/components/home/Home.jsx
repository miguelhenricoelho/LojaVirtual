import React from 'react';
import './Home.css';
// IMPORTAÇÃO CORRIGIDA: Entra na pasta vizinha "introducao" para puxar o banner
import Introducao from '../introducao/Introducao';

function Home() {
  // Catálogo criativo de destaques com imagens reais da internet
  const produtos = [
    { id: 1, nome: "Tênis Ultra Boost Run", preco: "R$ 599,90", img: "https://unsplash.com" },
    { id: 2, nome: "Camiseta Dry-Fit High Performance", preco: "R$ 119,90", img: "https://unsplash.com" },
    { id: 3, nome: "Shorts de Compressão Pro", preco: "R$ 89,90", img: "https://unsplash.com" },
    { id: 4, nome: "Garrafa Térmica Inox Hidro", preco: "R$ 149,90", img: "https://unsplash.com" }
  ];

  return (
    <div className="home-container">
      <Introducao />
      <div className="vitrine-secao">
        <h2>Destaques da Semana</h2>
        <div className="produtos-grid">
          {produtos.map(prod => (
            <div key={prod.id} className="produto-card">
              <img src={prod.img} alt={prod.nome} />
              <h3>{prod.nome}</h3>
              <p className="preco">{prod.preco}</p>
              <button className="btn-comprar">Comprar</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
