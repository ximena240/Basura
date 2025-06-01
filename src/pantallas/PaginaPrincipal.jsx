import React from "react";
import { MapPin, Heart, Send, Bookmark, Users, Bell, Home } from "lucide-react";

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
            <p className="text-sm font-semibold">Encuentra centros de acopio</p>
            <div className="mt-2 w-full h-48 bg-gray-300 rounded-xl" />
          </div>
          <div className="bg-white rounded-xl p-2">
            <p className="text-sm font-semibold">Crea tu centro de acopio</p>
            <div className="mt-2 w-full h-48 bg-gray-300 rounded-xl" />
          </div>
        </div>

        {/* Columna central */}
        <div className="col-span-2 space-y-4">
          <div className="bg-gray-100 rounded-xl p-4">
            <p className="text-lg font-semibold">Crear una publicación</p>
            <div className="flex gap-4 mt-2 text-sm">
              <span>Foto/video</span>
              <span>Hilo</span>
              <span>Live</span>
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
          </div>
        </div>

        {/* Columna derecha */}
        <div className="col-span-1 space-y-4">
          <div className="bg-gray-100 rounded-xl p-4">
            <p className="text-sm font-bold text-center">Ranking de los usuarios</p>
            <div className="flex justify-around items-end mt-4 h-32">
              <div className="bg-green-600 w-6 h-16 rounded-md flex flex-col items-center">
                <div className="w-8 h-8 bg-white rounded-full -mt-4 border" />
                <span className="text-xs mt-1">2</span>
              </div>
              <div className="bg-green-800 w-6 h-24 rounded-md flex flex-col items-center">
                <div className="w-8 h-8 bg-white rounded-full -mt-4 border" />
                <span className="text-xs mt-1">1</span>
              </div>
              <div className="bg-green-400 w-6 h-12 rounded-md flex flex-col items-center">
                <div className="w-8 h-8 bg-white rounded-full -mt-4 border" />
                <span className="text-xs mt-1">3</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-4">
            <p className="text-sm font-bold">Historias</p>
            <div className="flex justify-around mt-2">
              <div className="w-12 h-16 bg-green-300 rounded-md" />
              <div className="w-12 h-16 bg-green-300 rounded-md" />
              <div className="w-12 h-16 bg-green-300 rounded-md" />
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-4">
            <p className="text-sm font-bold">Hilos de usuarios</p>
            <div className="flex flex-col mt-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full" />
                <span>Usuario publicó un hilo</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-200 rounded-full" />
                <span>En respuesta a este hilo</span>
              </div>
            </div>
          </div>
        </div>
      </div>j
    </div>
  );
}
