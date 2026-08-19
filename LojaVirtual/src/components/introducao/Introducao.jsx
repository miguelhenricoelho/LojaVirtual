import { Link } from "react-router";
import "./Introducao.css";

function Introducao() {
  return (
    <section className="intro">
      <div
        className="intro-bg"
        style={{ backgroundImage: "url(https://loremflickr.com/1600/900/soccer,action)" }}
      />
      <div className="intro-overlay" />

      <div className="container intro-content">
        <span className="eyebrow">Temporada 2026</span>
        <h1 className="intro-title">
          Jogue no seu <span>melhor nível</span>
        </h1>
        <p className="intro-text">
          Equipamento de alta performance pra quem não joga pra perder.
          Do campo à quadra, da pista à academia.
        </p>

        <div className="intro-actions">
          <Link to="/produtos" className="btn btn-primary">Ver produtos</Link>
          <Link to="/sobre" className="btn btn-outline">Conhecer a loja</Link>
        </div>

        <div className="intro-stats">
          <div><strong>10K+</strong><span>Atletas atendidos</span></div>
          <div><strong>500+</strong><span>Produtos no catálogo</span></div>
          <div><strong>4.8</strong><span>Avaliação média</span></div>
        </div>
      </div>
    </section>
  );
}

export default Introducao;