import React from 'react';
import {
    HomeIcon,
    UsersIcon,
    MapPinIcon,
    HeartIcon,
    Send,
    FlagIcon,
    BookmarkIcon,
    CameraIcon,
} from 'lucide-react';

function Pantallainicio() {
    return (
        <div className="min-h-screen bg-gray-100 p-4 overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 max-w-7xl mx-auto">
                {/* Barra de búsqueda (ocupa todo el ancho) */}
                <div className="col-span-1 md:col-span-12 bg-white rounded-lg p-3 mb-4 flex items-center">
                    <input
                        type="text"
                        placeholder="Buscar"
                        className="w-full p-2 border-none rounded-md focus:outline-none text-sm"
                    />
                    <HomeIcon className="w-5 h-5 text-gray-500 ml-2" />
                    <UsersIcon className="w-5 h-5 text-gray-500 ml-4" />
                </div>

                {/* Columna izquierda */}
                <div className="col-span-1 md:col-span-4 lg:col-span-3">
                    {/* Encuentra centros de acopio */}
                    <div className="bg-white rounded-lg p-4 mb-4">
                        <h2 className="text-sm font-semibold mb-2">Encuentra centros de acopio</h2>
                        <div className="rounded-md  h-48 flex items-center justify-center">
                            {/* Mapa o imagen */}
                            <MapPinIcon className="w-10 h-10 text-gray-400" />
                        </div>
                        <div className="mt-2 space-y-1">
                            <p className="text-xs">Tampico</p>
                            <p className="text-xs">Madero</p>
                            <p className="text-xs">Altamira</p>
                        </div>
                    </div>

                    {/* Crea tu centro de acopio */}
                    <div className="bg-white rounded-lg p-4 mb-4">
                        <h2 className="text-sm font-semibold mb-2">Crea tu centro de acopio</h2>
                        <div className="rounded-md  h-48 flex items-center justify-center">
                            {/* Mapa o imagen */}
                            <MapPinIcon className="w-10 h-10 text-gray-400" />
                        </div>
                        <div className="mt-2 space-y-1">
                            <p className="text-xs">Tampico</p>
                            <p className="text-xs">Madero</p>
                            <p className="text-xs">Altamira</p>
                        </div>
                    </div>
                </div>

                {/* Columna central (Publicaciones y Crear publicación) */}
                <div className="col-span-1 md:col-span-8 lg:col-span-6">
                    {/* Crear una publicación */}
                    <div className="bg-white rounded-lg p-4 mb-4">
                        <h3 className="text-md font-semibold mb-2">Crear una publicación</h3>
                        <div className="flex space-x-3 mb-2">
                            <button className="text-blue-500 text-sm flex items-center">
                                <CameraIcon className="w-4 h-4 mr-1" /> Foto/video
                            </button>
                        </div>
                        <textarea
                            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500 text-sm resize-none"
                            placeholder="¿Qué estás pensando?"
                            rows={3}
                        ></textarea>
                        <button className="bg-blue-500 text-white rounded-md py-2 px-4 mt-2 text-sm">Publicar</button>
                    </div>

                    {/* Publicaciones */}
                    {[1, 2].map((post, index) => (
                        <div key={index} className="bg-white rounded-lg p-4 mb-4">
                            <div className="flex justify-between items-center mb-2">
                                <div className="flex items-center">
                                    <div className="rounded-full bg-gray-300 w-8 h-8 mr-2"></div>
                                    <div>
                                        <p className="text-sm font-semibold">Usuario</p>
                                        <p className="text-xs text-gray-500">10 min</p>
                                    </div>

                                </div>
                                <button className="text-gray-500 text-sm">...</button>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">
                                Texto, texto, texto, texto
                            </p>
                            <div className="flex justify-between items-center text-gray-500 text-sm">
                                <div>
                                    <button className="mr-2 flex items-center">
                                        <HeartIcon className="w-4 h-4 mr-1" /> 10
                                    </button>
                                    <button className="mr-2 flex items-center">
                                        <Send className="w-4 h-4 mr-1" /> 2
                                    </button>
                                    <button className="flex items-center">
                                        <FlagIcon className="w-4 h-4 mr-1" /> 3
                                    </button>
                                </div>
                                <button>
                                    <BookmarkIcon className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                    {/* Más publicaciones aquí */}
                </div>

                {/* Columna derecha */}
                <div className="col-span-1 md:col-span-4 lg:col-span-3">
                    {/* Ranking de los usuarios */}
                    <div className="bg-white rounded-lg p-4 mb-4">
                        <h2 className="text-lg font-semibold mb-2">Ranking de los usuarios</h2>
                        <div className="flex justify-around mt-4">
                            <div className="flex flex-col items-center">
                                <div className="rounded-full bg-gray-400 w-10 h-10 mb-2 flex items-center justify-center">
                                    <span className="text-sm font-bold">2</span>
                                </div>
                                <p className="text-xs text-gray-500">Usuario 2</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="rounded-full bg-green-500 w-12 h-12 mb-2 flex items-center justify-center">
                                    <span className="text-sm font-bold">1</span>
                                </div>
                                <p className="text-xs text-gray-500">Usuario 1</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="rounded-full bg-gray-400 w-10 h-10 mb-2 flex items-center justify-center">
                                    <span className="text-sm font-bold">3</span>
                                </div>
                                <p className="text-xs text-gray-500">Usuario 3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pantallainicio;
 