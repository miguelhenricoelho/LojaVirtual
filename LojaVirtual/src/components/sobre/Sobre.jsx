import "./Sobre.css";

function Sobre() {
  return (
    <section className="sobre container">
      <header className="sobre-header">
        <span className="eyebrow">Nossa história</span>
        <h1>Feita por quem <span>joga</span></h1>
      </header>

      <div className="sobre-conteudo">
        <img
          src="https://loremflickr.com/700/500/athletes,training"
          alt="Time de atletas treinando"
          className="sobre-imagem corte"
        />
        <div className="sobre-texto">
          <p>
            A SportZone nasceu em 2019 na quadra de um campus universitário, entre treinos
            e a dificuldade de achar equipamento bom sem pagar caro. Hoje reunimos marcas
            confiáveis e produtos testados em campo, quadra e pista pra equipar quem treina
            de verdade.
          </p>
          <p>
            Trabalhamos direto com atletas locais pra validar cada item do catálogo antes
            de colocar à venda — se não aguenta o treino, não entra na loja.
          </p>
        </div>
      </div>

      <div className="sobre-valores">
        <div className="valor">
          <span>⚡</span>
          <h4>Performance real</h4>
          <p>Testamos tudo antes de vender.</p>
        </div>
        <div className="valor">
          <span>💰</span>
          <h4>Preço justo</h4>
          <p>Sem intermediário inflando o valor.</p>
        </div>
        <div className="valor">
          <span>🤝</span>
          <h4>Comunidade</h4>
          <p>Apoiamos atletas e times amadores.</p>
        </div>
      </div>
    </section>
  );
}

export default Sobre;