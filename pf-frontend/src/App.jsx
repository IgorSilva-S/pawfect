import { useState } from 'react'
import './App.css'
import TitleBar from './components/titleBar'
import Footer from './components/footer';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import User from './components/user';
import Cart from './components/cart';
import LikesPage from './components/likes'
import Perfil from "./components/user/perfil";
import Cadastro from "./components/user/cadastro";
import Dados from "./components/user/dados";
import Pedidos from "./components/user/pedidos";
import Gatos from "./components/produtos/gatos"
import Caes from "./components/produtos/caes"
import Passaros from "./components/produtos/passaros"
import Roedores from "./components/produtos/roedores"
import Peixes from "./components/produtos/peixes"
import Materia1 from "./components/materias/materia1";
import Materia2 from "./components/materias/materia2";
import Materia3 from "./components/materias/materia3";
import Materia4 from "./components/materias/materia4";
import Materia5 from "./components/materias/materia5";
import SubGato1 from './components/produtos/gatos/sub-gatos/subgato1'; 
import SubGato2 from './components/produtos/gatos/sub-gatos/subgato2'; 
import SubGato3 from './components/produtos/gatos/sub-gatos/subgato3';
import SubGato4 from './components/produtos/gatos/sub-gatos/subgato4';
import SubGato5 from './components/produtos/gatos/sub-gatos/subgato5';
import SubGato6 from './components/produtos/gatos/sub-gatos/subgato6';
import SubGato7 from './components/produtos/gatos/sub-gatos/subgato7';
import SubGato8 from './components/produtos/gatos/sub-gatos/subgato8';
import SubGato9 from './components/produtos/gatos/sub-gatos/subgato9';
import SubGato10 from './components/produtos/gatos/sub-gatos/subgato10';
import SubGato11 from './components/produtos/gatos/sub-gatos/subgato11';
import SubGato12 from './components/produtos/gatos/sub-gatos/subgato12';
import SubGato13 from './components/produtos/gatos/sub-gatos/subgato13';
import SubGato14 from './components/produtos/gatos/sub-gatos/subgato14';  
import SubGato15 from './components/produtos/gatos/sub-gatos/subgato15';
import SubGato16 from './components/produtos/gatos/sub-gatos/subgato16';  
import SubGato17 from './components/produtos/gatos/sub-gatos/subgato17';
import SubGato18 from './components/produtos/gatos/sub-gatos/subgato18';
import SubGato19 from './components/produtos/gatos/sub-gatos/subgato19';
import SubGato20 from './components/produtos/gatos/sub-gatos/subgato20';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <TitleBar />
     <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/liked" element={<LikesPage />} />
        <Route path="/user" element={<User />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/dados" element={<Dados />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/gatos" element={<Gatos />} />
        <Route path="/caes" element={<Caes />} />
        <Route path="/passaros" element={<Passaros />} />
        <Route path="/roedores" element={<Roedores />} />
        <Route path="/peixes" element={<Peixes />} />
        <Route path="/materia1" element={<Materia1 />} />
        <Route path="/materia2" element={<Materia2 />} /> 
        <Route path="/materia3" element={<Materia3 />} />
        <Route path="/materia4" element={<Materia4 />} />
        <Route path="/materia5" element={<Materia5 />} />
        <Route path="/subgato1" element={<SubGato1 />} />
        <Route path="/subgato2" element={<SubGato2 />} />
        <Route path="/subgato3" element={<SubGato3 />} />
        <Route path="/subgato4" element={<SubGato4 />} />
        <Route path="/subgato5" element={<SubGato5 />} />
        <Route path="/subgato6" element={<SubGato6 />} />
        <Route path="/subgato7" element={<SubGato7 />} />
        <Route path="/subgato8" element={<SubGato8 />} />
        <Route path="/subgato9" element={<SubGato9 />} />
        <Route path="/subgato10" element={<SubGato10 />} />
        <Route path="/subgato11" element={<SubGato11 />} />
        <Route path="/subgato12" element={<SubGato12 />} />
        <Route path="/subgato13" element={<SubGato13 />} />
        <Route path="/subgato14" element={<SubGato14 />} />
        <Route path="/subgato15" element={<SubGato15 />} />
        <Route path="/subgato16" element={<SubGato16 />} />
        <Route path="/subgato17" element={<SubGato17 />} />
        <Route path="/subgato18" element={<SubGato18 />} />
        <Route path="/subgato19" element={<SubGato19 />} />
        <Route path="/subgato20" element={<SubGato20 />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App
