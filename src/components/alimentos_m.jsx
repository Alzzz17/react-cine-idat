import React from 'react';

const productos = [
  {
    nombre: "Combo Clásico",
    descripcion: "Popcorn grande + bebida mediana",
    precio: "S/7.50",
    icono: "bi-cup-straw"
  },
  {
    nombre: "Nachos con Queso",
    descripcion: "Nachos calientes con salsa de queso",
    precio: "S/5.00",
    icono: "bi-box-seam"
  },
  {
    nombre: "Hot Dog",
    descripcion: "Pan caliente con salchicha, ketchup y mostaza",
    precio: "S/4.50",
    icono: "bi-egg-fried"
  },
  {
    nombre: "Bebida Grande",
    descripcion: "Coca-Cola, Sprite o Fanta",
    precio: "S/3.00",
    icono: "bi-cup"
  },
  {
    nombre: "Combo Pareja",
    descripcion: "2 popcorn medianos + 2 bebidas grandes",
    precio: "S/10.00",
    icono: "bi-heart-fill"
  },
  {
    nombre: "Palomitas Dulces",
    descripcion: "Popcorn con caramelo",
    precio: "S/3.50",
    icono: "bi-bag-fill"
  }
];

export function ComidaCine() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">🍿 Menú de Alimentos</h2>
      <div className="row">
        {productos.map((item, idx) => (
          <div key={idx} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center">
                <i className={`bi ${item.icono} display-4 text-primary mb-3`}></i>
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text text-muted">{item.descripcion}</p>
                <span className="badge bg-success fs-6">{item.precio}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}