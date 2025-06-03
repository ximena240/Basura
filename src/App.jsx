
import { Router, Routes, Route } from 'react-router-dom';
import Login from './pantallas/Login';
import Registro from './pantallas/Registro';
import Cambiocontraseña from './pantallas/Cambiocontraseña';
import Presentacion from './pantallas/Presentacion';
import Guardados from './pantallas/Guardados';
import EditarPerfil from './pantallas/EditarPerfil';
import Mapacentro from './pantallas/Mapacentro';
import Paginaprincipal from './pantallas/PaginaPrincipal';
import SocialProfileUI from './pantallas/SocialProfileUI';
import Pantallainicio from './pantallas/Pantallainicio';
import SocialMediaPost from './pantallas/SocialMediaPost';


function App() {
  return (
    <div className='flex flex-col'>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/Cambiocontraseña" element={<Cambiocontraseña />} />
        <Route path="/Presentacion" element={<Presentacion />} />
        <Route path="/Guardados" element={<Guardados/>}/>
        <Route path="/EditarPerfil" element={<EditarPerfil/>}/>
        <Route path="/Mapacentro" element={<Mapacentro />} />
        <Route path="/Paginaprincipal" element={<Paginaprincipal />} />
        <Route path="/SocialProfileUI" element={<SocialProfileUI />} />
        <Route path="/Pantallainicio" element={<Pantallainicio />} />
        <Route path="/SocialMediaPost" element={<SocialMediaPost />} />

      </Routes>
    </div>
  )
}

export default App; 