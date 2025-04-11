
import { Router, Routes, Route } from 'react-router-dom';
import Login from './pantallas/Login';
import Registro from './pantallas/Registro';
import Cambiocontraseña from './pantallas/Cambiocontraseña';
import Presentacion from './pantallas/Presentacion';
import Perfil from './pantallas/Perfil';
import ImagePost from './pantallas/ImagePost';
import Guardados from './pantallas/Guardados';

function App() {
  return (
    <div className='flex flex-col'>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/Cambiocontraseña" element={<Cambiocontraseña />} />
        <Route path="/Presentacion" element={<Presentacion />} />
        <Route path="/Perfil" element={<Perfil />} />
        {/* <Route path="/ImagePost" element={<ImagePost/>}/>
        <Route path="/Guardados" element={<Guardados/>}/> */}
      </Routes>
    </div>
  )
}

export default App
