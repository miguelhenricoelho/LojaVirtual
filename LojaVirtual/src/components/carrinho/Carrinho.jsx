import { Link } from "react-router";
import { useCarrinho } from "../../context/CarrinhoContext";
import "./Carrinho.css";

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function Carrinho() {
  const { itens, removerItem, alterarQuantidade, total } = useCarrinho();

  if (itens.length === 0) {
    return (
      <section className="carrinho-vazio">
        <h1>Seu carrinho está vazio</h1>
        <p>Adicione produtos e volte aqui pra fechar o pedido.</p>
        <Link to="/produtos" className="btn btn-primary">Ver produtos</Link>
      </section>
    );
  }

  return (
    <section className="carrinho container">
      <h1>Seu carrinho</h1>

      <div className="carrinho-conteudo">
        <ul className="carrinho-lista">
          {itens.map((item) => (
            <li key={item.id} className="carrinho-item">
              <img src={item.imagem} alt={item.nome} />

              <div className="carrinho-item-info">
                <span className="carrinho-item-categoria">{item.categoria}</span>
                <h3>{item.nome}</h3>
                <span className="price">{formatarPreco(item.preco)}</span>
              </div>

              <div className="carrinho-item-quantidade">
                <button onClick={() => alterarQuantidade(item.id, item.quantidade - 1)}>−</button>
                <span>{item.quantidade}</span>
                <button onClick={() => alterarQuantidade(item.id, item.quantidade + 1)}>+</button>
              </div>

              <span className="carrinho-item-subtotal price">
                {formatarPreco(item.preco * item.quantidade)}
              </span>

              <button
                className="carrinho-item-remover"
                onClick={() => removerItem(item.id)}
                aria-label="Remover item"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>

        <aside className="carrinho-resumo corte">
          <h2>Resumo</h2>
          <div className="carrinho-resumo-linha">
            <span>Subtotal</span>
            <span className="price">{formatarPreco(total)}</span>
          </div>
          <div className="carrinho-resumo-linha">
            <span>Frete</span>
            <span>Grátis</span>
          </div>
          <div className="carrinho-resumo-total">
            <span>Total</span>
            <span className="price">{formatarPreco(total)}</span>
          </div>
          <button className="btn btn-primary carrinho-finalizar">Finalizar compra</button>
        </aside>
      </div>
    </section>
  );
}

export default Carrinho;