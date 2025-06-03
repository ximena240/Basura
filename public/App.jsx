
import { Router, Routes, Route } from 'react-router-dom';
import Login from '../src/pantallas/Login';
import Registro from '../src/pantallas/Registro';
import Cambiocontraseña from '../src/pantallas/Cambiocontraseña';
import Presentacion from '../src/pantallas/Presentacion';
import Guardados from '../src/pantallas/Guardados';
import EditarPerfil from '../src/pantallas/EditarPerfil';
import Mapacentro from '../src/pantallas/Mapacentro';
import Paginaprincipal from '../src/pantallas/PaginaPrincipal';
import Historias from './Historias';
import UserProfile from './UserProfile';


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
        <Route path="/Historias" element={<Historias/>}/> 
        <Route path="/Mapacentro" element={<Mapacentro />} />
        <Route path="/Paginaprincipal" element={<Paginaprincipal />} />
        <Route path="/UserProfile" element={<UserProfile />} />
      </Routes>
    </div>
  )
}
export default App;