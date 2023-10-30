import React from 'react';
import { useGlobalContext } from './context';
import { Swiper, SwiperSlide, } from 'swiper/react';
import SwiperCore from 'swiper';
import products from "./productsData";

import { Pagination } from 'swiper/modules';

function Product(){
    const{addToCart} = useGlobalContext();
    SwiperCore.use([Pagination]);

    <section className='products' id='products'>
      <h1 className='heading'>
        our<span>products</span>
      </h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
          },
          1020: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination]}
        className='product-slider'
      >
        {products.map((product) => {
          const {id,img,name,priceRange,rating} = product
          return(

          <SwiperSlide key={id} className='product-slider'>
            <div className='wrappper'>
              <div className='box'>
            <div className='img-features'>{img}</div>
            <h3>{name}</h3>
            <div className='price'>{priceRange}</div>
            <div className='stars'>
              {Array.from({ length: 5 }).map((_, index) => (
                <i
                  key={index}
                  className={`fas fa-star${index + 1 <= rating ? '' : '-half-alt'}`}
                ></i>
              ))}
            </div>
            <a className='btn' onClick={()=>addToCart(id)}>
              add to cart
            </a>
              </div>
            </div>
          </SwiperSlide>
          )
          

          
              })}
      </Swiper>
    </section>
}
export default Product