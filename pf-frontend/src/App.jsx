import { useState } from 'react'
import './App.css'
import TitleBar from './components/titleBar'
import Footer from './components/footer';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import User from './components/user';
import CartVazio from './components/cart/vazioo';
import CartCheio from './components/cart/cheio';
import Lcart from './components/cart/loading';
import LikesPage from './components/likes'
import Perfil from "./components/user/perfil";
import Cadastro from "./components/user/cadastro";
import Dados from "./components/user/dados";
import Lpedidos from './components/user/pedidos/loading';
import PedidosCheio from "./components/user/pedidos/cheio";
import PedidosVazio from "./components/user/pedidos/vazioo";
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
import PaginaCategoriaAnimal from './components/produtos/categoria-animal';
import NotaFiscal from './components/nota-fiscal';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TitleBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Lcart />} />
        <Route path="/cart/vazio" element={<CartVazio />} />
        <Route path="/cart/cheio" element={<CartCheio />} />
        <Route path="/liked" element={<LikesPage />} />
        <Route path="/user" element={<User />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/dados" element={<Dados />} />
        <Route path="/pedidos" element={<Lpedidos />} />
        <Route path="/pedidos/vazio" element={<PedidosVazio />} />
        <Route path="/pedidos/cheio" element={<PedidosCheio />} />
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
        <Route path="/:animal/:id" element={<PaginaCategoriaAnimal />} />
        <Route path="/nota-fiscal" element={<NotaFiscal />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
