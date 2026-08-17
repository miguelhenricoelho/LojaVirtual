import React from 'react';
import './Rodape.css';

function Rodape() {
  return (
    <footer className="rodape-container">
      <div className="rodape-conteudo">
        <div className="rodape-secao">
          <h3>Loja Esportiva</h3>
          <p>Seu corpo em movimento.</p>
        </div>
        <div className="rodape-secao">
          <h3>Links Úteis</h3>
          <ul>
            <li>Políticas de Troca</li>
            <li>Trabalhe Conosco</li>
            <li>Fale Conosco</li>
          </ul>
        </div>
        <div className="rodape-secao">
          <h3>Atendimento</h3>
          <p>suporte@lojaesportiva.com</p>
          <p>(11) 99999-9999</p>
        </div>
      </div>
      <div className="rodape-direitos">
        <p>&copy; {new Date().getFullYear()} Loja Esportiva. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Rodape;
