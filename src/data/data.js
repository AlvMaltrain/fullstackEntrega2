import bajistaMujer from "../assets/homeIMG/bajistamujer.jpg"
import tecladista from "../assets/homeIMG/tecladista.jpg"
import vocalista from "../assets/homeIMG/vocalistamujer.jpg"
import baterista from "../assets/homeIMG/baterista.jpg"
import bajista from "../assets/homeIMG/mike.jpg"
import guitarrista from "../assets/homeIMG/guitarrista.jpg"

import gatosPlomos from "../assets/homeIMG/bandaRockCard3.webp"
import careFiebre from "../assets/homeIMG/bandaPsicodelica.jpg"
import oldSpice from "../assets/homeIMG/bandaJazz.jpg"
import siegen from "../assets/homeIMG/bandaHeavyMetal.jpg"
import netter from "../assets/homeIMG/bandaFunk.jpg"
import britFloyd from "../assets/homeIMG/bandaRockCard5.webp"

export const Artistas = [
    {id:1,nombre:"Giancarlo Stanton",instrumento:"Guitarra",ocupacion: "Guitarrista", ciudad: "El Tabo",descripcion:"Apasionado guitarrista de El Tabo, con estilo versátil y gran energía en el escenario. Busca compartir su talento y crear nuevos proyectos musicales." ,image: guitarrista},
    {id:2, nombre:"Mike Trout", instrumento:"Bajo", ocupacion: "Bajista", ciudad: "Cobquecura", descripcion: "Bajista originario de Cobquecura, con un sonido sólido y rítmico que da fuerza a cada presentación. Destacado por su creatividad y compromiso musical.",image: bajista},
    {id:3, nombre:"Mookie Betts", instrumento:"Batería", ocupacion: "Baterista", ciudad: "Puerto Montt",descripcion:"Baterista de Puerto Montt, apasionado por marcar el pulso y la energía en cada interpretación. Su estilo combina técnica, dinamismo.",image: baterista},
    {id:4, nombre:"Ashley Young", instrumento:"Voz", ocupacion: "Vocalista", ciudad: "San Antonio",descripcion:"Vocalista de San Antonio, destaca por su voz potente y versátil. Su carisma en el escenario la convierte en el alma de cada banda.",image: vocalista},
    {id:5, nombre:"Pedro Porro", instrumento:"Teclado", ocupacion: "Tecladista", ciudad: "Chiloé", descripcion:"Tecladista proveniente de Chiloé, combina creatividad y técnica. Su estilo versátil enriquece los arreglos musicales de las bandas en las que participa.", image: tecladista},
    {id:6, nombre:"Sofía Ramos", instrumento:"Bajo", ocupacion:"Bajista", ciudad: "Arica", descripcion:"Bajista oriunda de Arica, aporta solidez rítmica y groove. Su energía en el escenario y pasión por la música la han convertido en una artista destacada.",image: bajistaMujer}
]


export const Bandas = [
    { id:1, nombre:"Gatos Plomos", ciudad: "Santiago", estilo:"Rock Alternativo", image: gatosPlomos},
    { id:2, nombre:"Care'Fiebre", ciudad: "Valparaiso", estilo:"Rock Psicodélico", image:careFiebre },
    { id:3, nombre:"Old Spice", ciudad: "Antofagasta", estilo:"Jazz", image: oldSpice },
    { id:4, nombre:"Siegen", ciudad: "Coquimbo", estilo:"Heavy Metal", image:siegen },
    { id:5, nombre:"Netter", ciudad: "Calama", estilo:"Funk", image: netter},
    { id:6, nombre:"Brit Floyd", ciudad: "Algarrobo", estilo:"Rock Alternativo", image: britFloyd }
]