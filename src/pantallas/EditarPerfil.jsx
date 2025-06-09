import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 IMPORTANTE

function EditarPerfil() {
  const [profilePicture, setProfilePicture] = useState(null);
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [nombreUsuario, setNombreUsuario] = useState('usuario_actual');
  const [telefono, setTelefono] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [presentacion, setPresentacion] = useState('');

  const navigate = useNavigate(); // 👈 Hook para navegar

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
      // Aquí iría la lógica para subir la imagen al servidor
    }
  };

  const handleGuardarCambios = async () => {
    const userId = localStorage.getItem("user_id"); // Obtener el ID del usuario desde localStorage
    const token = localStorage.getItem("token"); // Obtener el token desde localStorage

    if (!nombre || !apellido || !telefono || !fechaNacimiento || !userId || !token) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    const payload = {
      user_id: parseInt(userId, 10),
      nombre,
      apellido,
      telefono,
      fecha_nacimiento_str: fechaNacimiento,
    };

    try {
      const response = await fetch("https://r-dzwb.onrender.com/datos_personales/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Error al guardar los datos personales.");
      }

      const data = await response.json();
      console.log("Datos personales guardados:", data);

      // Crear publicación automáticamente
      if (presentacion || profilePicture) {
        const formData = new FormData();
        formData.append("contenido", presentacion || "Actualización de foto de perfil");
        formData.append("tipo", "educativo");

        if (profilePicture) {
          const fileInput = document.querySelector('input[type="file"]');
          if (fileInput.files[0]) {
            formData.append("image", fileInput.files[0]);
          }
        }

        const publicacionResponse = await fetch("https://r-dzwb.onrender.com/publicaciones", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });

        if (!publicacionResponse.ok) {
          throw new Error("Error al crear la publicación.");
        }

        const publicacionData = await publicacionResponse.json();
        console.log("Publicación creada:", publicacionData);

        // Guardar el ID de la publicación en localStorage
        localStorage.setItem("last_publicacion_id", publicacionData.id);
      }

      alert("Cambios guardados exitosamente.");
    } catch (error) {
      console.error("Error al guardar los datos personales o crear la publicación:", error);
      alert("Error al guardar los cambios.");
    }
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
              onClick={handleGuardarCambios}
            >
              Guardar cambios
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
              onClick={handleCerrar}
            >
              Cerrar
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-1/2">
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
            <div className="w-1/2">
              <label htmlFor="apellido" className="block text-gray-700 text-sm font-semibold mb-2">Apellido</label>
              <input
                type="text"
                id="apellido"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800 text-lg"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="telefono" className="block text-gray-700 text-sm font-semibold mb-2">Teléfono</label>
            <input
              type="tel"
              id="telefono"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800 text-lg"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="fecha-nacimiento" className="block text-gray-700 text-sm font-semibold mb-2">Fecha de nacimiento</label>
            <input
              type="date"
              id="fecha-nacimiento"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800 text-lg"
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="presentacion" className="block text-gray-700 text-sm font-semibold mb-2">Descripción</label>
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
