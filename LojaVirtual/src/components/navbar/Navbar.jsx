import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <Link to="/">SPORT<span>ZONE</span></Link>
      </div>
      
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/produtos">Produtos</Link></li>
        <li><Link to="/sobre">Sobre Nós</Link></li>
      </ul>

      <div className="navbar-acoes">
        <Link to="/login" className="btn-navbar-login">Minha Conta</Link>
        <div className="carrinho-icone">
          🛒 <span className="carrinho-contador">2</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
