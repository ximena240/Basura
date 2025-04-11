import React from 'react';

function Presentacion() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-[#4D774E] to-[#164A41] text-white'>
      <header className=' bg-gray-800 p-4'>
        <nav className='container mx-auto flex justify-end'>
          <a href='#' className='ml-6 hover:underline font-medium mb-6 '>Crear cuenta</a>
          <a href='#' className='ml-6 hover:underline font-medium mb-6'>Iniciar sesión</a>
        </nav>
      </header>

      <main className='flex items-center justify-center h-[calc(100vh-64px)]'>
        <div className='container mx-auto p-4 max-w-2xl'>
          <h1 className='text-[128px] text-left font-extrabold mb-6 leading-tight'>Residuos <br/>Red</h1>
          <p className='text-lg mb-20 text-left'>
            Somos una página web enfocada en la concientización de la gestión de residuos que pueden afectar nuestro entorno.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Presentacion;

