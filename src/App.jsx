import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BuscarBandas from "./pages/BuscarBandas";
import Login from "./pages/Login";
import Registro from "./pages/Registro";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/buscar-bandas" element={<BuscarBandas/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/registro" element={<Registro/>} />
      </Routes>
    </BrowserRouter>
  );
  }

export default App
