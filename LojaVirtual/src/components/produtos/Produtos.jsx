import { useState, useMemo } from "react";
import ProdutoCard from "../produtoCard/ProdutoCard";
import produtos from "../../data/produtos";
import "./Produtos.css";

function Produtos() {
  const [filtro, setFiltro] = useState("Todos");
  const [busca, setBusca] = useState("");
  const [ordenacao, setOrdenacao] = useState("relevancia");

  const categorias = useMemo(() => {
    const contagem = { Todos: produtos.length };
    produtos.forEach((p) => {
      contagem[p.categoria] = (contagem[p.categoria] || 0) + 1;
    });
    return contagem;
  }, []);

  const produtosFiltrados = useMemo(() => {
    let lista = produtos;

    if (filtro !== "Todos") {
      lista = lista.filter((p) => p.categoria === filtro);
    }

    if (busca.trim()) {
      const termo = busca.trim().toLowerCase();
      lista = lista.filter((p) => p.nome.toLowerCase().includes(termo));
    }

    const ordenada = [...lista];
    if (ordenacao === "menor-preco") {
      ordenada.sort((a, b) => a.preco - b.preco);
    } else if (ordenacao === "maior-preco") {
      ordenada.sort((a, b) => b.preco - a.preco);
    } else if (ordenacao === "avaliacao") {
      ordenada.sort((a, b) => b.avaliacao - a.avaliacao);
    }

    return ordenada;
  }, [filtro, busca, ordenacao]);

  function limparFiltros() {
    setFiltro("Todos");
    setBusca("");
    setOrdenacao("relevancia");
  }

  return (
    <section className="produtos-pagina">
      <header className="produtos-header container">
        <span className="eyebrow">Catálogo</span>
        <h1>Todos os produtos</h1>
      </header>

      <div className="produtos-barra container">
        <div className="produtos-busca">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Buscar produto..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
          {busca && (
            <button className="produtos-busca-limpar" onClick={() => setBusca("")} aria-label="Limpar busca">
              ✕
            </button>
          )}
        </div>

        <select
          className="produtos-ordenacao"
          value={ordenacao}
          onChange={(e) => setOrdenacao(e.target.value)}
          aria-label="Ordenar por"
        >
          <option value="relevancia">Relevância</option>
          <option value="menor-preco">Menor preço</option>
          <option value="maior-preco">Maior preço</option>
          <option value="avaliacao">Melhor avaliação</option>
        </select>
      </div>

      <div className="produtos-filtros container">
        {Object.entries(categorias).map(([cat, qtd]) => (
          <button
            key={cat}
            className={`filtro-btn ${filtro === cat ? "ativo" : ""}`}
            onClick={() => setFiltro(cat)}
          >
            {cat}
            <span className="filtro-btn-contagem">{qtd}</span>
          </button>
        ))}
      </div>

      <div className="produtos-resultado container">
        <span>
          {produtosFiltrados.length}{" "}
          {produtosFiltrados.length === 1 ? "produto encontrado" : "produtos encontrados"}
        </span>
      </div>

      <div className="container">
        {produtosFiltrados.length > 0 ? (
          <div className="produtos-grid">
            {produtosFiltrados.map((produto) => (
              <ProdutoCard key={produto.id} produto={produto} />
            ))}
          </div>
        ) : (
          <div className="produtos-vazio">
            <span>🔍</span>
            <h2>Nenhum produto encontrado</h2>
            <p>Tente outra busca ou remova os filtros aplicados.</p>
            <button className="btn btn-outline" onClick={limparFiltros}>
              Limpar filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Produtos;