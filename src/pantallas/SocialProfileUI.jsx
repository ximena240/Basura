import React, { useState } from 'react';

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

  const icons = {
    home: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75L12 3l9 6.75v10.5A2.25 2.25 0 0118.75 24H5.25A2.25 2.25 0 013 20.25V9.75z" />
      </svg>
    ),
    comment: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 002-2V5a2 2 0 00-2-2H3a2 2 0 00-2 2v8a2 2 0 002 2h4l5 5v-5h9z" />
      </svg>
    ),
    send: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13" /><path strokeLinecap="round" strokeLinejoin="round" d="M22 2L15 22L11 13L2 9L22 2Z" />
      </svg>
    ),
    bookmark: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3h14a2 2 0 012 2v16l-9-4-9 4V5a2 2 0 012-2z" />
      </svg>
    ),
    pencil: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4 12.5-12.5z" />
      </svg>
    )
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-200 to-green-300 p-4 relative">
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Buscar"
          className="w-full max-w-xl px-4 py-2 rounded-full border border-gray-300 focus:outline-none"
        />
        <div className="flex space-x-4 ml-4 text-black">
          {icons.home}
          {icons.comment}
          {icons.send}
          {icons.bookmark}
          <div className="w-6 h-6 bg-black rounded-full" />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="w-1/4 space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <span className="font-semibold">Nombre</span>
              <button className="text-sm text-blue-500" onClick={() => setIsEditing(true)}>Editar perfil</button>
            </div>
            <div className="w-16 h-16 bg-gray-300 rounded-full my-2" />
            <p>{profile.username || 'Nombre del usuario'}</p>
            <p className="text-sm text-gray-600">{profile.bio || 'Breve descripción (Puede ser opcional)'}</p>
          </div>

          <div className="bg-green-100 p-4 rounded-lg shadow h-64">
            <p className="font-bold text-center">Racha de recolección del usuario</p>
          </div>
        </div>

        <div className="w-2/4 space-y-4">
          <div className="bg-gray-200 p-4 rounded-lg shadow">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-300 rounded-full" />
              <textarea
                placeholder="Crear una publicación"
                className="flex-1 bg-transparent text-black focus:outline-none resize-none border rounded p-2"
              />
            </div>
            <div className="flex justify-start mt-2 text-white space-x-4">
              <span>Foto/video</span>
            </div>
          </div>

          {[1, 2].map((post, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded-lg shadow">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-green-300 rounded-full" />
                <div>
                  <p className="font-semibold">Usuario</p>
                  <p className="text-xs">10 min</p>
                </div>
              </div>
              <p className="mt-2">Texto, texto, texto, texto</p>
              <div className="flex justify-between mt-2">
                <div className="flex space-x-2">
                  {icons.bookmark}
                  {icons.comment}
                  {icons.send}
                </div>
                {icons.bookmark}
              </div>
            </div>
          ))}
        </div>

        <div className="w-1/4 space-y-4">
          <div className="bg-green-200 p-4 rounded-lg shadow">
            <p className="font-bold">Lista de amigos</p>
            <p className="text-sm mb-2">100 amigos</p>
            <div className="grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-full h-16 bg-gray-300 rounded" />
              ))}
            </div>
          </div>

          <div className="bg-green-200 p-4 rounded-lg shadow">
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
              <span className="text-sm underline flex items-center">{icons.pencil}<span className="ml-1">Editar</span></span>
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
