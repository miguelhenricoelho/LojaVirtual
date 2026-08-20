import { Link } from "react-router";
import "./NaoEncontrado.css";

function NaoEncontrado() {
  return (
    <section className="nf">
      <span className="nf-code">404</span>
      <h1 className="nf-title">Fora de campo</h1>
      <p className="nf-text">Essa página não existe ou já saiu do time.</p>
      <Link to="/" className="btn btn-primary">Voltar ao início</Link>
    </section>
  );
}

export default NaoEncontrado;