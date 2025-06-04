import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; // Importamos Leaflet para el mapa
import "leaflet/dist/leaflet.css"; // Importamos estilos de Leaflet
import { Home, Bell } from "lucide-react"; // Importamos íconos para la barra superior
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para la navegación

export default function MapaCentro() {
  const [centros, setCentros] = useState([]); // Estado para almacenar los centros de acopio
  const navigate = useNavigate(); // Inicializamos useNavigate

  // Función para obtener los centros de acopio desde el backend
  useEffect(() => {
    const fetchCentros = async () => {
      try {
        const response = await fetch(
          "https://r-production-44c4.up.railway.app/centros_reciclaje/obtener"
        );
        const data = await response.json();
        setCentros(data);
      } catch (error) {
        console.error("Error al obtener los centros de acopio:", error);
      }
    };
    fetchCentros();
  }, []);

  // Función para redirigir a la pantalla PaginaPrincipal.jsx
  const handleNavigateHome = () => {
    navigate("/PaginaPrincipal");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-200 to-green-400 p-4 space-y-4">
      {/* Barra superior */}
      <div className="flex justify-between items-center bg-green-300 p-2 rounded-xl">
        <input
          type="text"
          placeholder="Buscar"
          aria-label="Buscar"
          className="flex-grow rounded-full px-4 py-2 mx-4"
        />
        <div className="flex gap-4">
          <Home className="cursor-pointer" onClick={handleNavigateHome} />
          <Bell />
          <div className="w-6 h-6 rounded-full bg-white border-2 border-gray-400" />
        </div>
      </div>

      {/* Contenido principal */}
      <div className="bg-white rounded-xl p-4">
        <p className="text-sm font-semibold">Mapa de centros de acopio</p>
        <div className="mt-4 w-full h-96 bg-gray-300 rounded-xl">
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
    </div>
  );
}
