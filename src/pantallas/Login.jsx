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
    <div className="flex items-center justify-center h-screen bg-gradient-to-t from-[#4D774E] to-[#9DC88D] font-sans">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-black mb-6 text-center text-gray-800">Iniciar sesión</h2>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleLogin} 
          >
            Iniciar sesión
          </button>
          <a className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800" href="#">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;