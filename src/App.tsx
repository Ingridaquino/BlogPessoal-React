import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./paginas/home/Home";
import { Navbar } from "./components/estaticos/navbar/Navbar";
import { Footer } from "./components/estaticos/footer/Footer";
import Login from "./paginas/login/Login";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import ListaTema from "./components/temas/listaTemas/ListaTema";
import ListaPostagem from "./components/postagens/listaPostagens/ListaPostagem";



function App() {
  return (
    <Router>
      <Navbar />

      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="/temas" element={<ListaTema />} />
          <Route path="/posts" element={<ListaPostagem />} />

          <Route
            path="*"
            element={
             <main className="no-found">
              <p>There's nothing here!</p>
              </main>
            }
          />

        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
