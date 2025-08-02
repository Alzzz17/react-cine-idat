import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className="container-fluid py-5 px-3" style={{ backgroundColor: '#f0f8ff' }}>
      <div className="text-center mb-5">
        <h2
          className="fw-bold text-primary"
          style={{ fontFamily: "'Cinzel Decorative', serif" }}
        >
           Menú del Cine
        </h2>
        <p className="text-secondary">¡Disfruta tus snacks favoritos durante la función!</p>
      </div>

      <div className="row justify-content-center">
        {productos.map((item, idx) => (
          <div key={idx} className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div
              className="card h-100 text-center border-0 shadow-sm"
              style={{ backgroundColor: '#ffffff', borderRadius: '16px' }}
            >
              <div className="card-body d-flex flex-column justify-content-between">
                <i
                  className={`bi ${item.icono} text-info`}
                  style={{ fontSize: '2.5rem' }}
                ></i>
                <h5 className="card-title mt-3 text-dark fw-semibold">{item.nombre}</h5>
                <p className="card-text text-muted small">{item.descripcion}</p>
                <span className="badge bg-primary fs-6">{item.precio}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}