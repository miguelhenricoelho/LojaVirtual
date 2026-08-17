import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>{isLogin ? 'Entrar na Loja' : 'Criar Conta Esportiva'}</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <div className="input-group">
              <label>Nome Completo</label>
              <input type="text" placeholder="Seu nome" required />
            </div>
          )}
          <div className="input-group">
            <label>E-mail</label>
            <input type="email" placeholder="seu-email@email.com" required />
          </div>
          <div className="input-group">
            <label>Senha</label>
            <input type="password" placeholder="Sua senha" required />
          </div>
          <button type="submit" className="btn-enviar">
            {isLogin ? 'Acessar Conta' : 'Cadastrar'}
          </button>
        </form>
        <p className="alternar-autenticacao" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Não tem conta? Cadastre-se aqui' : 'Já tem conta? Faça o Login'}
        </p>
      </div>
    </div>
  );
}

export default Login;

