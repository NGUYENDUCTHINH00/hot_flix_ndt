import React from "react";
import "./section.css";

function Section1() {
  return (
    <>
      <section className='home'>
        <div className='slide-img'>
          <div id='carouselExampleFade' class='carousel slide carousel-fade'>
            <div class='carousel-inner'>
              <div class='carousel-item active img-slidemovie'>
                <img
                  src='http://hotflix.volkovdesign.com/main/img/home/home__bg.jpg'
                  class='d-block w-100'
                  alt='...'
                />
              </div>
              <div class='carousel-item img-slidemovie'>
                <img
                  src='http://hotflix.volkovdesign.com/main/img/home/home__bg2.jpg'
                  class='d-block w-100'
                  alt='...'
                />
              </div>
              <div class='carousel-item img-slidemovie'>
                <img
                  src='http://hotflix.volkovdesign.com/main/img/home/home__bg3.jpg'
                  class='d-block w-100'
                  alt='...'
                />
              </div>
              <div class='carousel-item img-slidemovie'>
                <img
                  src='http://hotflix.volkovdesign.com/main/img/home/home__bg4.jpg'
                  class='d-block w-100'
                  alt='...'
                />
              </div>
              <div class='carousel-item img-slidemovie'>
                <img
                  src='http://hotflix.volkovdesign.com/main/img/home/home__bg5.jpg'
                  class='d-block w-100'
                  alt='...'
                />
              </div>
            </div>
            <div className='container'>
              <div className='row'>
                <div className='col-1-1'>
                  <h1 className='home__title'>
                    <b>NEW ITEMS</b> OF THIS SEASON
                  </h1>
                  <div className='btn-next-pre'>
                    <button
                      type='button'
                      data-bs-target='#carouselExampleFade'
                      data-bs-slide='prev'
                    >
                      <span
                        class='carousel-control-prev-icon'
                        aria-hidden='true'
                      ></span>
                      <span class='visually-hidden'>Previous</span>
                    </button>
                    <button
                      type='button'
                      data-bs-target='#carouselExampleFade'
                      data-bs-slide='next'
                    >
                      <span
                        class='carousel-control-next-icon'
                        aria-hidden='true'
                      ></span>
                      <span class='visually-hidden'>Next</span>
                    </button>
                  </div>
                </div>
                <div className='col-2-2'>
                  <div className='img-titlemovie'>
                    <div className='img-img'>
                      <img
                        className='img-movie'
                        src='http://hotflix.volkovdesign.com/main/img/covers/cover5.jpg'
                        alt=''
                      />
                      <span className='card__rate'>6.2</span>
                    </div>
                    <div className='title-title'>
                      <h3 className='card__title'>
                        <a href='#'>Blindspotting</a>
                      </h3>
                      <span className='card__category'>
                        <a href='#'>Comedy, </a>
                        <a href='#'>Drama</a>
                      </span>
                    </div>
                  </div>
                  <div className='img-titlemovie'>
                    <div className='img-img'>
                      <img
                        className='img-movie'
                        src='http://hotflix.volkovdesign.com/main/img/covers/cover5.jpg'
                        alt=''
                      />
                      <span className='card__rate'>6.2</span>
                    </div>
                    <div className='title-title'>
                      <h3 className='card__title'>
                        <a href='#'>Blindspotting</a>
                      </h3>
                      <span className='card__category'>
                        <a href='#'>Comedy, </a>
                        <a href='#'>Drama</a>
                      </span>
                    </div>
                  </div>
                  <div className='img-titlemovie'>
                    <div className='img-img'>
                      <img
                        className='img-movie'
                        src='http://hotflix.volkovdesign.com/main/img/covers/cover5.jpg'
                        alt=''
                      />
                      <span className='card__rate'>6.2</span>
                    </div>
                    <div className='title-title'>
                      <h3 className='card__title'>
                        <a href='#'>Blindspotting</a>
                      </h3>
                      <span className='card__category'>
                        <a href='#'>Comedy, </a>
                        <a href='#'>Drama</a>
                      </span>
                    </div>
                  </div>
                  <div className='img-titlemovie'>
                    <div className='img-img'>
                      <img
                        className='img-movie'
                        src='http://hotflix.volkovdesign.com/main/img/covers/cover5.jpg'
                        alt=''
                      />
                      <span className='card__rate'>6.2</span>
                    </div>
                    <div className='title-title'>
                      <h3 className='card__title'>
                        <a href='#'>Blindspotting</a>
                      </h3>
                      <span className='card__category'>
                        <a href='#'>Comedy, </a>
                        <a href='#'>Drama</a>
                      </span>
                    </div>
                  </div>{" "}
                  <div className='img-titlemovie'>
                    <div className='img-img'>
                      <img
                        className='img-movie'
                        src='http://hotflix.volkovdesign.com/main/img/covers/cover5.jpg'
                        alt=''
                      />
                      <span className='card__rate'>6.2</span>
                    </div>
                    <div className='title-title'>
                      <h3 className='card__title'>
                        <a href='#'>Blindspotting</a>
                      </h3>
                      <span className='card__category'>
                        <a href='#'>Comedy, </a>
                        <a href='#'>Drama</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section1;
