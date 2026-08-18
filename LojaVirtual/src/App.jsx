import { Routes, Route } from "react-router";


import Navbar from "./components/navbar/Navbar";
import Rodape from "./components/rodape/Rodape";
import Home from "./components/home/Home";
import Produtos from "./components/produtos/Produtos";
import Sobre from "./components/sobre/Sobre";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Barra de navegação fixa no topo */}
      <Navbar /> 
      
      {/* Área dinâmica que renderiza as páginas da loja */}
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      
      {/* Rodapé fixado na parte inferior */}
      <Rodape />
    </div>
  );
}

export default App;
