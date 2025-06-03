import React from 'react';

function Presentacion() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-[#4D774E] to-[#164A41] text-white'>
     
      <div className='flex justify-end p-6'>
        <button className='bg-[#164A41] text-white text-sm font-medium rounded-full px-6 py-2 mr-4 hover:bg-[#588157]'>Crear cuenta</button>
        <button className='bg-[#164A41] text-white text-sm font-medium rounded-full px-6 py-2 mr-4hover:bg-[#588157]'>Iniciar sesión</button>
      </div>

      <div className='flex justify-between items-center h-full ml-20 mr-20 relative'>
      
        <div className='flex flex-col justify-center items-start'>
          <h1 className='text-white text-9xl font-extrabold mb-10'>Residuos<br />Red</h1>
          <p className='text-white text-lg font-normal w-96 mb-'>
            Somos una página web enfocada en la concientización de la gestión de residuos que pueden afectar nuestro entorno.
          </p>
        </div>


        
          <img src='/images/logopedorro.png' alt='logopedorro' className='w-[384px] h-[384px] object-contain' />
        </div>
     
  );
}

export default Presentacion;

