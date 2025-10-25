// ArtistasDestacados.jsx
import React from "react";
import "../styles/artistasDestacados.css";

export default function ArtistasDestacados({ artistas, titulo = "Artistas Destacados" }) {
  return (
    <section className="destacados">
      <h2 className="tituloArtistas">{titulo}</h2>
      <div className="cards-container">
        {artistas.map((artista) => (
          <div className="card" key={artista.id}>
            <img src={artista.image} alt={artista.nombre} className="card-img"/>
            <h3>{artista.nombre}</h3>
            <p className="descripcionArtista">{artista.descripcion}</p>
            <button>Ver más</button>
          </div>
        ))}
      </div>
    </section>
  );
}
