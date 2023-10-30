import React from 'react';
import { BrowserRouter , Route,  Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import productsData from './productsData';
import reviewsData from './reviewData';
import Profile from './pagees/Profile';
import SignIn from './pagees/SignIn';
import SignUp from './pagees/SignUp';
import About from './pagees/About';


function App(){
  return(
        <BrowserRouter>
            <Header/>
              <Routes>
              <Route path="/" element={<Home productsData={productsData} reviewsData={reviewsData}/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/about" element={<About />} />
              </Routes>
            <Footer/>  
        </BrowserRouter>
  )
}
export default App;