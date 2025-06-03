import React, { useState, useEffect } from 'react';

function EditarPerfil({ isOpen, onClose }) {
  const [profilePicture, setProfilePicture] = useState(null);
  const [nombre, setNombre] = useState('Nombre del usuario actual');
  const [nombreUsuario, setNombreUsuario] = useState('usuario_actual');
  const [pronombres, setPronombres] = useState('');
  const [presentacion, setPresentacion] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    } 

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file)); // Previsualización local
      // Aquí iría la lógica para subir la imagen al servidor
    }
  };

  const handleGuardarCambios = () => {
    if (!nombre || !nombreUsuario) {
      alert('El nombre y el nombre de usuario son obligatorios.');
      return;
    }
    
    console.log('Guardando cambios:', { profilePicture, nombre, nombreUsuario, pronombres, presentacion });
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-teal-700 rounded-lg p-6 w-full max-w-md">
        <h2 className="text-white text-xl font-semibold mb-4">Editar perfil</h2>

        {/* Foto de perfil */}
        <div className="mb-4">
          <label htmlFor="profile-picture" className="block text-white text-sm font-bold mb-2">Foto de perfil</label>
          <div className="relative w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
            {profilePicture ? (
              <img src={profilePicture} alt="Foto de perfil" className="w-full h-full object-cover" />
            ) : (
              <svg className="w-12 h-12 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
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
        </div>

        {/* Nombre */}
        <div className="mb-3">
          <label htmlFor="nombre" className="block text-white text-sm font-bold mb-1">Nombre</label>
          <input
            type="text"
            id="nombre"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        {/* Nombre de usuario */}
        <div className="mb-3">
          <label htmlFor="nombre-usuario" className="block text-white text-sm font-bold mb-1">Nombre de usuario</label>
          <input
            type="text"
            id="nombre-usuario"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            value={nombreUsuario}
            onChange={(e) => setNombreUsuario(e.target.value)}
            required
          />
        </div>

        {/* Pronombres */}
        <div className="mb-3">
          <label htmlFor="pronombres" className="block text-white text-sm font-bold mb-1">Pronombres</label>
          <input
            type="text"
            id="pronombres"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            value={pronombres}
            onChange={(e) => setPronombres(e.target.value)}
          />
        </div>

        {/* Presentación */}
        <div>
          <label htmlFor="presentacion" className="block text-white text-sm font-bold mb-1">Presentación</label>
          <textarea
            id="presentacion"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            rows="3"
            value={presentacion}
            onChange={(e) => setPresentacion(e.target.value)}
          ></textarea>
        </div>

        {/* Botones */}
        <div className="mt-6 flex justify-end">
          <button className="bg-white hover:bg-gray-100 text-teal-700 font-semibold py-2 px-4 rounded" onClick={handleGuardarCambios}>
            Guardar cambios
          </button>
          <button className="ml-3 text-white hover:text-gray-300 font-semibold py-2 px-4 rounded" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditarPerfil;