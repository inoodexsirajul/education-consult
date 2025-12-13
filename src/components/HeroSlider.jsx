import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../assets/slider/slider2.png";
import slide2 from "../assets/slider/slider3.png";
import { Pagination, Autoplay } from "swiper/modules";
import slidesvg from "../assets/slider/sliderSvg.svg";
import { RiShieldStarFill } from "react-icons/ri";
import "swiper/css";
import "swiper/css/pagination";

const HeroSlider = () => {
  return (
    <>
      <div className="swiper w-full h-full mt-[50px] sm:mt-[61px] xl:mt-[79px] homeSlider">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          speed={1000}
          transition={{ duration: 1500 }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            type: "bullets",
          }}
          loop={true}
          // autoplay={{ delay: 3000 }}
          autoplay={false}
          className="homeSlider"
        >
          <SwiperSlide>
            <div
              className={`swiper-slide w-full h-full py-[119px] sm:py-[118px] xl:py-[90px] 2xl:py-[133px] bg-cover bg-center  `}
              style={{ backgroundImage: `url(${slide1})` }}
            >
              <div className="container">
                <div
                  data-aos="fade-right"
                  data-aos-duration="700"
                  className="flex max-w-[500px] xl:max-w-[585px] mx-auto lg:mx-0 justify-center lg:justify-start items-center lg:items-start flex-col gap-5 sm:gap-2.5 xl:gap-10"
                >
                  <div className="flex flex-col gap-5 sm:gap-[10px]">
                    <div className="flex flex-col gap-5">
                      <div className="flex justify-center lg:justify-start items-center lg:items-start gap-2">
                        <RiShieldStarFill className="mt-1" />
                        <p className="font-medium text-lg ">
                          Plan Your dream trip with us
                        </p>
                      </div>
                      <div className="flex flex-col gap-[9px]">
                        <h1 className="text-center lg:text-left text-[58px] font-bold leading-[1.1]">
                          Submit Your
                          <span className="text-gold"> Visa</span> Application
                        </h1>

                        <img
                          className="max-w-full"
                          src={slidesvg}
                          alt="lineA.svg"
                        />
                      </div>
                    </div>
                    <p className="text-center lg:text-left text-[19px]  font-body1 text-textColor-light">
                      Lorem ipsum dolor sit amet consectetur. Elementum massa
                      risus euismod semper fringilla tristique viverra urna
                      metus. Egestas eleifend ultrices lacus fringilla vivamus
                      nisl diam auctor.
                    </p>
                  </div>
                  <div className="flex gap-5 justify-start items-center">
                    <a
                      className="py-2.5 sm:py-3 lg:py-3.5 px-3.5 sm:px-4 lg:px-[18px] text-subtitle3 sm:text-subtitle2 lg:text-subtitle1 font-subtitle3 sm:font-subtitle2 lg:font-subtitle1 rounded-[20px] border-2 border-primary-light text-primary-light hover:text-white hover:bg-primary-light transition-all duration-300 ease-in"
                      href="  "
                    >
                      Learn More
                    </a>
                    <a
                      className="py-2.5 sm:py-3 lg:py-3.5 px-3.5 sm:px-4 lg:px-[18px] text-subtitle3 sm:text-subtitle2 lg:text-subtitle1 font-subtitle3 sm:font-subtitle2 lg:font-subtitle1 rounded-[20px] border-2 border-primary-light text-primary-light hover:text-white hover:bg-primary-light transition-all duration-300 ease-in"
                      href="  "
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`swiper-slide w-full h-full py-[119px] sm:py-[118px] xl:py-[90px] 2xl:py-[133px] bg-cover bg-center  `}
              style={{ backgroundImage: `url(${slide2})` }}
            >
              <div className="container">
                <div
                  data-aos="fade-right"
                  data-aos-duration="700"
                  className="flex max-w-[500px] xl:max-w-[585px] mx-auto lg:mx-0 justify-center lg:justify-start items-center lg:items-start flex-col gap-5 sm:gap-2.5 xl:gap-10"
                >
                  <div className="flex flex-col gap-5 sm:gap-[10px]">
                    <div className="flex flex-col gap-5">
                      <div className="flex justify-center lg:justify-start items-center lg:items-start gap-2">
                        <RiShieldStarFill className="mt-1" />
                        <p className="font-medium text-lg ">
                          Plan Your dream trip with us
                        </p>
                      </div>
                      <div className="flex flex-col gap-[9px]">
                        <h1 className="text-center lg:text-left text-[58px] font-bold leading-[1.1]">
                          Submit Your
                          <span className="text-gold"> Visa</span> Application
                        </h1>

                        <img
                          className="max-w-full"
                          src={slidesvg}
                          alt="lineA.svg"
                        />
                      </div>
                    </div>
                    <p className="text-center lg:text-left text-[19px]  font-body1 text-textColor-light">
                      Lorem ipsum dolor sit amet consectetur. Elementum massa
                      risus euismod semper fringilla tristique viverra urna
                      metus. Egestas eleifend ultrices lacus fringilla vivamus
                      nisl diam auctor.
                    </p>
                  </div>
                  <div className="flex gap-5 justify-start items-center">
                    <a
                      className="py-2.5 sm:py-3 lg:py-3.5 px-3.5 sm:px-4 lg:px-[18px] text-subtitle3 sm:text-subtitle2 lg:text-subtitle1 font-subtitle3 sm:font-subtitle2 lg:font-subtitle1 rounded-[20px] border-2 border-primary-light text-primary-light hover:text-white hover:bg-primary-light transition-all duration-300 ease-in"
                      href="  "
                    >
                      Learn More
                    </a>
                    <a
                      className="py-2.5 sm:py-3 lg:py-3.5 px-3.5 sm:px-4 lg:px-[18px] text-subtitle3 sm:text-subtitle2 lg:text-subtitle1 font-subtitle3 sm:font-subtitle2 lg:font-subtitle1 rounded-[20px] border-2 border-primary-light text-primary-light hover:text-white hover:bg-primary-light transition-all duration-300 ease-in"
                      href="  "
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="container swiper-pagination lg:flex lg:flex-col lg:gap-2.5 lg:items-end lg:right-0! lg:absolute! lg:top-[40%]! lg:!left-auto lg:!max-w-[500px]"></div>
      </div>
    </>
  );
};

export default HeroSlider;
