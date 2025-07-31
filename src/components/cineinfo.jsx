import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export function CineInfo() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
        </div>
        <div className="col-md-6">
          <h2 className="mb-3">🎥 Sobre Nosotros</h2>
          <p style={{ textAlign: 'justify' }}>
            <strong>CineDat</strong> fue fundado en el corazón de Lima en el año <strong>2002</strong> con una visión clara: ofrecer experiencias cinematográficas de clase mundial.
          </p>
          <p style={{ textAlign: 'justify' }}>
            Lo que comenzó como una sola sala con proyección tradicional, hoy se ha convertido en un complejo con tecnología <strong>4D</strong>, pantallas <strong>IMAX</strong> y un menú gourmet que complementa cada función.
          </p>
          <p style={{ textAlign: 'justify' }}>
            Nuestro compromiso siempre ha sido brindar <em>emoción, comodidad y calidad</em> a cada espectador. Más que una función, <strong>somos parte de tus recuerdos</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}