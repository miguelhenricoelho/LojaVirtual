import { Routes, Route } from "react-router";
import { CarrinhoProvider } from "./context/CarrinhoContext";

import Navbar from "./components/navbar/Navbar";
import Rodape from "./components/rodape/Rodape";
import Home from "./components/home/Home";
import Produtos from "./components/produtos/Produtos";
import Sobre from "./components/sobre/Sobre";
import Login from "./components/login/Login";
import Carrinho from "./components/carrinho/Carrinho";
import NaoEncontrado from "./components/naoencontrado/NaoEncontrado";

import "./App.css";

function App() {
  return (
    <CarrinhoProvider>
      <div className="app">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/login" element={<Login />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="*" element={<NaoEncontrado />} />
          </Routes>
        </main>
        <Rodape />
      </div>
    </CarrinhoProvider>
  );
}

export default App;