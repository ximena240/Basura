import React from 'react';

function Perfil() {
  return (
    <div className='min-h-screen bg-gray-100 p-4 overflow-y-auto max-w-screen-md mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-12 gap-4'>
        {/* Barra de búsqueda (ocupa todo el ancho) */}
        <div className='col-span-1 md:col-span-12 bg-white rounded-lg p-3 mb-4'>
          <input
            type='text'
            placeholder='Buscar'
            className='w-full p-2 border rounded-md focus:outline-none focus:border-blue-500'
          />
        </div>

        {/* Columna izquierda */}
        <div className='col-span-1 md:col-span-3'>
          {/* Perfil */}
          <div className='bg-white rounded-lg p-4 mb-4'>
            <div className='rounded-full bg-gray-300 w-16 h-16 mb-2'></div>
            <h2 className='text-lg font-semibold mb-1'>Nombre del usuario</h2>
            <p className='text-sm text-gray-500 mb-3'>
              Breve descripción (Puede ser opcional)
            </p>
            <button className='text-sm text-blue-500'>Editar perfil</button>
          </div>

          {/* Racha de recolección del usuario */}
          <div className='bg-white rounded-lg p-3'>
            <p className='text-sm font-semibold mb-1'>Racha de recolección del usuario</p>
            <div className='bg-gray-200 rounded-md p-2'>
              {/* Contenido de la racha */}
            </div>
          </div>
        </div>

        {/* Columna central (Publicaciones y Crear publicación) */}
        <div className='col-span-1 md:col-span-6'>
          {/* Crear una publicación */}
          <div className='bg-white rounded-lg p-4 mb-4'>
            <h3 className='text-md font-semibold mb-2'>Crear una publicación</h3>
            <div className='flex space-x-3 mb-2'>
              <button className='text-blue-500 text-sm'>Foto/video</button>
              <button className='text-green-500 text-sm'>Hilo</button>
              <button className='text-red-500 text-sm'>Live</button>
            </div>
            <textarea
              className='w-full p-2 border rounded-md focus:outline-none focus:border-blue-500 text-sm'
              placeholder='¿Qué estás pensando?'
              rows={3}
            ></textarea>
            <button className='bg-blue-500 text-white rounded-md py-2 px-4 mt-2 text-sm'>Publicar</button>
          </div>

          {/* Publicaciones */}
          <div className='bg-white rounded-lg p-4 mb-4'>
            <div className='flex justify-between items-center mb-2'>
              <div className='flex items-center'>
                <div className='rounded-full bg-gray-300 w-8 h-8 mr-2'></div>
                <p className='text-sm font-semibold'>Usuario</p>
              </div>
              <button className='text-gray-500 text-sm'>...</button>
            </div>
            <p className='text-sm text-gray-600 mb-2'>
              Texto, texto, texto, texto
            </p>
            <div className='flex justify-between items-center text-gray-500 text-sm'>
              <div>
                <button className='mr-2'>♡</button>
                <button className='mr-2'>▷</button>
                <button>⚑</button>
              </div>
              <button>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
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

          {/* Más publicaciones aquí */}
        </div>

        {/* Columna derecha */}
        <div className='col-span-1 md:col-span-3'>
          {/* Lista de amigos */}
          <div className='bg-white rounded-lg p-4 mb-4'>
            <h2 className='text-lg font-semibold mb-2'>Lista de amigos</h2>
            <p className='text-sm text-gray-500 mb-3'>100 amigos</p>
            <div className='grid grid-cols-3 gap-2'>
              {[...Array(9)].map((_, index) => (
                <div key={index} className='bg-gray-200 rounded-full h-10 w-10'></div>
              ))}
            </div>
          </div>

          {/* Fotos */}
          <div className='bg-white rounded-lg p-4'>
            <h2 className='text-lg font-semibold mb-2'>Fotos</h2>
            <button className='text-sm text-blue-500 mb-3'>
              Agregar fotos / video
            </button>
            <div className='grid grid-cols-2 gap-2'>
              {[...Array(6)].map((_, index) => (
                <div key={index} className='bg-gray-200 rounded-md h-20'></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;