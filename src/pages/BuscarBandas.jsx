import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SidebarBuscarBandas from "../components/SidebarBuscarBandas";
import BandasDestacadas from "../components/BandasDestacadas";
import { Bandas, buscarBandas } from "../data/data";
import "../styles/buscarBandas.css";

export default function BuscarBandas() {
  //  Estado de filtros (valores escritos por el usuario)
  const [filtros, setFiltros] = useState({ ciudad: "", estilo: "" });

  //  Estado de las bandas filtradas (resultado del filtro)
  const [bandasFiltradas, setBandasFiltradas] = useState([]);

    // Mostrar todas las bandas al cargar por primera vez
  useEffect(() => {
    setBandasFiltradas(buscarBandas);
  }, []);

  // Función que se ejecuta al presionar el botón "Filtrar"
  const aplicarFiltro = () => {
    const filtradas = buscarBandas.filter((banda) => {
      const ciudadMatch =
        !filtros.ciudad ||
        banda.ciudad.toLowerCase().includes(filtros.ciudad.trim().toLowerCase());
      const estiloMatch =
        !filtros.estilo ||
        banda.estilo.toLowerCase().includes(filtros.estilo.trim().toLowerCase());

      return ciudadMatch && estiloMatch;
    });

    //  Guardamos el resultado filtrado
    setBandasFiltradas(filtradas);
  };

  return (
    <div className="app-container">
      <Navbar />
      <h1>Página Buscar Bandas</h1>

      {/* Sidebar con filtros */}
      <SidebarBuscarBandas
        filtros={filtros}
        setFiltros={setFiltros}
        aplicarFiltro={aplicarFiltro}
      />

      {/*  Mostrar resultados */}
      {bandasFiltradas.length > 0 ? (
        <BandasDestacadas
          bandas={bandasFiltradas}
          titulo="Bandas Encontradas"
          layout="horizontal"
        />
      ) : (      
          <p>No se han aplicado filtros o no hay resultados</p>   
      )}

      <Footer />
    </div>
  );
}
