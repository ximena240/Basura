import React, { useEffect, useState } from "react";
import {
  MapPin,
  Heart,
  Send,
  Bookmark,
  Bell,
  Home,
  MessageCircle,
} from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; // Importamos Leaflet para el mapa
import "leaflet/dist/leaflet.css"; // Importamos estilos de Leaflet
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para la navegación


export default function HomePage() {
  const [centros, setCentros] = useState([]); // Estado para almacenar los centros de acopio
  const [contenido, setContenido] = useState(""); // Estado para el contenido de la publicación
  const [imageUrl, setImageUrl] = useState(""); // Estado para la URL de la imagen
  const [tipo, setTipo] = useState("educativo"); // Estado para el tipo de publicación
  const [publicaciones, setPublicaciones] = useState([]); // Estado para almacenar las publicaciones
  const [ranking, setRanking] = useState([]); // Estado para almacenar el ranking de usuarios
  const navigate = useNavigate(); // Inicializamos useNavigate

  // Función para obtener los centros de acopio desde el backend
  useEffect(() => {
    const fetchCentros = async () => {
      try {
        const response = await fetch(
          "https://r-dzwb.onrender.com/centros_reciclaje/obtener"
        );
        const data = await response.json();
        setCentros(data);
      } catch (error) {
        console.error("Error al obtener los centros de acopio:", error);
      }
    };
    fetchCentros();
  }, []);

  // Función para obtener las publicaciones desde el backend
  useEffect(() => {
    const fetchPublicaciones = async () => {
      try {
        const response = await fetch(
          "https://r-dzwb.onrender.com/publicaciones"
        );
        const data = await response.json();
        setPublicaciones(data);
      } catch (error) {
        console.error("Error al obtener las publicaciones:", error);
      }
    };
    fetchPublicaciones();
  }, []);

  // Función para obtener el ranking desde el backend
  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const response = await fetch(
          "https://r-dzwb.onrender.com/ranking/obtener"
        );
        const data = await response.json();
        setRanking(data);
      } catch (error) {
        console.error("Error al obtener el ranking:", error);
      }
    };
    fetchRanking();
  }, []);

  // Función para manejar el envío de la publicación
  const handleCrearPublicacion = async (e) => {
    e.preventDefault();

    // Recuperar el token del almacenamiento local
    const token = localStorage.getItem("token");

    // Crear un objeto FormData
    const formData = new FormData();
    formData.append("contenido", contenido);
    formData.append("tipo", tipo);

    // Adjuntar archivo si existe
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
          // NO pongas 'Content-Type', fetch lo gestiona con FormData
        },
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) {
        console.error("Error del servidor:", data);
        return;
      }

      console.log("Publicación creada:", data);

      // Limpiar los campos del formulario después de enviar
      setContenido("");
      setImageUrl(""); // Opcional si sigues usándolo para mostrar una preview
      setTipo("educativo");

      // Refrescar publicaciones
      const fetchPublicaciones = async () => {
        try {
          const response = await fetch("https://r-dzwb.onrender.com/publicaciones");
          const data = await response.json();
          setPublicaciones(data);
        } catch (error) {
          console.error("Error al obtener las publicaciones:", error);
        }
      };
      fetchPublicaciones();
    } catch (error) {
      console.error("Error al crear la publicación:", error);
    }
  };

  // Función para redirigir a la pantalla MapaCentro.jsx
  const handleAbrirMapa = () => {
    navigate("/MapaCentro");
  };
  const handleClick = (publicacion) => {
  navigate('/SocialMediaPost', { state: publicacion });
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-green-200 to-green-400 p-4 space-y-4">
      
      {/* Barra superior */}
      {/* Barra superior */}
      <div className="flex justify-between items-center bg-green-300 p-2 rounded-xl">
        <input
          type="text"
          placeholder="Buscar"
          aria-label="Buscar"
          className="flex-grow rounded-full px-4 py-2 mx-4"
        />
        <div className="flex gap-4">
          <Home />
          <Bell />
          <img
            src="/icon/np0.jpg"
            alt="Mi perfil"
            className="w-8 h-8 rounded-full border cursor-pointer hover:scale-105 transition"
            onClick={() => navigate("/SocialProfileUI")}
          />
        </div>
      </div>

      {/* Contenido principal */}
      <div className="grid grid-cols-4 gap-4">
        {/* Columna izquierda */}
        <div className="space-y-4 col-span-1">
          <div className="bg-white rounded-xl p-2">
            <p className="text-sm font-semibold">Encuentra centros de acopio</p>
            <div className="mt-2 w-full h-48 bg-gray-300 rounded-xl">
              {/* Mapa con Leaflet */}
              <MapContainer
                center={[22.7322, -98.9736]} // Coordenadas de Ciudad Mante, Tamaulipas, México
                zoom={13}
                className="w-full h-full rounded-xl"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {centros.map((centro, index) => (
                  <Marker
                    key={index}
                    position={[centro.latitud, centro.longitud]}
                  >
                    <Popup>
                      <p>
                        <strong>{centro.nombre}</strong>
                      </p>
                      <p>{centro.direccion}</p>
                      <p>Tipo de residuo: {centro.tipo_residuo}</p>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
          {/* Botón para abrir el mapa */}
          <button
            onClick={handleAbrirMapa}
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded w-full"
          >
            Abrir mapa
          </button>
        </div>

        {/* Columna central */}
        <div className="col-span-2 space-y-4">
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
            {publicaciones.map((publicacion, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-xl p-4 shadow-md cursor-pointer"
                onClick={() => handleClick(publicacion)}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-green-400" />
                  <span className="text-sm font-semibold">Usuario</span>
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
                  <Bookmark className="cursor-pointer hover:text-yellow-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Columna derecha */}
        <div className="col-span-1 space-y-4">
          <div className="bg-gray-100 rounded-xl p-4">
            <p className="text-sm font-bold text-center">Ranking de los usuarios</p>
            <div className="flex justify-around items-end mt-4 h-32">
              {ranking.map((usuario, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center ${
                    index === 0
                      ? "bg-green-800 h-24"
                      : index === 1
                      ? "bg-green-600 h-16"
                      : "bg-green-400 h-12"
                  } w-10 rounded-md relative`}
                >
                  {/* Mostrar puntaje encima de la barra */}
                  <span className="absolute -top-6 text-xs font-bold">{usuario.puntaje}</span>
                  <div className="w-10 h-10 bg-white rounded-full -mt-4 border" />
                  {/* Mostrar medalla debajo de la barra */}
                  <span className="text-xs mt-1">
                    {index === 0 ? "Oro" : index === 1 ? "Plata" : "Bronce"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}