import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Navigation, Pagination, A11y } from 'swiper/modules';

const Slider = () => {
    return (
        <div>
            <Swiper className="mySwiper" modules={[Navigation, Pagination, A11y]}

                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}>
                <SwiperSlide>
                    <img className='h-[700px] w-full' src="/image- 4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[700px] w-full' src="/image- 2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[700px] w-full' src="/image- 3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[700px] w-full' src="/image- 1.jpg" alt="" />
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;