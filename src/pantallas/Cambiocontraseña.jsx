import React, { useState } from 'react';

function Cambiocontraseña() {
  const [nuevaContraseña, setNuevaContraseña] = useState('');
  const [confirmacionContraseña, setConfirmacionContraseña] = useState('');

  const handleGuardarContraseña = async () => {
    if (!nuevaContraseña || !confirmacionContraseña) {
      alert('Por favor, completa ambos campos.');
      return;
    }

    if (nuevaContraseña !== confirmacionContraseña) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    const token = localStorage.getItem("token"); // Obtener el token desde localStorage

    try {
      const response = await fetch("https://r-dzwb.onrender.com/usuario/actualizar", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Incluir el token en los headers
        },
        body: JSON.stringify({ contraseña: nuevaContraseña }),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar la contraseña.");
      }

      const data = await response.json();
      console.log("Contraseña actualizada:", data);
      alert("Contraseña actualizada exitosamente.");
    } catch (error) {
      console.error("Error al actualizar la contraseña:", error);
      alert("Error al actualizar la contraseña.");
    }
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-t from-[#4D774E] to-[#9DC88D] flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-4xl font-black text-center text-gray-800 mb-6">Cambio de contraseña</h1>
        
        <input
          type="password"
          placeholder="Ingresa tu nueva contraseña"
          className="w-full bg-[#4D774E] text-white rounded-2xl shadow-lg p-2 mt-4"
          value={nuevaContraseña}
          onChange={(e) => setNuevaContraseña(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirmación de la nueva contraseña"
          className="w-full bg-[#4D774E] text-white rounded-2xl shadow-lg p-2 mt-4"
          value={confirmacionContraseña}
          onChange={(e) => setConfirmacionContraseña(e.target.value)}
        />
        <button
          className="bg-[#164A41] text-white text-sm font-medium rounded-full px-4 py-2 mr-4 hover:bg-[#588157] mt-4"
          onClick={handleGuardarContraseña}
        >
          Guardar Contraseña
        </button>
      </div>
    </div>
  );
}

export default Cambiocontraseña;
