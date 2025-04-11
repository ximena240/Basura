import React from 'react';

const Guardados = () => {
  return (
    <div className="flex h-screen bg-green-100">
      {/* Barra lateral izquierda*/ }
      <div className="w-1/4 bg-gray-200 p-4">
        <h2 className="text-xl font-semibold mb-4">Mis carpetas</h2>
        <div className="space-y-2">
          {['Nombre', 'Nombre', 'Nombre', 'Nombre', 'Nombre'].map((name, index) => (
            <div key={index} className="flex items-center">
              <div className="w-10 h-10 bg-gray-400 rounded mr-2"></div>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex-1 p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Todos</h2>
          <div className="flex space-x-4">
            <div className="w-8 h-8 rounded-full bg-white"></div>
            <div className="w-8 h-8 rounded-full bg-white"></div>
            <div className="w-8 h-8 rounded-full bg-white"></div>
            <div className="w-8 h-8 rounded-full bg-white"></div>
          </div>
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((index) => (
            <div key={index} className="bg-white p-4 rounded">
              <h3 className="text-lg font-semibold">Título de la publicación</h3>
              <p className="text-sm text-gray-500">Se guardó en x carpeta</p>
              <div className="flex items-center mt-2">
                <button className="bg-gray-300 px-4 py-2 rounded text-sm mr-2">
                  Agregar a una carpeta
                </button>
                <div className="w-6 h-6 bg-gray-400 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guardados; 