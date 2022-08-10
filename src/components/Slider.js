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
                        <span>Rabat 10%</span> na pierwsze zamówienie!
                    </p>
                    <button type="button">Zamów online</button>
                </SwiperSlide>
                <SwiperSlide>
                    <p>
                        Okulary przeciwsłoneczne <span>GRATIS</span> do zestawów
                        promocyjnych
                    </p>
                    <button type="button">Zamów online</button>
                </SwiperSlide>
                <SwiperSlide>
                    <p>
                        Miseczka frytek za 5zł przy zamówieniu za minimum{" "}
                        <span>40 zł</span>
                    </p>
                    <button type="button">Zamów online</button>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;
