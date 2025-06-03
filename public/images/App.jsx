
import { Router, Routes, Route } from 'react-router-dom';
import Login from '../../src/pantallas/Login';
import Registro from '../../src/pantallas/Registro';
import Cambiocontraseña from '../../src/pantallas/Cambiocontraseña';
import Presentacion from '../../src/pantallas/Presentacion';
import Guardados from '../src/pantallas/Guardados';
import EditarPerfil from '../../src/pantallas/EditarPerfil';
import Mapacentro from '../../src/pantallas/Mapacentro';
import Paginaprincipal from '../../src/pantallas/PaginaPrincipal';
import SocialProfileUI from '../../src/pantallas/SocialProfileUI';
import Pantallainicio from './pantallas/Pantallainicio';
import SocialMediaPost from '../../src/pantallas/SocialMediaPost';


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