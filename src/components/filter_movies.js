import { CardFilter } from "./utils/card_filter";
import { BtnFilter } from "./utils/btn_filter";
import "../styles/Card.css";

export function FilterMovies() {
  const listPeliculas = [
    { value: "1", label: "Avengers: Endgame" },
    { value: "2", label: "Dune: Parte Dos" },
    { value: "3", label: "Spider-Man: Across the Spider-Verse" },
  ];

  const listCiudades = [
    { value: "1", label: "Lima" },
    { value: "2", label: "Cusco" },
    { value: "3", label: "Arequipa" },
  ];

  const listCines = [
    { value: "1", label: "Cinemark Jockey" },
    { value: "2", label: "Cineplanet San Miguel" },
    { value: "3", label: "CineStar Centro" },
  ];

  const listFechas = [
    { value: "1", label: "Hoy" },
    { value: "2", label: "Mañana" },
    { value: "3", label: "Este fin de semana" },
  ];

  return (
    <div className="container-fluid bg-primary text-white py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
          Encuentra tu película favorita
        </h2>

        <div className="d-flex flex-wrap justify-content-center gap-4">
          <CardFilter
            id="movies"
            title="🎞️ Por Película"
            question="¿Qué deseas ver?"
            options={listPeliculas}
          />
          <CardFilter
            id="city"
            title="📍 Por Ciudad"
            question="¿En dónde?"
            options={listCiudades}
          />
          <CardFilter
            id="cede"
            title="🏢 Por Cine"
            question="¿En qué cine?"
            options={listCines}
          />
          <CardFilter
            id="date"
            title="📅 Por Fecha"
            question="¿Cuándo?"
            options={listFechas}
          />
        </div>

        <div className="text-center mt-4">
          <BtnFilter />
        </div>
      </div>
    </div>
  );
}