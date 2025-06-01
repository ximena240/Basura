import React from 'react'


function Mapacentro() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Barra Superior */}
      <div className="bg-white p-4 shadow-md flex items-center justify-between">
        <div className="flex items-center">
          {/* Icono (reemplaza con tu icono) */}
          <div className="w-8 h-8 mr-2 bg-green-500 rounded-full"></div>
          <input
            type="text"
            placeholder="Buscar"
            className="border border-gray-300 rounded-md px-4 py-2 w-64 focus:outline-none focus:border-green-500"
          />
        </div>
        <div className="flex items-center space-x-4">
          {/* Icono de Inicio */}
          <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
          {/* Icono de Grupo */}
          <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
          {/* Icono de Notificación */}
          <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="flex-grow p-6">
        <h1 className="text-2xl font-semibold mb-4">Encuentra un centro de acopio</h1>
        {/* Contenedor del Mapa */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Aquí iría tu componente de mapa (podrías usar una librería como Leaflet o Google Maps con un wrapper para React) */}
          <div className="w-full h-96 bg-gray-300 flex items-center justify-center text-gray-500">
            {/* Reemplaza esto con tu mapa */}
            Mapa aquí
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mapacentro;
