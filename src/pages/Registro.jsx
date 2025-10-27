import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styleRegistro.css';

function Registro() {
    
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [city, setCity] = useState('');
  const [edad, setEdad] = useState('');
  const [instrumento, setInstrumento] = useState('');

  const [errorUsername, setErrorUsername] = useState('');
  const [errorPassword2, setErrorPassword2] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorCity, setErrorCity] = useState('');
  const [errorEdad, setErrorEdad] = useState('');
  const [errorInstrumento, setErrorInstrumento] = useState('');

  const clearErrors = () => {
    setErrorUsername('');
    setErrorPassword2('');
    setErrorEmail('');
    setErrorCity('');
    setErrorEdad('');
    setErrorInstrumento('');
  };

  const resetForm = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setPassword2('');
    setCity('');
    setEdad('');
    setInstrumento('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    clearErrors();
    let isValid = true;

    if (username.length < 5) {
      setErrorUsername("El usuario debe contener al menos 5 caracteres");
      isValid = false;
    }

    if (!password || !password2) {
      setErrorPassword2("La contraseña no puede estar vacía");
      isValid = false;
    } else if (password !== password2) {
      setErrorPassword2("Las contraseñas no coinciden");
      isValid = false;
    }

    if (!email.includes('@') || !email.includes('.com')) {
      setErrorEmail("El correo electrónico no es válido");
      isValid = false;
    }

    const edadNum = parseInt(edad);
    if (isNaN(edadNum) || edadNum < 18) {
      setErrorEdad("La edad debe ser mayor de 18 años");
      isValid = false;
    }

    if (!city) {
      setErrorCity("Selecciona una ciudad");
      isValid = false;
    }

    if (!instrumento) {
      setErrorInstrumento("Selecciona un instrumento");
      isValid = false;
    }

    if (isValid) {
      let usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};

      if (usuarios[username]) {
        setErrorUsername("El nombre de usuario ya está registrado");
        return;
      }

      usuarios[username] = {
        username,
        email,
        password,
        city,
        edad: edadNum,
        instrumento,
      };

      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      alert('¡Registro exitoso!');
      resetForm();
    }
  };

  return (
<div className="registro-page">
      <div className="registro-container">
        <form id="myForm" onSubmit={handleSubmit}>
          <label htmlFor="username">Usuario:</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          {errorUsername && <span className="error">{errorUsername}</span>}

          <label htmlFor="password">Contraseña:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />

          <label htmlFor="password2">Repite tu contraseña:</label>
          <input 
            type="password" 
            id="password2" 
            value={password2} 
            onChange={(e) => setPassword2(e.target.value)} 
          />
          {errorPassword2 && <span className="error">{errorPassword2}</span>}

          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          {errorEmail && <span className="error">{errorEmail}</span>}

          <label htmlFor="city">Ciudad:</label>
          <select id="city" value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="">Selecciona una ciudad</option>
            <option value="Santiago">Santiago</option>
            <option value="Valparaíso">Valparaíso</option>
            <option value="Concepción">Concepción</option>
            <option value="Antofagasta">Antofagasta</option>
          </select>
          {errorCity && <span className="error">{errorCity}</span>}

          <label htmlFor="edad">Edad:</label>
          <input 
            type="number" 
            id="edad" 
            value={edad} 
            onChange={(e) => setEdad(e.target.value)} 
          />
          {errorEdad && <span className="error">{errorEdad}</span>}

          <label htmlFor="instrumento">Instrumento:</label>
          <select 
            id="instrumento" 
            value={instrumento} 
            onChange={(e) => setInstrumento(e.target.value)}
          >
            <option value="">Selecciona un instrumento</option>
            <option value="guitarra">Guitarra</option>
            <option value="bajo">Bajo</option>
            <option value="batería">Batería</option>
            <option value="teclado">Teclado</option>
            <option value="voz">Voz</option>
            <option value="otro">Otro</option>
          </select>
          {errorInstrumento && <span className="error">{errorInstrumento}</span>}

          <button type="submit">Registrarse</button>

          <span className="cuenta-label">¿Ya tienes una cuenta?</span>
          <Link to="/login">
            <button type="button">Iniciar sesión</button>
          </Link>

          <Link to="/">
            <button type="button">Volver al inicio</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Registro;


