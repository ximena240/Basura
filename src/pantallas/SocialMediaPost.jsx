import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function SocialMediaPost() {
  const location = useLocation();
  const navigate = useNavigate();
  const [publicacion, setPublicacion] = useState(null);
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState("");
  const publicacionId = location.state?.id; // Assuming the ID is passed via state

  useEffect(() => {
    const fetchPublicacion = async () => {
      try {
        const response = await fetch(
          `https://r-dzwb.onrender.com/publicaciones/${publicacionId}`
        );
        if (!response.ok) {
          throw new Error("Error al obtener la publicación");
        }
        const data = await response.json();
        setPublicacion(data);
      } catch (error) {
        console.error("Error al obtener la publicación:", error);
      }
    };

    const fetchComentarios = async () => {
      try {
        const response = await fetch(
          `https://r-dzwb.onrender.com/publicaciones/${publicacionId}/comentarios`
        );
        if (!response.ok) {
          throw new Error("Error al obtener los comentarios");
        }
        const data = await response.json();

        // Fetch user names for each comment using usuario_id
        const comentariosConUsuarios = await Promise.all(
          data.map(async (comentario) => {
            try {
              const userResponse = await fetch(
                `https://r-dzwb.onrender.com/usuario/${comentario.usuario_id}`
              );
              if (!userResponse.ok) {
                throw new Error("Error al obtener el usuario");
              }
              const userData = await userResponse.json();
              return { ...comentario, nombre_usuario: userData.nombre_usuario };
            } catch (error) {
              console.error("Error al obtener el usuario:", error);
              return { ...comentario, nombre_usuario: "Usuario desconocido" };
            }
          })
        );

        setComentarios(comentariosConUsuarios);
      } catch (error) {
        console.error("Error al obtener los comentarios:", error);
      }
    };

    if (publicacionId) {
      fetchPublicacion();
      fetchComentarios();
    }
  }, [publicacionId]);

  const handleAgregarComentario = async () => {
    const userId = localStorage.getItem("user_id"); // Assuming user_id is stored in localStorage
    if (!userId || !nuevoComentario.trim()) {
      console.error("Faltan datos para agregar el comentario.");
      return;
    }

    const payload = {
      user_id: parseInt(userId, 10),
      publicacion_id: publicacionId,
      contenido: nuevoComentario,
    };

    try {
      const response = await fetch("https://r-dzwb.onrender.com/comentarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Error al agregar el comentario");
      }

      const data = await response.json();
      console.log("Comentario agregado:", data);

      // Refrescar comentarios
      const fetchComentarios = async () => {
        try {
          const response = await fetch(
            `https://r-dzwb.onrender.com/publicaciones/${publicacionId}/comentarios`
          );
          const data = await response.json();

          const comentariosConUsuarios = await Promise.all(
            data.map(async (comentario) => {
              try {
                const userResponse = await fetch(
                  `https://r-dzwb.onrender.com/usuario/${comentario.usuario_id}`
                );
                if (!userResponse.ok) {
                  throw new Error("Error al obtener el usuario");
                }
                const userData = await userResponse.json();
                return { ...comentario, nombre_usuario: userData.nombre_usuario };
              } catch (error) {
                console.error("Error al obtener el usuario:", error);
                return { ...comentario, nombre_usuario: "Usuario desconocido" };
              }
            })
          );

          setComentarios(comentariosConUsuarios);
        } catch (error) {
          console.error("Error al obtener los comentarios:", error);
        }
      };
      fetchComentarios();

      // Limpiar el campo de comentario
      setNuevoComentario("");
    } catch (error) {
      console.error("Error al agregar el comentario:", error);
    }
  };

  if (!publicacion) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Cargando publicación...</p>
        <button 
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => navigate('/')}
        >
          Volver al inicio
        </button>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-[#DDE1D4]">
      <div className="w-3/5 bg-[#AAB8A3] flex items-center justify-center">
        {publicacion.imageurl ? (
          <img
            src={`https://r-dzwb.onrender.com/uploads/${publicacion.imageurl}`}
            alt="Publicación"
            className="max-w-full max-h-full object-contain"
          />
        ) : (
          <span className="text-white text-xl">Imagen/video</span>
        )}
      </div>

      <div className="w-2/5 bg-[#B8E1A3]">
        <div className="flex justify-between m-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <div className="ml-3">
              <p className="font-semibold">{publicacion.username}</p>
              <p className="text-gray-600">{publicacion.time}</p>
            </div>
          </div>
        </div>
        <h3 className="font-semibold px-4">{publicacion.contenido}</h3>

        {/* Comentarios */}
        <div className="m-4">
          <h4 className="font-semibold mb-2">Comentarios:</h4>
          <div className="mt-4 flex items-center">
            <input
              type="text"
              placeholder="Escribe un comentario..."
              value={nuevoComentario}
              onChange={(e) => setNuevoComentario(e.target.value)}
              className="flex-grow bg-white rounded-full py-2 px-4 text-gray-500"
            />
            <button
              onClick={handleAgregarComentario}
              className="ml-4 px-4 py-2 bg-green-500 text-white rounded"
            >
              Comentar
            </button>
          </div>
          <div className="space-y-2 mt-4">
            {comentarios.map((comentario, index) => (
              <div key={index} className="bg-white p-2 rounded shadow">
                <p className="font-semibold">{comentario.nombre_usuario}</p>
                <p>{comentario.contenido}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}