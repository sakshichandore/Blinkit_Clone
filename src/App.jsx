import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import Navbar from './pages/Navbar';
import Reg from "./pages/Reg";
import Homepage from './pages/Homepage';
import Cart from "./pages/Cart";
import Footer from "./pages/Footer";
import Categories from './pages/Categories';
import Offer from "./pages/Offer";
import Contact from "./pages/Contact";


const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/"element={<Login/>}/>
         <Route path="/reg"element={<Reg/>}/>
         <Route path="/home"element={<Homepage/>}/>
         <Route path="/cart"element={<Cart/>}/>
         <Route path="/Categories"element={<Categories/>}/>
         <Route path="/Offer"element={<Offer/>}/>
         <Route path="/Contact"element={<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
