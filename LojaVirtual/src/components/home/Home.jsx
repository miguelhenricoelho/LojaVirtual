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

const beneficios = [
  {
    titulo: "Frete rapido",
    texto: "Entrega em ate 3 dias uteis para todo o Brasil.",
    icone: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="1" y="6" width="15" height="12" rx="1" />
        <path d="M16 10h4l3 3v5h-7z" />
        <circle cx="6" cy="20" r="2" />
        <circle cx="18" cy="20" r="2" />
      </svg>
    ),
  },
  {
    titulo: "Troca facil",
    texto: "30 dias para trocar ou devolver sem burocracia.",
    icone: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 2l4 4-4 4" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <path d="M7 22l-4-4 4-4" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
  },
  {
    titulo: "Compra segura",
    texto: "Pagamento protegido em todas as etapas.",
    icone: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    titulo: "Qualidade pro",
    texto: "Produtos usados por atletas profissionais.",
    icone: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 4h10v5a5 5 0 0 1-10 0z" />
        <path d="M7 5H4a3 3 0 0 0 3 5" />
        <path d="M17 5h3a3 3 0 0 1-3 5" />
      </svg>
    ),
  },
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
          <Link to="/produtos" className="home-ver-todos">Ver todos</Link>
        </div>
        <div className="produtos-grid">
          {destaques.map((produto) => (
            <ProdutoCard key={produto.id} produto={produto} />
          ))}
        </div>
      </section>

      <section className="home-beneficios">
        <div className="container beneficios-grid">
          {beneficios.map((b) => (
            <div className="beneficio" key={b.titulo}>
              <span className="beneficio-icone">{b.icone}</span>
              <h4>{b.titulo}</h4>
              <p>{b.texto}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;