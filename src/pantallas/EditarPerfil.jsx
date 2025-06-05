import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 IMPORTANTE

function EditarPerfil() {
  const [profilePicture, setProfilePicture] = useState(null);
  const [nombre, setNombre] = useState('Nombre del usuario actual');
  const [nombreUsuario, setNombreUsuario] = useState('usuario_actual');
  const [pronombres, setPronombres] = useState('');
  const [presentacion, setPresentacion] = useState('');

  const navigate = useNavigate(); // 👈 Hook para navegar

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
      // Aquí iría la lógica para subir la imagen al servidor
    }
  };

  const handleGuardarCambios = () => {
    if (!nombre || !nombreUsuario) {
      alert('El nombre y el nombre de usuario son obligatorios.');
      return;
    }

    console.log('Guardando cambios:', { profilePicture, nombre, nombreUsuario, pronombres, presentacion });
    alert('Cambios guardados!');
  };

  const handleCerrar = () => {
    navigate('/SocialProfileUI'); // 👈 Te lleva a SocialProfileUI
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-green-200">
      <div className="w-full md:w-1/3 flex flex-col items-center justify-center p-8 bg-green-300 text-gray-800 shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Tu perfil</h2>
        <div className="relative w-48 h-48 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden border-4 border-white mb-4 shadow-md">
          {profilePicture ? (
            <img src={profilePicture} alt="Foto de perfil" className="w-full h-full object-cover" />
          ) : (
            <svg className="w-24 h-24 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          )}
          <input
            type="file"
            id="profile-picture"
            accept="image/*"
            onChange={handleProfilePictureChange}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </div>
        <label htmlFor="profile-picture" className="mt-2 text-gray-800 text-lg cursor-pointer hover:underline">
          Cambiar foto de perfil
        </label>
      </div>

      <div className="w-full md:w-2/3 p-8 bg-white text-gray-800 shadow-inner overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Editar información</h2>
          <div className="flex gap-4">
            <button
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
              onClick={handleGuardarCambios}>
              Guardar cambios
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
              onClick={handleCerrar}>
              Cerrar
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label htmlFor="nombre" className="block text-gray-700 text-sm font-semibold mb-2">Nombre</label>
            <input
              type="text"
              id="nombre"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800 text-lg"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="nombre-usuario" className="block text-gray-700 text-sm font-semibold mb-2">Nombre de usuario</label>
            <input
              type="text"
              id="nombre-usuario"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800 text-lg"
              value={nombreUsuario}
              onChange={(e) => setNombreUsuario(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="pronombres" className="block text-gray-700 text-sm font-semibold mb-2">Pronombres</label>
            <input
              type="text"
              id="pronombres"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800 text-lg"
              value={pronombres}
              onChange={(e) => setPronombres(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="presentacion" className="block text-gray-700 text-sm font-semibold mb-2">Presentación</label>
            <textarea
              id="presentacion"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800 text-lg h-32 resize-y"
              value={presentacion}
              onChange={(e) => setPresentacion(e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditarPerfil;
