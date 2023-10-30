import React , {useState} from 'react';
import { Swiper, SwiperSlide, } from 'swiper/react';
import SwiperCore from 'swiper';
import {Link} from 'react-router-dom';
import Header from '../components/Header';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';



function Home({productsData,reviewsData}){
       
   

    SwiperCore.use([Pagination]);

    return(
        <body>
           
            <section className='home' id='home'>
                <div className='content'>
                    <h3>fresh and <span>organic</span> products for you</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor nec magna at ultrices. Duis sem lectus, ultricies placerat 
                        tortor vel, maximus imperdiet arcu. Praesent in sodales </p>
                        <a href='#' className='btn'>shop now</a>
                </div>
            </section>
            <section className='features' id='features'>
                <h1 className='heading'>our <span>features</span></h1>
                <div className='box-container'>
                    <div className='box'>
                    <div className='img-features'>U</div>
                        <h3>fresh and organic</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor nec magna at ultrices</p>
                        <a href='#' className='btn'>read more</a>
                    </div>
                    <div className='box'>
                    <div className='img-features'>U</div>
                        <h3>free delivery</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor nec magna at ultrices</p>
                        <a href='#' className='btn'>read more</a>
                    </div>
                    <div className='box'>
                        <div className='img-features'>U</div>
                        <h3>easy payments</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor nec magna at ultrices</p>
                        <a href='#' className='btn'>read more</a>
                    </div>
                </div>
            </section>
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
        {productsData.map((product) => (
          <SwiperSlide key={product.id} className='product-slider'>
            <div className='wrappper'>
              <div className='box'>
            <div className='img-features'>U</div>
            <h3>{product.name}</h3>
            <div className='price'>{product.priceRange}</div>
            <div className='stars'>
              {Array.from({ length: 5 }).map((_, index) => (
                <i
                  key={index}
                  className={`fas fa-star${index + 1 <= product.rating ? '' : 'fas fa-star-o'}`}
                ></i>
              ))}
            </div>
            <a href='#' className='btn'>
              add to cart
            </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    <section className='categories' id='categories'>
      <h1 className='heading'>product <span>categories</span></h1>
        <div className='box-container'>
          <div className='box'>
            <div className='img-features'></div>
            <h3>vegitables</h3>
            <p>upto 45% off</p>
            <a href='#' className='btn'> shop now</a>
          </div>
          <div className='box'>
            <div className='img-features'></div>
            <h3>fresh fruits</h3>
            <p>upto 45% off</p>
            <a href='#' className='btn'> shop now</a>
          </div>
          <div className='box'>
            <div className='img-features'></div>
            <h3>dairy products</h3>
            <p>upto 45% off</p>
            <a href='#' className='btn'> shop now</a>
          </div>
          <div className='box'>
            <div className='img-features'></div>
            <h3>dairy products</h3>
            <p>upto 45% off</p>
            <a href='#' className='btn'> shop now</a>
          </div>
        </div>
    </section>
    <section className='review' id='reviews'>
      <h1 className='heading'>customer's <span>review</span></h1>
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
        className='review-slider'
      >
        {reviewsData.map((review) => (
          <SwiperSlide key={review.id} className='review-slider'>
            <div className='wrappper'>
              <div className='box'>
            <div className='img-features'>U</div>
            <p>{review.review}</p>
            <h3>{review.name}</h3>
            <div className='stars'>
              {Array.from({ length: 5 }).map((_, index) => (
                <i
                  key={index}
                  className={`fas fa-star${index + 1 <= review.rating ? '' : '-half-alt'}`}
                ></i>
              ))}
            </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
 
            
        </body>

    )
}
export default Home