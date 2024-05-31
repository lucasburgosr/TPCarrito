import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import './components/NavBar.css';
import DondeEstamos from './components/DondeEstamos/DondeEstamos';
import Instrumento from './components/Instrumento/instrumento';
import Detalle from './components/Detalle/Detalle';
import Editar from './components/Editar/Editar';
import AñadirInstrumento from './components/AñadirInstrumento/AñadirInstrumento';
import Home from './components/Home/Home';
import Carrito from './components/Carrito/Carrito';
import Login from './components/Login/Login'
import ProtectedRoute from './components/ProtectedRoute';
import './components/Carrito/Carrito.css';
import './App.css';
import React from 'react';

function App() {
  const [carrito, setCarrito] = useState([]);
  const [carritoVisible, setCarritoVisible] = useState(false);

  const toggleCarrito = () => {
    setCarritoVisible(!carritoVisible);
  };

  return (
    <Router>
      <div className="app-container">
        <NavBar toggleCarrito={toggleCarrito} carritoVisible={carritoVisible} />
        <div className={`content-container ${carritoVisible ? 'with-carrito' : ''}`}>
          <Routes>
          <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/DondeEstamos" element={<DondeEstamos />} />
            <Route path="/Instrumentos" element={<Instrumento carrito={carrito} setCarrito={setCarrito} />} />
            <Route path="/Detalle/:id" element={<Detalle />} />
           
              <Route path="/Editar/:id" element={<Editar />} />
              <Route path="/Añadir" element={<AñadirInstrumento />} />
            </Route>
          </Routes>
        </div>
        {carritoVisible && (
          <div className="carrito-container">
            <Carrito carrito={carrito} setCarrito={setCarrito} toggleCarrito={toggleCarrito} />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
