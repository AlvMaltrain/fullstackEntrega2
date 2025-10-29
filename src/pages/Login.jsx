import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/styleLogin.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorUsername, setErrorUsername] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorUsername('');
    setErrorPassword('');

    const usernameInput = username.trim();
    const passwordInput = password.trim();

    if (usernameInput === '' || passwordInput === '') {
      alert('Por favor, completa todos los campos'); 
      if (usernameInput === '') setErrorUsername('Campo requerido');
      if (passwordInput === '') setErrorPassword('Campo requerido');
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};

    if (!usuarios[usernameInput]) {
      alert('El usuario no existe'); 
      setErrorUsername('El usuario no existe');
      return;
    }

    if (usuarios[usernameInput].password === passwordInput) {
      alert('¡Inicio de sesión exitoso!');
      navigate('/');
    } else {
      alert('Contraseña incorrecta'); 
      setErrorPassword('Contraseña incorrecta');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <form id="loginForm" onSubmit={handleSubmit}>
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
          {errorPassword && <span className="error">{errorPassword}</span>}

          <button type="submit">Iniciar sesión</button>

          <span className="register-label">¿No tienes una cuenta?</span>
          <Link to="/registro" className="link-btn">Registrarse</Link>
          <Link to="/" className="link-btn">Volver al inicio</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
