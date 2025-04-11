import React from 'react';

function Cambiocontraseña() {
  return (
    <>
      <div className="mb-4">
        <div className="h-screen w-screen bg-gradient-to-t from-[#4D774E] to-[#9DC88D] flex justify-center items-center">
          <div className="w-1/2 h-1/2 flex flex-col justify-center items-center bg-[#D9D9D9] rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-center  mb-6">Cambio de contraseña</h1>
            <input
              type="password" 
              placeholder="Ingresa tu nueva contraseña"
              className="bg-[#164A41] text-white rounded-md shadow-md p-2 mb-4 w-full"
            />
            <input
              type="password" 
              placeholder="Confirmación de la nueva contraseña"
              className="bg-[#164A41] text-white rounded-md shadow-md p-2 mb-6 w-full"
            />
            <button className="bg-[#164A41] text-white rounded-md shadow-md w-[800 px] h-[400 px]">
              Guardar Contraseña
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cambiocontraseña;
