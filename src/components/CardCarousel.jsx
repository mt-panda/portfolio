import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

const CardCarousel = ({
  images,
  autoplayDelay = 1500,
  showPagination = true,
  showNavigation = true,
}) => {
  const css = `
    .swiper {
      width: 100%;
      padding-bottom: 50px;
    }

    .swiper-slide {
      background-position: center;
      background-size: cover;
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      border-radius: 12px;
    }

    .swiper-3d .swiper-slide-shadow-left {
      background-image: none;
    }
    .swiper-3d .swiper-slide-shadow-right {
      background: none;
    }
  `;

  const handleSliderImageClick = (index) => {
    const { link } = images[index];
    window.open(link, "_blank");
  };

  return (
    <section className="py-10">
      <style>{css}</style>
      <div className="mx-auto w-full max-w-6xl px-4">
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: autoplayDelay,
            disableOnInteraction: false,
          }}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={showPagination}
          navigation={
            showNavigation
              ? {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }
              : undefined
          }
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="w-[350px]">
              <div className="rounded-3xl overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-10/12 object-cover"
                  onClick={() => handleSliderImageClick(index)}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CardCarousel;
