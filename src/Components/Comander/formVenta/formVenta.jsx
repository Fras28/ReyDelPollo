import React, { useState } from 'react';
import "./formVenta.css";



const FormularioVenta = () => {
  const [totalVenta, setTotalVenta] = useState('');
  const [metodoPago, setMetodoPago] = useState('');
  const [nombreCajero, setNombreCajero] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar cualquier lógica adicional con los datos del formulario
    console.log('Total de la venta:', totalVenta);
    console.log('Método de pago:', metodoPago);
    console.log('Nombre del cajero/a:', nombreCajero);
    // Puedes enviar los datos a una API, guardarlos en el estado global, etc.
  };

  return (
    <form onSubmit={handleSubmit} className='Formix' >
      <div >
        <label htmlFor="totalVenta">Total de la venta:</label>
        <input
          type="number"
          id="totalVenta"
          value={totalVenta}
          onChange={(e) => setTotalVenta(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="metodoPago">Método de pago:</label>
        <select
          id="metodoPago"
          value={metodoPago}
          onChange={(e) => setMetodoPago(e.target.value)}
          required
        >
          <option value="">Seleccionar método de pago</option>
          <option value="Tarjeta">Tarjeta</option>
          <option value="Qr">Qr</option>
          <option value="Cuenta DNI">Cuenta DNI</option>
          <option value="MercadoPago">MercadoPago</option>
          <option value="Modo">Modo</option>
          <option value="Efectivo">Efectivo</option>
          <option value="Otros">Otros</option>
        </select>
      </div>
      <div>
        <label htmlFor="nombreCajero">Nombre del cajero/a:</label>
        <input
          type="text"
          id="nombreCajero"
          value={nombreCajero}
          onChange={(e) => setNombreCajero(e.target.value)}
          required
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioVenta;
