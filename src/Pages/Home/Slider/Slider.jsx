import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
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