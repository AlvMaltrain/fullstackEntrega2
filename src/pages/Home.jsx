import Navbar from "../components/Navbar";
import "../styles/hero.css"
import Destacados from "../components/Destacados";

export default function Home() {
  return (
    /*Hero, botones de inicio de sesión y registro*/
    <>
      <Navbar />
      <section className="hero-container">
        <div className ="hero-content">
        <p className="hero-text">
          ¡Conecta con músicos de tu zona <br /> y forma tu próxima banda!<br />
        </p>
        <p className="hero-text2">
          JamTogether es la comunidad que conecta a guitarristas, vocalistas<br />
          y todo tipo de músicos que quieren formar proyectos reales.<br />
          Filtra por estilo, ciudad o instrumento y encuentra tu banda.<br />
        </p>
        <div className="botonera">
          <button className="btn" onClick={() => window.location.href = '/registro'}>
            Regístrate aquí
          </button>
          <button className="btn-2" onClick={() => window.location.href = '/login'}>
            Iniciar Sesión
          </button>
        </div>
        </div>
      </section>

      <Destacados />
    </>
  );
}
