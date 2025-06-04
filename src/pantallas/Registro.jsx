import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Registro() {
  const [formData, setFormData] = useState({
    nombre_usuario: '',
    correo: '',
    contraseña: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar que los campos no estén vacíos
    if (!formData.nombre_usuario || !formData.correo || !formData.contraseña) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    try {
      const response = await fetch('https://r-production-44c4.up.railway.app/usuario/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          correo: formData.correo,
          contraseña: formData.contraseña,
          nombre_usuario: formData.nombre_usuario,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }

      const json_retornado = await response.json();
      console.log("Respuesta del servidor:", json_retornado);

      if (json_retornado.mensaje === 'Registro exitoso') {
        setSuccess('Registro exitoso. Redirigiendo...');
        setTimeout(() => navigate('/'), 2000); // Redirige al login después de 2 segundos
      } else {
        setError(json_retornado.mensaje || 'Error al registrar usuario');
      }
    } catch (err) {
      setError('Error al conectarse al servidor');
      console.error("Error en la solicitud:", err);
    }
  };

  const handleNavigateToLogin = () => {
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-t from-[#4D774E] to-[#164A41] font-sans">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-[500px] space-y-4">
        <h2 className="text-3xl font-black text-center text-gray-800">Crear una cuenta</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full bg-[#4D774E] text-white rounded-2xl shadow-lg p-3"
            type="text"
            name="nombre_usuario"
            placeholder="Nombre de usuario"
            value={formData.nombre_usuario}
            onChange={handleChange}
          />

          <input
            className="w-full bg-[#4D774E] text-white rounded-2xl shadow-lg p-3"
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            value={formData.correo}
            onChange={handleChange}
          />

          <input
            className="w-full bg-[#4D774E] text-white rounded-2xl shadow-lg p-3"
            type="password"
            name="contraseña"
            placeholder="Contraseña"
            value={formData.contraseña}
            onChange={handleChange}
          />

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          {success && <p className="text-green-500 text-sm text-center">{success}</p>}

          <div className="flex justify-center">
            <button
              className="bg-[#164A41] hover:bg-[#9DC88D] text-white font-bold py-2 px-6 rounded-3xl focus:outline-none"
              type="submit"
            >
              Crear cuenta
            </button>
          </div>
        </form>

        <div className="text-center">
          <button
            className="text-sm text-[#010101] hover:text-[#164A41]"
            onClick={handleNavigateToLogin}
          >
            ¿Ya tienes una cuenta? Inicia sesión aquí
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registro;