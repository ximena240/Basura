import React, { useState } from 'react';

function Login() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState(''); // Estado para el error

  const handleLogin = () => {
    if (password !== 'password123') {
      setError('Contraseña incorrecta, intenta de nuevo.');
    } else {
      setError(''); 
      console.log('Inicio de sesión exitoso');
      
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-t from-[#4D774E] to-50% to-[#81AB77] font-sans">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-3xl font-black mb-2 text-center text-gray-800">Iniciar sesión</h2>
        <div className="mb-4">
          <input
            className="w-full bg-[#4D774E] text-white rounded-2xl shadow-lg p-2 mt-4"
            id="username"
            type="text"
            placeholder="Ingresa tu nombre de usuario o correo"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <div className="relative">
            <input
              className="w-full bg-[#4D774E] text-white rounded-2xl shadow-lg p-2 -mt-2"
              id="password"
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-500 hover:text-gray-700 focus:outline-none">
              <i className="fi fi-rs-eye"></i>
            </button>
          </div>
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>} {/* Mostrar el mensaje de error */}
        <div className="flex items-center justify-between">
          <button
            className="bg-[#9DC88D] hover:bg-[#164A41] text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleLogin} 
          >
            Iniciar sesión
          </button>
          <a className="inline-block align-baseline font-stretch-90% text-sm text-[#050505] hover:text-[#164A41]" href="#">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;