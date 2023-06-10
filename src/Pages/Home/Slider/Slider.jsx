import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";

const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="mt-20 bg-slate-100 p-5">
      <Swiper
        spaceBetween={30}
        // centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper rounded-lg"
      >
        <SwiperSlide>
          <img
            src="https://img.freepik.com/premium-psd/business-youtube-thumbnail-we-banner-template_169307-1175.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://signdesign.com.pk/wp-content/uploads/2016/01/Slider-Size.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets-global.website-files.com/614716f50b4f49202fdd0087/6177a573fc8a9f32be284fa6_Photo-58.jpeg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
           src="https://memoirsinpixels.com/wp-content/uploads/2022/01/slider-pic-3a.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.webtrainings.in/wp-content/uploads/2022/06/Scope-of-Graphic-Designing-in-India.jpeg"
            alt=""
          />
        </SwiperSlide>
        <div className="autoplay-progress w-80" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
