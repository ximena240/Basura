import React from 'react';

const SocialMediaPost = () => {
  return (
    // Contenedor principal con fondo gris claro/verde
    <div className="flex h-screen bg-[#DDE1D4]">
      {/* Columna izquierda (sección gris) */}
      <div className="w-3/5 bg-[#AAB8A3] flex items-center justify-center relative">
        {/* Botón de cerrar en la esquina superior izquierda */}
        <button className="absolute top-4 left-4 text-white text-3xl">&times;</button>
        {/* Texto de marcador de posición para imagen/video */}
        <span className="text-white text-xl">Imagen/video</span>
      </div>
 
      {/* Columna derecha (sección verde) */}
      <div className="w-2/5 bg-[#B8E1A3] p-6 flex flex-col justify-between">
        <div>
          {/* Información del usuario y opciones */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              {/* Marcador de posición para el avatar del usuario */}
              <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
              <div>
                {/* Nombre de usuario */}
                <p className="font-semibold text-gray-800">Usuario</p>
                {/* Tiempo de publicación */}
                <p className="text-sm text-gray-600">10 min</p>
              </div>
            </div>
            {/* Icono de marcador (simplificado) */}
            <span className="text-gray-600 text-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                </svg>
            </span>
          </div>

          {/* Sección de descripción */}
          <h3 className="font-semibold text-gray-800 mb-4">Descripción</h3>

          {/* Likes y Compartir */}
          <div className="flex items-center mb-6">
            <div className="flex items-center mr-4">
              {/* Icono de corazón (Like) */}
              <span className="mr-2 text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.835 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </span>
              {/* Contador de likes */}
              <span className="text-gray-700">200</span>
            </div>
            <div className="flex items-center">
              {/* Icono de compartir (avión de papel) */}
              <span className="mr-2 text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
              </span>
              {/* Contador de compartidos */}
              <span className="text-gray-700">200</span>
            </div>
          </div>

          {/* Título de la sección de comentarios */}
          <h3 className="font-semibold text-gray-800 mb-4">Comentarios</h3>

          {/* Comentario 1 */}
          <div className="flex items-start mb-4">
            {/* Avatar del comentador */}
            <div className="w-8 h-8 rounded-full bg-gray-300 mr-3 mt-1"></div>
            <div className="flex-grow">
              {/* Contenido del comentario */}
              <div className="bg-white rounded-lg p-3">
                <p className="text-gray-700 text-sm">Este es un comentario de ejemplo.</p>
              </div>
              {/* Opciones del comentario: tiempo, Like, Responder */}
              <div className="flex text-xs text-gray-500 mt-1 space-x-3">
                <span>1 día</span>
                <button className="font-semibold">Like</button>
                <button className="font-semibold">Responder</button>
              </div>
            </div>
          </div>

          {/* Comentario 2 */}
          <div className="flex items-start mb-4">
            {/* Avatar del comentador */}
            <div className="w-8 h-8 rounded-full bg-gray-300 mr-3 mt-1"></div>
            <div className="flex-grow">
              {/* Contenido del comentario */}
              <div className="bg-white rounded-lg p-3">
                <p className="text-gray-700 text-sm">Otro comentario aquí.</p>
              </div>
              {/* Opciones del comentario: tiempo, Like, Responder */}
              <div className="flex text-xs text-gray-500 mt-1 space-x-3">
                <span>1 día</span>
                <button className="font-semibold">Like</button>
                <button className="font-semibold">Responder</button>
              </div>
            </div>
          </div>

          {/* Comentario con respuestas */}
          <div className="flex items-start mb-4">
            {/* Avatar del comentador */}
            <div className="w-8 h-8 rounded-full bg-gray-300 mr-3 mt-1"></div>
            <div className="flex-grow">
              {/* Contenido del comentario */}
              <div className="bg-white rounded-lg p-3">
                <p className="text-gray-700 text-sm">Este comentario tiene respuestas.</p>
              </div>
              {/* Opciones del comentario: tiempo, Like, Responder */}
              <div className="flex text-xs text-gray-500 mt-1 space-x-3">
                <span>1 día</span>
                <button className="font-semibold">Like</button>
                <button className="font-semibold">Responder</button>
              </div>
              {/* Enlace para ver respuestas con línea vertical */}
              <div className="flex items-center text-xs text-gray-500 mt-2 cursor-pointer">
                <div className="w-0.5 bg-gray-400 h-6 mr-2"></div> {/* Línea vertical */}
                <span>Ver 5 respuestas</span>
              </div>
            </div>
          </div>

          {/* Último comentario visible */}
          <div className="flex items-start mb-4">
            {/* Avatar del comentador */}
            <div className="w-8 h-8 rounded-full bg-gray-300 mr-3 mt-1"></div>
            <div className="flex-grow">
              {/* Contenido del comentario */}
              <div className="bg-white rounded-lg p-3">
                <p className="text-gray-700 text-sm">Último comentario visible.</p>
              </div>
            </div>
          </div>

          {/* Enlace para ver más comentarios */}
          <p className="text-sm text-gray-600 mb-4">Ver más comentarios</p>
        </div>

        {/* Sección para agregar comentario en la parte inferior */}
        <div className="flex justify-between items-center">
          {/* Avatar del usuario que va a comentar */}
          <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
          {/* Botón para agregar un comentario */}
          <button className="flex-grow bg-white text-gray-500 py-3 px-4 rounded-full text-left">
            Agregar un comentario
          </button>
          {/* Contador de comentarios (ej. 5 de 20) */}
          <span className="text-sm text-gray-600 ml-4">5 de 20</span>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaPost;
