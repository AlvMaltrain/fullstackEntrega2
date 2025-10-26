import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SidebarBuscarArtistas from "../components/SideBarBuscarArtistas";
import ArtistasDestacados from "../components/ArtistasDestacados";
import { buscarArtistas } from "../data/data"; //
import "../styles/buscarBandas.css"; // 
import React from "react";
import "../styles/buscarArtistas.css";



export default function BuscarArtistas() {
  // Estado de filtros (inputs del usuario)
  const [filtros, setFiltros] = useState({
    nombre: "",
    instrumento: "",
    ciudad: "",
    descripcion: "",
  });

  // Estado de resultado filtrado
  const [artistasFiltrados, setArtistasFiltrados] = useState([]);

  // Mostrar todos los artistas al cargar
  useEffect(() => {
    setArtistasFiltrados(buscarArtistas);
  }, []);

  // Filtrar por nombre, instrumento, ciudad y descripcion
  const aplicarFiltro = () => {
    const norm = (s) => s?.toString().trim().toLowerCase();

    const filtradas = buscarArtistas.filter((artista) => {
      const nombreMatch =
        !filtros.nombre || norm(artista.nombre).includes(norm(filtros.nombre));

      const instrumentoMatch =
        !filtros.instrumento ||
        norm(artista.instrumento).includes(norm(filtros.instrumento));

      const ciudadMatch =
        !filtros.ciudad || norm(artista.ciudad).includes(norm(filtros.ciudad));

      return (
        nombreMatch && instrumentoMatch && ciudadMatch
      );
    });

    setArtistasFiltrados(filtradas);
  };

  return (
    <div className="app-container">
      <Navbar />

      {/* Sidebar con filtros */}
      <SidebarBuscarArtistas
        filtros={filtros}
        setFiltros={setFiltros}
        aplicarFiltro={aplicarFiltro}
      />

      {/* Resultados */}
      {artistasFiltrados.length > 0 ? (
        <ArtistasDestacados
          artistas={artistasFiltrados}
          titulo="Artistas Encontrados"
          layout="horizontal"
        />
      ) : (
        <p>No se han aplicado filtros o no hay resultados</p>
      )}

      <Footer />
    </div>
  );
}
