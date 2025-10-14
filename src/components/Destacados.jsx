import { Artistas, Bandas } from "../data/data.js";
import "../styles/Destacados.css";

export default function Destacados() {
  return (
    <section className="destacados">
        <h2> Artistas Destacados </h2>
        <div className="cards-container">
            {Artistas.map((artista) => (
                <div className="card" key={artista.id}>
                    <img src={artista.image} alt={artista.nombre} className="card-img"/>
                    <h3>{artista.nombre}</h3>
                    <p>{artista.descripcion}</p>
                    <button> Ver más</button>
                </div>
            ))}
        </div>

        <h2> Bandas Destacadas </h2>
        <div className="cards-container">
            {Bandas.map((banda) => (
                <div className="card" key={banda.id}>
                    <img src={banda.image} alt={banda.nombre} className="card-img"/>
                    <h3>{banda.nombre}</h3>
                    <p>{banda.estilo} - {banda.ciudad}</p>
                    <button> Ver más</button>
                </div>
            ))}
        </div>
    </section>
  );
}
