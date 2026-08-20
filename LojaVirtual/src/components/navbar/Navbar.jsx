import { useState } from "react";
import { NavLink, Link } from "react-router";
import { useCarrinho } from "../../context/CarrinhoContext";
import "./Navbar.css";

function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);
  const { quantidadeTotal } = useCarrinho();

  function fecharMenu() {
    setMenuAberto(false);
  }

  const linkClasse = ({ isActive }) => (isActive ? "ativo" : "");

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <Link to="/" className="navbar-logo" onClick={fecharMenu}>
          SPORT<span>ZONE</span>
        </Link>

        <nav className={`navbar-links ${menuAberto ? "aberto" : ""}`}>
          <NavLink to="/" end onClick={fecharMenu} className={linkClasse}>Início</NavLink>
          <NavLink to="/produtos" onClick={fecharMenu} className={linkClasse}>Produtos</NavLink>
          <NavLink to="/sobre" onClick={fecharMenu} className={linkClasse}>Sobre</NavLink>
          <NavLink to="/login" onClick={fecharMenu} className={linkClasse}>Login</NavLink>
        </nav>

        <div className="navbar-actions">
          <Link to="/carrinho" className="navbar-carrinho" onClick={fecharMenu} aria-label="Carrinho">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {quantidadeTotal > 0 && <span className="navbar-carrinho-badge">{quantidadeTotal}</span>}
          </Link>

          <button
            className={`navbar-toggle ${menuAberto ? "aberto" : ""}`}
            onClick={() => setMenuAberto(!menuAberto)}
            aria-label="Abrir menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;