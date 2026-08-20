import { useState } from "react";
import "./Login.css";

function Login() {
  const [modoCadastro, setModoCadastro] = useState(false);

  function handleSubmit(evento) {
    evento.preventDefault();
    // integração com backend de autenticação entra aqui depois
  }

  return (
    <section className="login-pagina">
      <div className="login-card corte">
        <span className="eyebrow">{modoCadastro ? "Novo por aqui" : "Bem-vindo de volta"}</span>
        <h1>{modoCadastro ? "Criar conta" : "Entrar"}</h1>

        <form className="login-form" onSubmit={handleSubmit}>
          {modoCadastro && (
            <label className="login-campo">
              <span>Nome completo</span>
              <input type="text" name="nome" placeholder="Seu nome" required />
            </label>
          )}

          <label className="login-campo">
            <span>E-mail</span>
            <input type="email" name="email" placeholder="voce@email.com" required />
          </label>

          <label className="login-campo">
            <span>Senha</span>
            <input type="password" name="senha" placeholder="••••••••" required />
          </label>

          <button type="submit" className="btn btn-primary login-btn">
            {modoCadastro ? "Criar conta" : "Entrar"}
          </button>
        </form>

        <p className="login-alternar">
          {modoCadastro ? "Já tem conta?" : "Ainda não tem conta?"}{" "}
          <button type="button" onClick={() => setModoCadastro(!modoCadastro)}>
            {modoCadastro ? "Entrar" : "Cadastre-se"}
          </button>
        </p>
      </div>
    </section>
  );
}

export default Login;
