import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Carousel = () => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
      >
        {/* Slide 1 */}
        
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-left p-4">
              <h2 className="text-2xl font-bold mb-4">Slide 1 Heading</h2>
              <p className="text-base text-gray-600">
                This is some content related to Slide 1. It can be a short paragraph
                describing the content related to the slide.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://via.placeholder.com/500x300"
                alt="Slide 1"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}

        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-left p-4">
              <h2 className="text-2xl font-bold mb-4">Slide 2 Heading</h2>
              <p className="text-base text-gray-600">
                This is some content related to Slide 2. It can be a short paragraph
                describing the content related to the slide.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://via.placeholder.com/500x300"
                alt="Slide 2"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* {Slide 3} */}

        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-left p-4">
              <h2 className="text-2xl font-bold mb-4">Slide 3 Heading</h2>
              <p className="text-base text-gray-600">
                This is some content related to Slide 3. It can be a short paragraph
                describing the content related to the slide.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://via.placeholder.com/500x300"
                alt="Slide 2"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </SwiperSlide>

        
      </Swiper>
    </div>
  );
};

export default Carousel;
