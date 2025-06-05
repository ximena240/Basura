import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";

const SocialMediaPost = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Aquí recibes el post que enviaste por navigate en el state
  const post = location.state;


  // Para evitar que rompa si no hay datos (por ejemplo entrando directo)
  if (!post) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>No se encontró la publicación.</p>
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
        {/* Si tienes imagen, la pones */}
        {post.imageUrl ? (
          <img src={post.imageUrl} alt="Post" className="max-w-full max-h-full object-contain" />
        ) : (
          <span className="text-white text-xl">Imagen/video</span>
        )}
      </div>

      <div className="w-2/5 bg-[#B8E1A3]">
        <div className="flex justify-between m-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <div className="ml-3">
              {/* Aquí pones el nombre dinámico */}
              <p className="font-semibold">{post.username}</p>
              {/* Y el tiempo también */}
              <p className="text-gray-600">{post.time}</p>
            </div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </div>
        </div>
        {/* Aquí el texto del post dinámico */}
        <h3 className="font-semibold px-4">{post.description}</h3>
        <div className="flex m-4">
          <div className="flex items-center mr-4">
            <span className="mr-2">
              {/* Icono corazón */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.835 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </span>
            {/* Aquí los likes dinámicos */}
            <span>{post.likes}</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">
              {/* Icono compartir */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </span>
            {/* Aquí los shares dinámicos */}
            <span>{post.shares}</span>
          </div>
        </div>

        <div className="flex items-center m-4">
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          <button className="flex-grow bg-white rounded-full py-3 px-4 text-gray-500 text-left">
            Agregar un comentario
          </button>
          <span className="text-gray-600 text-sm ml-4">5 de 20</span>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaPost;
