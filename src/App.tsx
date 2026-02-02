import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomeAnt from "./pages/HomeAnt";
import ListadoAnt from "./pages/ListadoAnt";
import EstadisticasAnt from "./pages/EstadisticasAnt";
import CalculoAnt from "./pages/CalculoAnt";
import InformacionAnt from "./pages/InformacionAnt";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <header className="topbar">
          <div className="topbar__brand">Simpsons - Personajes</div>
          <nav className="topbar__nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/listado">Listado</NavLink>
            <NavLink to="/estadisticas">Estadísticas</NavLink>
            <NavLink to="/calculo">Cálculo</NavLink>
            <NavLink to="/informacion">Información</NavLink>
          </nav>
        </header>

        <main className="container">
          <Routes>
            <Route path="/" element={<HomeAnt />} />
            <Route path="/listado" element={<ListadoAnt />} />
            <Route path="/estadisticas" element={<EstadisticasAnt />} />
            <Route path="/calculo" element={<CalculoAnt />} />
            <Route path="/informacion" element={<InformacionAnt />} />
          </Routes>
        </main>

        <footer className="footer">© 2025 - Taller Académico</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
