import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Detalle.css'; // Importa el archivo de estilos CSS

const Detalle = () => {
    const { id } = useParams();
    const [instrumento, setInstrumento] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8080/instrumentos/${id}`)
            .then((response) => response.json()) 
            .then((instrumento) => setInstrumento(instrumento));
    }, [id]);

    return (
        <div className="detalle-container">
            <div className="imagen-container">
                <img src={`/img/${instrumento.imagen}`} alt={instrumento.instrumento} />
                <p>Descripción:</p>
                <p>{instrumento.descripcion}</p>
            </div>
            
            <div className="informacion-container">
                <div className="detalle-derecha">
                    <p className="small-text">Cantidad vendidos: {instrumento.cantidad_vendida}</p>
                    <h2 className="big-bold-text">{instrumento.instrumento}</h2>
                    <h1 className="big-text">Precio: {instrumento.precio}$</h1>
                    <p className="medium-text">Marca: {instrumento.marca}</p>
                    <p className="medium-text">Modelo: {instrumento.modelo}</p>
                    <p>Costo Envio:</p>
                    {instrumento.costo_envio == "G" ? (
              <p style={{ color: 'green', fontSize: '26px' }}>🚚 Envío Gratis</p>
            ) : (
              <p style={{ color: 'red', fontSize: '26px' }}>
               🚚 El costo de envio es de: {instrumento.costo_envio}
              </p>
            )}
                </div>
            </div>
            <button className="agregar-carrito-btn">Agregar al carrito</button>
        </div>
    );
};

export default Detalle;
