import React from 'react';

function Perfil() {
  return (
    <div className='min-h-screen bg-gray-100 p-4'>
      <div className='grid grid-cols-12 gap-4'>
        {/* Barra de búsqueda */}
        <div className='col-span-12 bg-white rounded-lg p-4'>
          <input
            type='text'
            placeholder='Buscar'
            className='w-full p-2 border rounded-md'
          />
        </div>

        {/* Perfil */}
        <div className='col-span-3 bg-white rounded-lg p-4'>
          <div className='rounded-full bg-gray-300 w-16 h-16 mb-4'></div>
          <h2 className='text-lg font-semibold mb-2'>Nombre del usuario</h2>
          <p className='text-sm text-gray-500 mb-4'>
            Breve descripción (Puede ser opcional)
          </p>
          <div className='bg-gray-200 rounded-lg p-2'>
            <p className='text-sm'>Racha de recolección del usuario</p>
          </div>
        </div>

        {/* Publicaciones */}
        <div className='col-span-6 bg-white rounded-lg p-4'>
          <div className='flex justify-between items-center mb-4'>
            <div className='flex items-center'>
              <div className='rounded-full bg-gray-300 w-8 h-8 mr-2'></div>
              <p className='text-sm font-semibold'>Usuario</p>
            </div>
            <button className='text-gray-500'>...</button>
          </div>
          <p className='text-sm text-gray-600 mb-4'>
            Texto, texto, texto, texto
          </p>
          <div className='flex justify-between items-center'>
            <div>
              <button className='mr-2'>♡</button>
              <button className='mr-2'>▷</button>
              <button>⚑</button>
            </div>
            <button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Lista de amigos */}
        <div className='col-span-3 bg-white rounded-lg p-4'>
          <h2 className='text-lg font-semibold mb-2'>Lista de amigos</h2>
          <p className='text-sm text-gray-500 mb-4'>100 amigos</p>
          <div className='grid grid-cols-2 gap-2'>
            <div className='bg-gray-200 rounded-lg h-16'></div>
            <div className='bg-gray-200 rounded-lg h-16'></div>
            <div className='bg-gray-200 rounded-lg h-16'></div>
            <div className='bg-gray-200 rounded-lg h-16'></div>
          </div>
        </div>

        {/* Fotos */}
        <div className='col-span-3 bg-white rounded-lg p-4'>
          <h2 className='text-lg font-semibold mb-2'>Fotos</h2>
          <button className='text-sm text-blue-500 mb-4'>
            Agregar fotos / video
          </button>
          <div className='grid grid-cols-3 gap-2'>
            <div className='bg-gray-200 rounded-lg h-16'></div>
            <div className='bg-gray-200 rounded-lg h-16'></div>
            <div className='bg-gray-200 rounded-lg h-16'></div>
            <div className='bg-gray-200 rounded-lg h-16'></div>
            <div className='bg-gray-200 rounded-lg h-16'></div>
            <div className='bg-gray-200 rounded-lg h-16'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;