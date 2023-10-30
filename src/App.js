import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import productsData from './productsData';
import reviewsData from './reviewData'
import { BrowserRouter , Route,  Routes } from 'react-router-dom';


function App(){
  return(
        <BrowserRouter>
            <Header/>
              <Routes>
              <Route path="/" element={<Home productsData={productsData} reviewsData={reviewsData}/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart />} />
              </Routes>
            <Footer/>  
        </BrowserRouter>
  )
}
export default App;