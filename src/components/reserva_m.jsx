import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export function ReservaM() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    pelicula: '',
    cantidad: 1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCantidadClick = (num) => {
    setFormData((prev) => ({ ...prev, cantidad: num }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`🎉 ¡Reserva Confirmada!
Nombre: ${formData.nombre}
Email: ${formData.email}
Película: "${formData.pelicula}"
Boletos: ${formData.cantidad}
🍿 ¡Disfruta la función!`);
    setFormData({
      nombre: '',
      email: '',
      pelicula: '',
      cantidad: 1,
    });
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row shadow-lg rounded-4 overflow-hidden" style={{ maxWidth: '1000px', width: '100%' }}>
        {/* Sección izquierda: mensaje de bienvenida */}
        <div
          className="col-md-6 d-flex flex-column justify-content-center p-5 text-white"
          style={{ backgroundColor: '#0077b6' }}
        >
          <h2 className="mb-3 fw-bold" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
              ¡Bienvenido a CINEDAT!
          </h2>
          <p className="fs-5">
            📣 Disfruta la magia del cine con <strong>la mejor atención</strong> y una experiencia única.
          </p>
          <p className="fs-6">
            ✨ Sonido envolvente, butacas cómodas y un ambiente acogedor te esperan. ¡Prepárate para una noche
            inolvidable!
          </p>
        </div>

        {/* Sección derecha: formulario */}
        <div className="col-md-6 p-5 bg-white text-dark">
          <h4 className="mb-4 text-primary fw-bold">🎟️ Reserva tus entradas</h4>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">🧑 Nombre</label>
              <input
                type="text"
                className="form-control"
                name="nombre"
                placeholder="Tu nombre completo"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">📧 Correo</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="ejemplo@correo.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">🎞️ Película</label>
              <select
                className="form-select"
                name="pelicula"
                value={formData.pelicula}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona una película</option>
                <option value="Avengers: Endgame">Avengers: Endgame</option>
                <option value="Interstellar">Interstellar</option>
                <option value="El Padrino">El Padrino</option>
                <option value="Dune: Parte Dos">Dune: Parte Dos</option>
                <option value="Spider-Man: Across the Spider-Verse">
                  Spider-Man: Across the Spider-Verse
                </option>
              </select>
            </div>

            <div className="mb-4">
              <label className="form-label">🎟️ Boletos</label>
              <div>
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => handleCantidadClick(num)}
                    className={`btn btn-sm btn-${formData.cantidad === num ? 'primary' : 'outline-primary'} mx-1`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-primary w-50 me-2 fw-bold">
                ✅ Confirmar
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary w-50 fw-bold"
                onClick={() =>
                  setFormData({
                    nombre: '',
                    email: '',
                    pelicula: '',
                    cantidad: 1,
                  })
                }
              >
                ❌ Limpiar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}