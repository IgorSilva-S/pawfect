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
        <Route path="perfil" element={<Perfil />} />
        <Route path="cadastro" element={<Cadastro />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App
