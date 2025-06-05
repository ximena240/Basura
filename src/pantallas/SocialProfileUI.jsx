import React, { useState } from 'react';
import { HomeIcon, BellIcon, Pencil, Heart, MessageCircle, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';



export default function SocialProfileUI() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: '',
    username: '',
    pronouns: '',
    bio: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const navigate = useNavigate();

  const irAEditarPerfil = () => {
    navigate('/editarperfil');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-200 to-green-300 p-4 relative">
      {/* Barra superior actualizada */}
      <div className="flex justify-between items-center bg-green-300 p-2 rounded-xl mb-4">
        <input
          type="text"
          placeholder="Buscar"
          aria-label="Buscar"
          className="flex-grow rounded-full px-4 py-2 mx-4"
        />
        <div className="flex gap-4 text-black">
          <HomeIcon
            className="w-6 h-6 cursor-pointer hover:text-green-700"
            onClick={() => navigate('/PaginaPrincipal')}
          />

          <BellIcon className="w-6 h-6 cursor-pointer hover:text-green-700" />
          <div className="w-6 h-6 rounded-full bg-white border-2 border-gray-400" />
        </div>
      </div>

      <div className="flex gap-4">
        {/* Perfil lateral */}
        <div className="w-1/4 space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <span className="font-semibold">Nombre</span>
                <button
                  onClick={irAEditarPerfil}
                  className="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg">
                  Editar perfil
                </button>
            </div>
            <div className="w-16 h-16 bg-gray-300 rounded-full my-2" />
            <p>{profile.username || 'Nombre del usuario'}</p>
            <p className="text-sm text-gray-600">{profile.bio || 'Breve descripción (Puede ser opcional)'}</p>
          </div>

          <div className="bg-green-100 p-4 rounded-lg shadow h-64">
            <p className="font-bold text-center">Racha de recolección del usuario</p>
          </div>
        </div>

        {/* Publicaciones */}
        <div className="w-2/4 space-y-4">
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
              <button className="bg-green-500 text-white px-4 py-2 rounded-full text-sm hover:bg-green-600">
                Foto/Video
              </button>

              <button className="bg-green-700 text-white px-6 py-2 rounded-full text-sm hover:bg-green-800 self-end ml-auto">
                Publicar
              </button>
            </div>
          </div>

          {/* Publicaciones existentes */}
          {[1, 2].map((post, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-green-300 rounded-full" />
                <div>
                  <p className="font-semibold">Usuario</p>
                  <p className="text-xs">10 min</p>
                </div>
              </div>
              <p className="mt-2">Texto, texto, texto, texto</p>
              <div className="flex space-x-4 mt-2 text-black">
                <Heart className="w-5 h-5 cursor-pointer hover:text-green-700" />
                <MessageCircle className="w-5 h-5 cursor-pointer hover:text-green-700" />
                <Send className="w-5 h-5 cursor-pointer hover:text-green-700" />
              </div>
            </div>
          ))}
        </div>

        {/* Sección derecha */}
        <div className="w-1/4 space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="font-bold">Lista de amigos</p>
            <p className="text-sm mb-2">100 amigos</p>
            <div className="grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-full h-16 bg-gray-300 rounded" />
              ))}
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between">
              <p className="font-bold">Fotos</p>
              <p className="text-sm">Agregar fotos/video</p>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-2">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-full h-16 bg-gray-300 rounded" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal de edición */}
      {isEditing && (
        <div className="absolute top-0 left-0 w-full h-full bg-green-800 bg-opacity-95 flex items-center justify-center z-50">
          <div className="w-2/3 bg-green-800 text-black rounded-lg p-6 relative">
            <h2 className="text-2xl font-bold text-center mb-4">Editar perfil</h2>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Foto de perfil</h3>
              <button onClick={() => setIsEditing(false)} className="text-right font-semibold">Guardar cambios</button>
            </div>
            <div className="flex flex-col items-center mb-4">
              <div className="w-32 h-32 bg-gray-300 rounded-full mb-2" />
              <span className="text-sm underline flex items-center">
                <Pencil className="w-4 h-4 mr-1" /> Editar
              </span>
            </div>
            <div className="space-y-4">
              <input name="name" value={profile.name} onChange={handleChange} placeholder="Nombre" className="w-full p-2 border rounded" />
              <input name="username" value={profile.username} onChange={handleChange} placeholder="Nombre de usuario" className="w-full p-2 border rounded" />
              <input name="pronouns" value={profile.pronouns} onChange={handleChange} placeholder="Pronombres" className="w-full p-2 border rounded" />
              <textarea name="bio" value={profile.bio} onChange={handleChange} placeholder="Presentación" className="w-full p-2 border rounded" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
