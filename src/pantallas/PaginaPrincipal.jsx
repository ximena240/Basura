import React from "react";
import {
  MapPin,
  Heart,
  Send,
  Bookmark,
  Users,
  Bell,
  Home,
  MessageCircle
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-200 to-green-400 p-4 space-y-4">
      {/* Barra superior */}
      <div className="flex justify-between items-center bg-green-300 p-2 rounded-xl">
        <input
          type="text"
          placeholder="Buscar"
          className="flex-grow rounded-full px-4 py-2 mx-4"
        />
        <div className="flex gap-4">
          <Home />
          <Users />
          <Bell />
          <div className="w-6 h-6 rounded-full bg-white border-2 border-gray-400" />
        </div>
      </div>

      {/* Contenido principal */}
      <div className="grid grid-cols-4 gap-4">
        {/* Columna izquierda */}
        <div className="space-y-4 col-span-1">
          <div className="bg-white rounded-xl p-2">
            <p className="text-sm font-semibold text-center">Encuentra centros de acopio cercanos</p>
            <div className="mt-2 w-full h-48 bg-gray-300 rounded-xl flex items-center justify-center">
              <MapPin className="w-10 h-10 text-gray-600" />
            </div>
          </div>
        </div>

        {/* Columna central */}
        <div className="col-span-2 space-y-4">
          <div className="bg-gray-100 rounded-xl p-4">
            <p className="text-lg font-semibold text-green-800">¿Qué quieres compartir hoy?</p>
            <div className="flex gap-4 mt-2 text-sm text-gray-600">
              <span>Foto/video</span>
              <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition self-start">
    Publicar
  </button>         
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-green-400" />
              <span className="text-sm font-semibold">Usuario</span>
              <span className="text-xs text-gray-500">10 min</span>
            </div>
            <div className="h-32 bg-green-200 rounded-xl" />
            <div className="flex justify-between mt-2">
              <div className="flex gap-4">
                <Heart />
                <Send />
                <MessageCircle />
              </div>
              <Bookmark />
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-green-400" />
              <span className="text-sm font-semibold">Usuario</span>
              <span className="text-xs text-gray-500">10 min</span>
            </div>
            <p>Texto de ejemplo de otra publicación.</p>
            <div className="flex justify-between mt-2">
              <div className="flex gap-4">
                <Heart />
                <Send />
                <MessageCircle />
              </div>
              <Bookmark />
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

