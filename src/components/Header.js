import React ,{useState} from 'react';
import {Link} from 'react-router-dom';
import Home from '../pages/Home';

function Header(){
    const [searchActive,setSearchActive] = useState(false)
    const toggleSearch = () =>{
        setSearchActive(!searchActive)
    }
    const [shoppingActive,setShoppingActive] = useState(false)
    const toggleShoppingCart = () =>{
        setShoppingActive(!shoppingActive)
    }
    
    const [navbarActive,setNavbarActive] = useState(false)
    const toggleNavbar = () =>{
        setNavbarActive(!navbarActive)
    }
    return(
        <header className='header'>
        <a href='#' className='logo'><i className='fas fa-shopping-basket'></i>groco</a>
        <nav className={`navbar ${navbarActive ? 'active':''}`}>
            <Link to='/'> <a href='#home'>home</a></Link>
            <a href='#features'>features</a>
            <a href='#products'>products</a>
            <a href='#categories'>categories</a>
            <a href='#reviews'>reviews</a>
            <a href='#contact'>contact</a>
        </nav>
        <div className='icons'>
            <div className='fas fa-bars' id='menu-btn' onClick={toggleNavbar}></div>
            <div className='fas fa-search' id='search-btn' onClick={toggleSearch}></div>
            <Link to='/cart'><div className='fas fa-shopping-cart' id='cart-btn' onClick={toggleShoppingCart}></div></Link>
            <Link to='/login'><div className='fas fa-user' id='login-btn'></div></Link>
        
        </div>
        <form className={`search-form ${searchActive ? 'active' : ''}`}>
            <input type='search' id='search-box' placeholder='search here...'/>
                <label for='search-box' className='fas fa-search'></label>
        </form>
      
        
    </header>
    )
}
export default Header