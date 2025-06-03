import React from 'react';

function Cambiocontraseña() {
  return (
    <>
      <div className="mb-4">
        <div className="h-screen w-screen bg-gradient-to-t from-[#4D774E] to-[#9DC88D] flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <h1 className="text-4xl font-black text-center text-gray-800 mb-6">Cambio de contraseña</h1>
            
            <input
              type="password" 
              placeholder="Ingresa tu nueva contraseña"
              className="w-full bg-[#4D774E] text-white rounded-2xl shadow-lg p-2 mt-4"
            />
            <input
              type="password" 
              placeholder="Confirmación de la nueva contraseña"
              className="w-full bg-[#4D774E] text-white rounded-2xl shadow-lg p-2 mt-4"
            />
            <button className="bg-[#164A41] text-white text-sm font-medium rounded-full px-4 py-2 mr-4 hover:bg-[#588157] mt-4">
              Guardar Contraseña
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cambiocontraseña; 
