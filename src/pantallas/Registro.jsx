import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Registro() {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const navigate = useNavigate();

  // Función para manejar el registro
  const handleRegistro = async (e) => {
    e.preventDefault();

    // Validar que los campos no estén vacíos
    if (!nombreUsuario || !correo || !contraseña) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    try {
      const response = await fetch('https://r-dzwb.onrender.com/usuario/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          correo: correo,
          contraseña: contraseña,
          nombre_usuario: nombreUsuario,
        }),
      });

      const data = await response.json();

      if (data.mensaje === 'Registro exitoso') {
        alert('Registro exitoso. Redirigiendo...');
        navigate('/'); // Redirige al login
      } else {
        alert(data.mensaje || 'Error al registrar usuario');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      alert('Error al conectarse al servidor');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-200 to-green-400">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Crear una cuenta</h2>
        <form onSubmit={handleRegistro} className="space-y-4">
          <div>
            <label htmlFor="nombreUsuario" className="block text-sm font-semibold text-gray-700">
              Nombre completo
            </label>
            <input
              type="text"
              id="nombreUsuario"
              className="w-full p-2 border rounded bg-gray-100"
              value={nombreUsuario}
              onChange={(e) => setNombreUsuario(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="correo" className="block text-sm font-semibold text-gray-700">
              Correo electrónico
            </label>
            <input
              type="email"
              id="correo"
              className="w-full p-2 border rounded bg-gray-100"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="contraseña" className="block text-sm font-semibold text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              id="contraseña"
              className="w-full p-2 border rounded bg-gray-100"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800"
          >
            Crear cuenta
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={() => navigate('/')}
            className="text-sm text-teal-600 hover:underline"
          >
            ¿Ya tienes una cuenta? Inicia sesión aquí
          </button>
        </div>
      </div>
    </div>
  );
}