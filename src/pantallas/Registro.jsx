import React, { useState } from 'react';

function Registro() {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    correoElectronico: '',
    confirmarCorreoElectronico: '',
    contrasena: '',
    confirmarContrasena: '',
    fechaNacimiento: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log(formData);
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-t from-[#4D774E] to-[#164A41] flex justify-center items-center">
      <div className="w-1/2 h-auto p-8 flex flex-col justify-center items-center bg-white opacity-100 rounded-4xl">
        <h1 className="text-4xl font-bold text-center mb-6">Crear una cuenta</h1>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label htmlFor="nombreCompleto" className="block text-gray-700 text-sm font-bold mb-2"></label>
            <input
              type="text"
              id="nombreCompleto"
              name="nombreCompleto"
              placeholder="Nombre completo"
              value={formData.nombreCompleto}
              onChange={handleChange}
              className="w-full bg-[#4D774E] text-white rounded-2xl shadow-lg p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="fechaNacimiento" className="block text-gray-700 text-sm font-bold mb-2">Fecha de nacimiento:</label>
            <input
              type="date"
              id="fechaNacimiento"
              name="fechaNacimiento"
              value={formData.fechaNacimiento}
              onChange={handleChange}
              className="w-full bg-[#4D774E] text-white rounded-2xl shadow-lg p-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="correoElectronico" className="block text-gray-700 text-sm font-bold mb-2"></label>
            <input
              type="email"
              id="correoElectronico"
              name="correoElectronico"
              placeholder="Correo electrónico"
              value={formData.correoElectronico}
              onChange={handleChange}
              className="w-full bg-[#4D774E] text-white rounded-2xl shadow-lg p-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="confirmarCorreoElectronico" className="block text-gray-700 text-sm font-bold mb-2"></label>
            <input
              type="email"
              id="confirmarCorreoElectronico"
              name="confirmarCorreoElectronico"
              placeholder="Confirmar correo electrónico"
              value={formData.confirmarCorreoElectronico}
              onChange={handleChange}
              className="w-full bg-[#4D774E] text-white rounded-2xl shadow-lg p-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="contrasena" className="block text-gray-700 text-sm font-bold mb-2"></label>
            <input
              type="password"
              id="contrasena"
              name="contrasena"
              placeholder="Contraseña"
              value={formData.contrasena}
              onChange={handleChange}
              className="w-full bg-[#4D774E] text-white rounded-2xl shadow-lg p-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="confirmarContrasena" className="block text-gray-700 text-sm font-bold mb-2"></label>
            <input
              type="password"
              id="confirmarContrasena"
              name="confirmarContrasena"
              placeholder="Confirmar contraseña"
              value={formData.confirmarContrasena}
              onChange={handleChange}
              className="w-full bg-[#4D774E] text-white rounded-2xl shadow-lg p-2"
            />
          </div>

        <div className='flex items-center mb-4'></div>
          <button type="submit" className="bg-[#164A41] hover:bg-[#9DC88D] text-white font-bold py-2 px-4 rounded-2xl mt-6 flex">Crear cuenta</button>
          <a className="inline-block align-baseline font-stretch-90% text-sm text-[#010101] hover:text-[#9DC88D]" href="#">
            ¿Ya tienes una cuenta? Inicia sesión aquí
          </a>
        </form>
      </div>
    </div>
  );
}

export default Registro; 