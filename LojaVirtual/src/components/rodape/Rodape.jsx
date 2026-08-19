import { Link } from "react-router";
import "./Rodape.css";

function Rodape() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="rodape">
      <div className="container rodape-grid">
        <div className="rodape-marca">
          <span className="rodape-logo">SPORT<span>ZONE</span></span>
          <p>Equipamento esportivo de alta performance para quem treina sério.</p>
        </div>

        <div className="rodape-coluna">
          <h4>Navegação</h4>
          <Link to="/">Início</Link>
          <Link to="/produtos">Produtos</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/login">Login</Link>
        </div>

        <div className="rodape-coluna">
          <h4>Ajuda</h4>
          <a href="#">Trocas e devoluções</a>
          <a href="#">Formas de pagamento</a>
          <a href="#">Rastrear pedido</a>
          <a href="#">Fale conosco</a>
        </div>

        <div className="rodape-coluna">
          <h4>Receba novidades</h4>
          <p>Promoções e lançamentos direto no seu e-mail.</p>
          <form className="rodape-newsletter" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Seu e-mail" required />
            <button type="submit" className="btn btn-primary">Assinar</button>
          </form>
        </div>
      </div>

      <div className="rodape-base container">
        <span>© {anoAtual} SportZone. Todos os direitos reservados.</span>
        <div className="rodape-social">
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="TikTok">TT</a>
          <a href="#" aria-label="YouTube">YT</a>
        </div>
      </div>
    </footer>
  );
}

export default Rodape;