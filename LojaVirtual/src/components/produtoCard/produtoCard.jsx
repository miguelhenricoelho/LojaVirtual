import { useCarrinho } from "../../context/CarrinhoContext";
import "./ProdutoCard.css";

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function ProdutoCard({ produto }) {
  const { adicionarItem } = useCarrinho();

  const desconto = produto.precoAntigo
    ? Math.round(100 - (produto.preco / produto.precoAntigo) * 100)
    : null;

  return (
    <article className="produto-card corte">
      {desconto && <span className="produto-card-badge">-{desconto}%</span>}

      <div className="produto-card-imagem">
        <img src={produto.imagem} alt={produto.nome} loading="lazy" />
      </div>

      <div className="produto-card-info">
        <span className="produto-card-categoria">{produto.categoria}</span>
        <h3 className="produto-card-nome">{produto.nome}</h3>
        <span className="produto-card-avaliacao">★ {produto.avaliacao}</span>

        <div className="produto-card-precos">
          {produto.precoAntigo && (
            <span className="price-old">{formatarPreco(produto.precoAntigo)}</span>
          )}
          <span className="price produto-card-preco">{formatarPreco(produto.preco)}</span>
        </div>

        <button className="btn btn-primary produto-card-btn" onClick={() => adicionarItem(produto)}>
          Adicionar ao carrinho
        </button>
      </div>
    </article>
  );
}

export default ProdutoCard;