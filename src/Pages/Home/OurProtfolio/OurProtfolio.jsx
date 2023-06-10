import React from "react";
import { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const OurProtfolio = () => {
  return (
    <div className="text-center mt-20 upp">
      <h1 className="text-3xl font-bold uppercase mb-2">Our Portfolio</h1>
      <p>
        Many desktop publishing packages and web page editors now use Lorem
        Ipsum as their <br /> default model text
      </p>

      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        // centeredSlides={true}
        coverflowEffect={{
          rotate: 60,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper mt-10"
      >
        <SwiperSlide>
          <img
            src="https://lili.co/wp-content/uploads/2022/03/Graphic-Design-Business-1024x683.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://themesfamily.com/tm/hadi/assets/img/portfolio/4.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://themesfamily.com/tm/hadi/assets/img/portfolio/3.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://themesfamily.com/tm/hadi/assets/img/portfolio/2.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.avanse.com/blogs/images/next-top-47.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://lili.co/wp-content/uploads/2022/03/Graphic-Design-Business-1024x683.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.moople.in/blog/wp-content/uploads/2018/09/31.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://s3-us-east-2.amazonaws.com/maryville/wp-content/uploads/2020/02/28144501/graphic-designer-using-tools-1.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OurProtfolio;
