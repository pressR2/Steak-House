import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import { Autoplay, Pagination } from "swiper";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <p>
            <span>Rabat 10%</span> na<br></br> pierwsze zamówienie!
          </p>
          <p>
            Do 20 czerwca złóż zamówienie na stronie i skorzystaj z{" "}
            <span>promocji -10%</span>. Spiesz się, czas trwania promocji do
            końca lipca.
          </p>
          <div className="slider-button-wrapper">
            <button type="button">Zamów online</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <p>
            Okulary przeciwsłoneczne <br></br>
            <span>GRATIS</span>
          </p>
          <p>
            Od 21 czerwca do menu trafią{" "}
            <span>Burger Vega, Steak farmerski</span>. Z tej
            okazji przy zakupie zestawu promocyjnego okulary dostaniesz{" "}
            <span>Gratis</span>.
          </p>
          <div className="slider-button-wrapper">
            <button type="button">Zamów online</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <p>
            Miseczka frytek za 5 zł przy zamówieniu za min.{" "}
            <span>40 zł</span>
          </p>
          <p>
            <span>Poniedziałkowa miseczka</span> powraca. Od 1 lipca przy
            zakupie 2xBurgerów XL, frytki dostaniesz za 5 zł. Promocja
            obowiązuje do godziny 12:00.
          </p>
          <div className="slider-button-wrapper">
            <button type="button">Zamów online</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;