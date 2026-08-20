import { Link } from "react-router";
import Introducao from "../introducao/Introducao";
import ProdutoCard from "../produtoCard/ProdutoCard";
import produtos from "../../data/produtos";
import "./Home.css";

const categorias = [
  { nome: "Futebol", imagem: "https://loremflickr.com/400/500/soccer,field" },
  { nome: "Corrida", imagem: "https://loremflickr.com/400/500/running,track" },
  { nome: "Basquete", imagem: "https://loremflickr.com/400/500/basketball,court" },
  { nome: "Fitness", imagem: "https://loremflickr.com/400/500/gym,weights" },
];

function Home() {
  const destaques = produtos.slice(0, 4);

  return (
    <>
      <Introducao />

      <section className="home-categorias container">
        <h2 className="home-secao-titulo">Por categoria</h2>
        <div className="categorias-grid">
          {categorias.map((cat) => (
            <Link to="/produtos" key={cat.nome} className="categoria-card corte">
              <img src={cat.imagem} alt={cat.nome} />
              <span>{cat.nome}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-destaques container">
        <div className="home-secao-header">
          <h2 className="home-secao-titulo">Mais vendidos</h2>
          <Link to="/produtos" className="home-ver-todos">Ver todos →</Link>
        </div>
        <div className="produtos-grid">
          {destaques.map((produto) => (
            <ProdutoCard key={produto.id} produto={produto} />
          ))}
        </div>
      </section>

      <section className="home-beneficios">
        <div className="container beneficios-grid">
          <div className="beneficio">
            <span>🚚</span>
            <h4>Frete rápido</h4>
            <p>Entrega em até 3 dias úteis para todo o