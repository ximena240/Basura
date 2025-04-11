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
    <div className="h-screen w-screen bg-gradient-to-t from-[#164A41] to-[#4D774E] flex justify-center items-center">
      <div className="w-1/2 h-auto p-8 flex flex-col justify-center items-center bg-[#D9D9D9] opacity-100 rounded-4xl">
        <h1 className="text-4xl font-bold text-center mb-6">Crear una cuenta</h1>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label htmlFor="nombreCompleto" className="block text-gray-700 text-sm font-bold mb-2">Nombre completo:</label>
            <input
              type="text"
              id="nombreCompleto"
              name="nombreCompleto"
              placeholder="Nombre completo"
              value={formData.nombreCompleto}
              onChange={handleChange}
              className="w-full bg-[#164A41] text-white rounded-md shadow-lg p-2"
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
              className="w-full bg-[#164A41] text-white rounded-md shadow-lg p-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="correoElectronico" className="block text-gray-700 text-sm font-bold mb-2">Correo electrónico:</label>
            <input
              type="email"
              id="correoElectronico"
              name="correoElectronico"
              placeholder="Correo electrónico"
              value={formData.correoElectronico}
              onChange={handleChange}
              className="w-full bg-[#164A41] text-white rounded-md shadow-lg p-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="confirmarCorreoElectronico" className="block text-gray-700 text-sm font-bold mb-2">Confirmar correo electrónico:</label>
            <input
              type="email"
              id="confirmarCorreoElectronico"
              name="confirmarCorreoElectronico"
              placeholder="Confirmar correo electrónico"
              value={formData.confirmarCorreoElectronico}
              onChange={handleChange}
              className="w-full bg-[#164A41] text-white rounded-md shadow-lg p-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="contrasena" className="block text-gray-700 text-sm font-bold mb-2">Contraseña:</label>
            <input
              type="password"
              id="contrasena"
              name="contrasena"
              placeholder="Contraseña"
              value={formData.contrasena}
              onChange={handleChange}
              className="w-full bg-[#164A41] text-white rounded-md shadow-lg p-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="confirmarContrasena" className="block text-gray-700 text-sm font-bold mb-2">Confirmar contraseña:</label>
            <input
              type="password"
              id="confirmarContrasena"
              name="confirmarContrasena"
              placeholder="Confirmar contraseña"
              value={formData.confirmarContrasena}
              onChange={handleChange}
              className="w-full bg-[#164A41] text-white rounded-md shadow-lg p-2"
            />
          </div>

        

          <button type="submit" className="bg-[#4D774E] text-white font-bold py-2 px-4 rounded-md mt-6">Crear cuenta</button>
        </form>
      </div>
    </div>
  );
}

export default Registro;