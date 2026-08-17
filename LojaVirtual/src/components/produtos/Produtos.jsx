import React, { useState } from 'react';
import './Produtos.css';

function Produtos() {
  const catalogoCompleto = [
    { id: 1, nome: "Tênis Ultra Boost Run", categoria: "Tenis", preco: "R$ 599,90", img: "https://unsplash.com" },
    { id: 2, nome: "Camiseta Dry-Fit High", categoria: "Roupas", preco: "R$ 119,90", img: "https://unsplash.com" },
    { id: 3, nome: "Shorts de Compressão Pro", categoria: "Roupas", preco: "R$ 89,90", img: "https://unsplash.com" },
    { id: 4, nome: "Garrafa Térmica Inox", categoria: "Acessorios", preco: "R$ 149,90", img: "https://unsplash.com" },
    { id: 5, nome: "Tênis Trail Running Pro", categoria: "Tenis", preco: "R$ 689,00", img: "https://unsplash.com" },
    { id: 6, nome: "Blusa Moletom Esportivo", categoria: "Roupas", preco: "R$ 219,90", img: "https://unsplash.com" },
    { id: 7, nome: "Mochila Impermeável Tech", categoria: "Acessorios", preco: "R$ 299,00", img: "https://unsplash.com" },
    { id: 8, nome: "Smartwatch Sport Track", categoria: "Acessorios", preco: "R$ 449,90", img: "https://unsplash.com" }
  ];

  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');

  const produtosFiltrados = categoriaAtiva === 'Todos' 
    ? catalogoCompleto 
    : catalogoCompleto.filter(p => p.categoria === categoriaAtiva);

  return (
    <div className="produtos-container">
      <div className="produtos-cabecalho">
        <h1>Catálogo Esportivo</h1>
        <p>Equipamentos de elite para o seu melhor rendimento.</p>
      </div>

      <div className="filtros-container">
        {['Todos', 'Tenis', 'Roupas', 'Acessorios'].map((cat) => (
          <button 
            key={cat} 
            className={`btn-filtro ${categoriaAtiva === cat ? 'ativo' : ''}`}
            onClick={() => setCategoriaAtiva(cat)}
          >
            {cat === 'Tenis' ? 'Tênis' : cat === 'Acessorios' ? 'Acessórios' : cat}
          </button>
        ))}
      </div>

      <div className="produtos-listagem">
        {produtosFiltrados.map(prod => (
          <div key={prod.id} className="item-card">
            <div className="tag-categoria">{prod.categoria}</div>
            <img src={prod.img} alt={prod.nome} />
            <h3>{prod.nome}</h3>
            <p className="preco-item">{prod.preco}</p>
            <button className="btn-adicionar">Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produtos;
