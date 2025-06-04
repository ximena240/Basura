import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    correo: '',
    contraseña: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://r-production-44c4.up.railway.app/usuario/acceso', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const json_retornado = await response.json();

      if (json_retornado.mensaje === 'Login exitoso') {
        localStorage.setItem('token', json_retornado.token);
        localStorage.setItem('id', json_retornado.id);
        navigate('/Paginaprincipal');
      } else {
        setError('Credenciales inválidas');
      }
    } catch (err) {
      setError('Error al conectarse al servidor');
      console.error("Error en la solicitud:", err);
    }
  };

  const handleNavigateToRegistro = () => {
    navigate('/registro');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-t from-[#4D774E] to-50% to-[#81AB77] font-sans">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-[500px] space-y-4">
        <h2 className="text-3xl font-black text-center text-gray-800">Iniciar sesión</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
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

          <div className="flex justify-center">
            <button
              className="bg-[#9DC88D] hover:bg-[#164A41] text-white font-bold py-2 px-6 rounded-3xl focus:outline-none"
              type="submit"
            >
              Iniciar sesión
            </button>
          </div>
        </form>

        <div className="text-center">
          <button
            className="text-sm text-[#050505] hover:text-[#164A41]"
            onClick={handleNavigateToRegistro}
          >
            ¿No tienes una cuenta? Regístrate aquí
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;