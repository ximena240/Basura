import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para la navegación

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Inicializamos useNavigate

  // Función para manejar el inicio de sesión
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://r-production-44c4.up.railway.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/PaginaPrincipal"); // Redirige a la pantalla principal después de iniciar sesión
      } else {
        alert("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  // Función para redirigir a la pantalla CambioContraseña.jsx
  const handleForgotPassword = () => {
    navigate("/CambioContraseña");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-200 to-green-400">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Iniciar sesión</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded bg-gray-100"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded bg-gray-100"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800"
          >
            Iniciar sesión
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={handleForgotPassword}
            className="text-sm text-teal-600 hover:underline"
          >
            ¿Has olvidado tu contraseña?
          </button>
        </div>
      </div>
    </div>
  );
}