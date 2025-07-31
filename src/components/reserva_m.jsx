import React, { useState } from 'react';

export function ReservaM() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    pelicula: '',
    cantidad: 1
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`🎟️ Reserva realizada para ${formData.nombre}, ${formData.cantidad} boleto(s) para "${formData.pelicula}".`);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg border-0">
        <div className="card-header bg-dark text-white text-center">
          <h3 className="mb-0">🎬 Reserva tu Entrada</h3>
        </div>
        <div className="card-body p-4 bg-light">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-person-fill"></i></span>
                <input 
                  type="text" 
                  className="form-control" 
                  name="nombre" 
                  value={formData.nombre} 
                  onChange={handleChange} 
                  required 
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-envelope-fill"></i></span>
                <input 
                  type="email" 
                  className="form-control" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Película</label>
              <select 
                className="form-select" 
                name="pelicula" 
                value={formData.pelicula} 
                onChange={handleChange} 
                required
              >
                <option value="">🎥 Selecciona una película</option>
                <option value="Avengers: Endgame">Avengers: Endgame</option>
                <option value="Interstellar">Interstellar</option>
                <option value="El Padrino">El Padrino</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="form-label">Cantidad de Boletos</label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-ticket-perforated-fill"></i></span>
                <input 
                  type="number" 
                  className="form-control" 
                  name="cantidad" 
                  min="1" 
                  value={formData.cantidad} 
                  onChange={handleChange} 
                  required 
                />
              </div>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-lg shadow">
                <i className="bi bi-check-circle me-2"></i>Confirmar Reserva
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}