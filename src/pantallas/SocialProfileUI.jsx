import React, { useState, useEffect } from 'react';
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

  const [contenido, setContenido] = useState(""); // Estado para el contenido de la publicación
  const [imageUrl, setImageUrl] = useState(""); // Estado para la URL de la imagen
  const [tipo, setTipo] = useState("educativo"); // Estado para el tipo de publicación
  const [publicacionesConUsuarios, setPublicacionesConUsuarios] = useState([]); // Estado para almacenar las publicaciones con usuarios
  const [lastPublicacion, setLastPublicacion] = useState(null);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchPublicaciones = async () => {
      try {
        const response = await fetch("https://r-dzwb.onrender.com/publicaciones");
        const data = await response.json();
        const userId = localStorage.getItem("user_id"); // Obtener el ID del usuario desde localStorage
        const lastPublicacionId = localStorage.getItem("last_publicacion_id"); // Obtener el ID de la última publicación

        const publicacionesFiltradas = data.filter(
          (publicacion) =>
            publicacion.usuario_id === parseInt(userId, 10) &&
            publicacion.id !== parseInt(lastPublicacionId, 10) // Excluir la publicación con el ID guardado
        );

        // Fetch user names for each publication
        const publicacionesConUsuarios = await Promise.all(
          publicacionesFiltradas.map(async (publicacion) => {
            try {
              const userResponse = await fetch(
                `https://r-dzwb.onrender.com/usuario/${publicacion.usuario_id}`
              );
              if (!userResponse.ok) {
                throw new Error("Error al obtener el usuario");
              }
              const userData = await userResponse.json();
              return { ...publicacion, nombre_usuario: userData.nombre_usuario };
            } catch (error) {
              console.error("Error al obtener el usuario:", error);
              return { ...publicacion, nombre_usuario: "Usuario desconocido" };
            }
          })
        );

        setPublicacionesConUsuarios(publicacionesConUsuarios);
      } catch (error) {
        console.error("Error al obtener las publicaciones:", error);
      }
    };
    fetchPublicaciones();
  }, []);

  useEffect(() => {
    const fetchLastPublicacion = async () => {
      const lastPublicacionId = localStorage.getItem("last_publicacion_id");
      const userId = localStorage.getItem("user_id");

      if (lastPublicacionId) {
        try {
          const response = await fetch(
            `https://r-dzwb.onrender.com/publicaciones/${lastPublicacionId}`
          );
          if (!response.ok) {
            throw new Error("Error al obtener la última publicación");
          }
          const data = await response.json();
          setLastPublicacion(data);
        } catch (error) {
          console.error("Error al obtener la última publicación:", error);
        }
      }

      if (userId) {
        try {
          const userResponse = await fetch(
            `https://r-dzwb.onrender.com/usuario/${userId}`
          );
          if (!userResponse.ok) {
            throw new Error("Error al obtener el nombre del usuario");
          }
          const userData = await userResponse.json();
          setUserName(userData.nombre_usuario);
        } catch (error) {
          console.error("Error al obtener el nombre del usuario:", error);
        }
      }
    };

    fetchLastPublicacion();
  }, []);

  const handleCrearPublicacion = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("contenido", contenido);
    formData.append("tipo", tipo);

    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput.files[0]) {
      formData.append("image", fileInput.files[0]);
    } else {
      console.error("No se seleccionó una imagen.");
      return;
    }

    try {
      const response = await fetch("https://r-dzwb.onrender.com/publicaciones", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) {
        console.error("Error del servidor:", data);
        return;
      }

      console.log("Publicación creada:", data);

      setContenido("");
      setImageUrl("");
      setTipo("educativo");

      const fetchPublicaciones = async () => {
        try {
          const response = await fetch("https://r-dzwb.onrender.com/publicaciones");
          const data = await response.json();
          const userId = localStorage.getItem("user_id"); // Obtener el ID del usuario desde localStorage
          const publicacionesFiltradas = data.filter(
            (publicacion) => publicacion.usuario_id === parseInt(userId, 10)
          );

          // Fetch user names for each publication
          const publicacionesConUsuarios = await Promise.all(
            publicacionesFiltradas.map(async (publicacion) => {
              try {
                const userResponse = await fetch(
                  `https://r-dzwb.onrender.com/usuario/${publicacion.usuario_id}`
                );
                if (!userResponse.ok) {
                  throw new Error("Error al obtener el usuario");
                }
                const userData = await userResponse.json();
                return { ...publicacion, nombre_usuario: userData.nombre_usuario };
              } catch (error) {
                console.error("Error al obtener el usuario:", error);
                return { ...publicacion, nombre_usuario: "Usuario desconocido" };
              }
            })
          );

          setPublicacionesConUsuarios(publicacionesConUsuarios);
        } catch (error) {
          console.error("Error al obtener las publicaciones:", error);
        }
      };
      fetchPublicaciones();
    } catch (error) {
      console.error("Error al crear la publicación:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const navigate = useNavigate();

  const irAEditarPerfil = () => {
    navigate('/editarperfil');
  };

  const handleClick = (publicacion) => {
    navigate('/SocialMediaPost', { state: publicacion });
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
              <span className="font-semibold">{userName || "Nombre del usuario"}</span>
              <button
                onClick={irAEditarPerfil}
                className="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg"
              >
                Editar perfil
              </button>
            </div>
            <div className="w-16 h-16 bg-gray-300 rounded-full my-2 overflow-hidden">
              {lastPublicacion?.imageurl ? (
                <img
                  src={`https://r-dzwb.onrender.com/uploads/${lastPublicacion.imageurl}`}
                  alt="Última publicación"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-500 text-sm">Sin imagen</span>
              )}
            </div>
            <p className="text-sm text-gray-600">
              {lastPublicacion?.contenido || "Sin descripción"}
            </p>
          </div>

          <div className="bg-green-100 p-4 rounded-lg shadow h-64">
            <p className="font-bold text-center">Racha de recolección del usuario</p>
          </div>
        </div>

        {/* Publicaciones */}
        <div className="w-2/4 space-y-4">
          {/* Crear publicación */}
          <div className="bg-white p-4 rounded-lg shadow flex flex-col space-y-4">
            <form onSubmit={handleCrearPublicacion} className="space-y-4">
              <div className="flex flex-col space-y-3">
                <textarea
                  placeholder="¿Qué estás pensando?"
                  value={contenido}
                  onChange={(e) => setContenido(e.target.value)}
                  className="flex-1 bg-gray-100 rounded-lg p-3 text-black focus:outline-none resize-none"
                  rows={3}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Tipo de publicación:
                </label>
                <select
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                  className="w-full p-2 border rounded bg-gray-100"
                >
                  <option value="educativo">Educativo</option>
                  <option value="queja">Queja</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Imagen:
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = () => setImageUrl(reader.result);
                      reader.readAsDataURL(file);
                    }
                  }}
                  className="w-full p-2 border rounded bg-gray-100"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-green-700 text-white px-6 py-2 rounded-full text-sm hover:bg-green-800 self-end ml-auto"
                >
                  Publicar
                </button>
              </div>
            </form>
          </div>

          {/* Mostrar publicaciones */}
          <div className="space-y-4">
            {publicacionesConUsuarios.map((publicacion, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-xl p-4 shadow-md cursor-pointer"
                onClick={() => handleClick(publicacion)}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-green-400" />
                  <span className="text-sm font-semibold">
                    {publicacion.nombre_usuario || "Usuario desconocido"}
                  </span>
                  <span className="text-xs text-gray-500">Hace un momento</span>
                </div>
                <p className="text-sm text-gray-700 mb-2">
                  {publicacion.contenido}
                </p>
                {publicacion.imageurl && (
                  <img
                    src={`https://r-dzwb.onrender.com/uploads/${publicacion.imageurl}`}
                    alt="Publicación"
                    className="w-full h-32 object-cover rounded-xl"
                  />
                )}
                <div className="flex justify-between mt-2">
                  <div className="flex gap-4">
                    <Heart className="cursor-pointer hover:text-red-500" />
                    <MessageCircle className="cursor-pointer hover:text-green-700" />
                    <Send className="cursor-pointer hover:text-blue-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
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
