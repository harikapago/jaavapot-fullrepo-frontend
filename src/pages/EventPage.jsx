import React,{ useEffect } from "react";
import AOS from 'aos';
import "../assets/css/main.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";

import img1 from "../assets/img/events-1.jpg";
import img2 from "../assets/img/events-2.jpg";
import img3 from "../assets/img/events-3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination,Autoplay } from "swiper";

function EventScreen() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <section id="events" className="events">
        <div className="container-fluid" data-aos="fade-up">
          <div className="section-header">
            <h2>Events</h2>
            <p>
              Share <span>Your Moments</span> In Our Restaurant
            </p>
          </div>

          <div
            className="slides-3 swiper"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="swiper-wrapper">
              <Swiper
                slidesPerView={1}
                centeredSlides={false}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                slidesPerGroupSkip={1}
                grabCursor={true}
                keyboard={{
                  enabled: true,
                }}
                breakpoints={{
                  769: {
                    slidesPerView: 3,
                    slidesPerGroup: 2,
                  },
                }}
                scrollbar={true}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Keyboard, Scrollbar, Navigation, Pagination,Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div
                    className="swiper-slide event-item d-flex flex-column justify-content-end"
                    style={{ backgroundImage: `url(${img1})` }}
                  >
                    <h3>Custom Parties</h3>
                    <div className="price align-self-start">$99</div>
                    <p className="description">
                      Quo corporis voluptas ea ad. Consectetur inventore
                      sapiente ipsum voluptas eos omnis facere. Enim facilis
                      veritatis id est rem repudiandae nulla expedita quas.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="swiper-slide event-item d-flex flex-column justify-content-end"
                    style={{ backgroundImage: `url(${img2})` }}
                  >
                    <h3>Private Parties</h3>
                    <div className="price align-self-start">$289</div>
                    <p className="description">
                      In delectus sint qui et enim. Et ab repudiandae inventore
                      quaerat doloribus. Facere nemo vero est ut dolores ea
                      assumenda et. Delectus saepe accusamus aspernatur.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="swiper-slide event-item d-flex flex-column justify-content-end"
                    style={{ backgroundImage: `url(${img3})`}}
                  >
                    <h3>Birthday Parties</h3>
                    <div className="price align-self-start">$499</div>
                    <p className="description">
                      Laborum aperiam atque omnis minus omnis est qui assumenda
                      quos. Quis id sit quibusdam. Esse quisquam ducimus officia
                      ipsum ut quibusdam maxime. Non enim perspiciatis.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="swiper-slide event-item d-flex flex-column justify-content-end"
                    style={{ backgroundImage: `url(${img1})` }}
                  >
                    <h3>Custom Parties</h3>
                    <div className="price align-self-start">$99</div>
                    <p className="description">
                      Quo corporis voluptas ea ad. Consectetur inventore
                      sapiente ipsum voluptas eos omnis facere. Enim facilis
                      veritatis id est rem repudiandae nulla expedita quas.
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EventScreen;
