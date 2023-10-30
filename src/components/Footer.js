import React from 'react';

function Footer(){
    return(
        <section className='footer' id='contact'>
        <div className='box-container'>
          <div className='box'>
            <h3>groco <i className='fas fa-shopping-basket'></i></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed t</p>
            <div className='share'>
              <a href='#' className='fab fa-facebook-f'></a>
              <a href='#' className='fab fa-twitter'></a>
              <a href='#' className='fab fa-instagram'></a>
              <a href='#' className='fab fa-linkedin'></a>
            </div>
          </div>
          <div className='box'>
            <h3>contact info</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed t</p>
              <a href='#' className='links'><i className='fas fa-phone'></i>+123456789</a>
              <a href='#' className='links'><i className='fas fa-phone'></i>+123456789</a>
              <a href='#' className='links'><i className='fas fa-envelop'></i>Grocoassitance@gmail.com</a>
              <a href='#' className='links'><i className='fas fa-map-maker-alt'></i>kerala,india</a>
          </div>
          <div className='box'>
            <h3>quick links</h3>
              <a href='#' className='links'><i className='fas fa-arrow-right'></i>home</a>
              <a href='#' className='links'><i className='fas fa-arrow-right'></i>features</a>
              <a href='#' className='links'><i className='fas fa-arrow-right'></i>product</a>
              <a href='#' className='links'><i className='fas fa-arrow-right'></i>categories</a>
          </div>
          
          <div className='box'>
            <h3>newsletter</h3>
            <p>subscribe to get updates</p>
              <input typeof='email' placeholder='your email' className='email'/>
              <button typeof='submit'  className='btn'>Subscribe</button>
              <h2 className='payment-img'>Pay(visa,mastercard,americanexpress)</h2>
          </div>
        </div>
        <div className='credit'>created by <span>designer G</span> | all rights reserved </div>
      </section>
  
    )
}
export default Footer