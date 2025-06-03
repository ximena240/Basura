import React from "react";
import {
  MapPin,
  Heart,
  Send,
  Bookmark,
  Bell,
  Home,
  MessageCircle,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-200 to-green-400 p-4 space-y-4">
      {/* Barra superior */}
      <div className="flex justify-between items-center bg-green-300 p-2 rounded-xl">
        <input
          type="text"
          placeholder="Buscar"
          aria-label="Buscar"
          className="flex-grow rounded-full px-4 py-2 mx-4"
        />
        <div className="flex gap-4">
          <Home />
          <Bell />
          <div className="w-6 h-6 rounded-full bg-white border-2 border-gray-400" />
        </div>
      </div>

      {/* Contenido principal */}
      <div className="grid grid-cols-4 gap-4">
        {/* Columna izquierda */}
        <div className="space-y-4 col-span-1">
          <div className="bg-white rounded-xl p-2">
            <p className="text-sm font-semibold">Encuentra centros de acopio</p>
            <div className="mt-2 w-full h-48 bg-gray-300 rounded-xl" />
          </div>
        </div>

        {/* Columna central */}
        <div className="col-span-2 space-y-4">
          {/* Crear publicación */}
          <div className="bg-white p-4 rounded-lg shadow flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-300 rounded-full" />
              <textarea
                placeholder="¿Qué estás pensando?"
                className="flex-1 bg-gray-100 rounded-lg p-3 text-black focus:outline-none resize-none"
                rows={3}
              />
            </div>

            <div className="flex items-center justify-between">
              <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm hover:bg-green-600">
                Foto/Video
              </button>

              <button className="bg-green-700 text-white px-6 py-2 rounded-full text-sm hover:bg-green-800 self-end ml-auto">
                Publicar
              </button>
            </div>
          </div>

          {/* Ejemplo de publicación */}
          <div className="bg-gray-100 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-green-400" />
              <span className="text-sm font-semibold">Usuario</span>
              <span className="text-xs text-gray-500">10 min</span>
            </div>
            <div className="h-32 bg-green-200 rounded-xl" />
            <div className="flex justify-between mt-2">
              <div className="flex gap-4">
                <Heart className="cursor-pointer hover:text-red-500" />
                <MessageCircle className="cursor-pointer hover:text-green-700" />
                <Send className="cursor-pointer hover:text-blue-500" />
              </div>
              <Bookmark className="cursor-pointer hover:text-yellow-500" />
            </div>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="col-span-1 space-y-4">
          <div className="bg-gray-100 rounded-xl p-4">
            <p className="text-sm font-bold text-center">Ranking de los usuarios</p>
            <div className="flex justify-around items-end mt-4 h-32">
              <div className="bg-green-600 w-10 h-16 rounded-md flex flex-col items-center">
                <div className="w-10 h-10 bg-white rounded-full -mt-4 border" />
                <span className="text-xs mt-1">2</span>
              </div>
              <div className="bg-green-800 w-10 h-24 rounded-md flex flex-col items-center">
                <div className="w-10 h-10 bg-white rounded-full -mt-4 border" />
                <span className="text-xs mt-1">1</span>
              </div>
              <div className="bg-green-400 w-10 h-12 rounded-md flex flex-col items-center">
                <div className="w-10 h-10 bg-white rounded-full -mt-4 border" />
                <span className="text-xs mt-1">3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
