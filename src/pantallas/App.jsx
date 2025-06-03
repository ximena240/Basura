
import { Router, Routes, Route } from 'react-router-dom';
import Login from './pantallas/Login';
import Registro from './pantallas/Registro';
import Cambiocontraseña from './pantallas/Cambiocontraseña';
import Presentacion from './pantallas/Presentacion';
import ImagePost from './pantallas/ImagePost';
import Guardados from './pantallas/Guardados';
import EditarPerfil from './EditarPerfil';
import Mapacentro from './Mapacentro';
import Paginaprincipal from './PaginaPrincipal';
import UserProfile from './UserProfile';




function App() {
  return (
    <div className='flex flex-col'>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/Cambiocontraseña" element={<Cambiocontraseña />} />
        <Route path="/Presentacion" element={<Presentacion />} />   
        <Route path="/ImagePost" element={<ImagePost/>}/>
        <Route path="/Guardados" element={<Guardados/>}/>
        <Route path="/EditarPerfil" element={<EditarPerfil/>}/> 
        <Route path="/Mapacentro" element={<Mapacentro />} />
        <Route path="/Paginaprincipal" element={<Paginaprincipal />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        
      </Routes>
    </div>
  )
}