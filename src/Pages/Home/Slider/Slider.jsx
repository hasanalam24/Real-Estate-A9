import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, A11y } from 'swiper/modules';

const Slider = () => {
    return (
        <div>
            <Swiper className="mySwiper " modules={[Navigation, Pagination, A11y]}

                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}>
                <SwiperSlide>
                    <div className='relative '>
                        <img className="w-[90%]  mx-auto md:w-[98%] md:mx-auto lg:h-[550px] lg:w-full" src="https://i.ibb.co/NyWH4Qt/image-4.jpg" alt="" />
                        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <h1 className='text-lg lg:text-3xl font-semibold text-white'>Welcome to Our Spectacular Event: Unveiling New Horizons and Dreams</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img className='w-[95%] opacity-75 mx-auto md:w-[98%] md:mx-auto lg:h-[550px] lg:w-full' src="https://i.ibb.co/SPzsQF9/image-2.jpg" alt="" />
                        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center'>
                            <h1 className='text-lg lg:text-3xl font-semibold '>Discover the Possibilities: Where Dreams Take Flight and Soar High</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative  '>
                        <img className='w-[95%] mx-auto md:w-[98%] md:mx-auto lg:h-[550px] lg:w-full' src="https://i.ibb.co/zhyxGfN/image-3.jpg" alt="" />
                        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center'>
                            <h1 className='text-lg lg:text-3xl font-semibold text-white'>Journey into Excellence: Where Every Moment Sparks Inspiration</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img className='w-[95%] mx-auto md:w-[98%] md:mx-auto lg:h-[550px] lg:w-full' src="https://i.ibb.co/RT0ZPbF/image-1.jpg" alt="" />
                        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center'>
                            <h1 className='text-lg lg:text-3xl font-semibold '>Embrace the Adventure: A World of Wonder Awaits Your Discovery</h1>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;