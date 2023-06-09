import React from "react";
import styles from "./Brands.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import brand2 from "../../../../assets/images/brand2.png";
import brand3 from "../../../../assets/images/brand3.png";
import brand5 from "../../../../assets/images/brand5.png";

const Brands = () => {
  return (
    <section className={styles.brands}>
      <div className="max_width">
        <div className={styles.container}>
          <Swiper
            spaceBetween={40}
            slidesPerView={7}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className={styles.swiper}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              500: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              900: {
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: 6,
              },
              1400: {
                slidesPerView: 7,
                spaceBetween: 40,
              },
            }}
          >
            <SwiperSlide className={styles.swiper_item}>
              <img src={brand2} alt="" />
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_item}>
              <img src={brand3} alt="" />
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_item}>
              <img src={brand5} alt="" />
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_item}>
              <img src={brand2} alt="" />
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_item}>
              <img src={brand3} alt="" />
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_item}>
              <img src={brand5} alt="" />
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_item}>
              <img src={brand3} alt="" />
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_item}>
              <img src={brand5} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Brands;
