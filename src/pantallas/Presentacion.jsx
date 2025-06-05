import React from 'react';
import { useNavigate } from 'react-router-dom';

function Presentacion() {

  const navigate = useNavigate();

  return (
    <div className='min-h-screen bg-gradient-to-b from-[#4D774E] to-[#164A41] text-white'>
     
      <div className='flex justify-end p-6'>
        <button
          onClick={() => navigate('/registro')} // 👈 Al hacer clic lleva a /registro
          className='bg-[#164A41] text-white text-sm font-medium rounded-full px-6 py-2 mr-4 hover:bg-[#588157]'>
          Crear cuenta
        </button>
        <button
          onClick={() => navigate('/login')} // 👈 Al hacer clic lleva a /login
          className='bg-[#164A41] text-white text-sm font-medium rounded-full px-6 py-2 hover:bg-[#588157]'>
          Iniciar sesión
        </button>
      </div>

      <div className='flex justify-between items-center h-full ml-20 mr-20 relative'>
      
        <div className='flex flex-col justify-center items-start'>
          <h1 className='text-white text-9xl font-extrabold mb-10'>Residuos<br />Red</h1>
          <p className='text-white text-lg font-normal w-96 mb-'>
            Somos una pagina web enfocada en la concientización de la gestion de residuos que pueden afectar nuestro entorno.
          </p>
        </div>

      
        <div className='w-96 h-96 rounded-full bg-white flex items-center justify-center shadow-lg'>
          <img src='/images/logopedorro.png' alt='logopedorro' className='w-64 h-64 object-contain' />
        </div>
      </div>
    </div>
  );
}

export default Presentacion;

