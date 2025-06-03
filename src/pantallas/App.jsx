
import { Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Registro from './Registro';
import Cambiocontraseña from './Cambiocontraseña';
import Presentacion from './Presentacion';
import Guardados from './Guardados';
import EditarPerfil from './EditarPerfil';
import Mapacentro from './Mapacentro';
import Paginaprincipal from './PaginaPrincipal';
import SocialProfileUI from './SocialProfileUI';
import Pantallainicio from './Pantallainicio';
import SocialMediaPost from './SocialMediaPost';

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