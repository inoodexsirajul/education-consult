import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../assets/slider/slider2.png";
import slide2 from "../assets/slider/slider3.png";
import slide3 from "../assets/slider/slider4.png";
import { Pagination } from "swiper/modules";
import slidesvg from "../assets/slider/sliderSvg.svg";
import { RiShieldStarFill } from "react-icons/ri";
import "swiper/css";
import "swiper/css/pagination";

const HeroSlider = () => {
  return (
    <>
      <div class="swiper w-full h-full mt-[50px] sm:mt-[61px] xl:mt-[79px] homeSlider">
        <Swiper
          modules={[Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            type: "bullets",
          }}
          loop={true}
          autoplay={{ delay: 5000 }}
          className="homeSlider"
        >
          <SwiperSlide>
            <div
              class={`swiper-slide w-full h-full py-[119px] sm:py-[118px] xl:py-[133px] bg-cover bg-center  `}
              style={{ backgroundImage: `url(${slide1})` }}
            >
              <div class="container">
                <div
                  data-aos="fade-right"
                  data-aos-duration="700"
                  class="flex max-w-[500px] xl:max-w-[585px] mx-auto lg:mx-0 justify-center lg:justify-start items-center lg:items-start flex-col gap-5 sm:gap-[30px] xl:gap-10"
                >
                  <div class="flex flex-col gap-5 sm:gap-[30px]">
                    <div class="flex flex-col gap-5">
                      <div class="flex justify-center lg:justify-start items-center lg:items-start gap-2">
                        <RiShieldStarFill className="mt-1" />
                        <p class="font-medium text-lg ">
                          Plan Your dream trip with us
                        </p>
                      </div>
                      <div class="flex flex-col gap-[9px]">
                        <h1 class="text-center lg:text-left text-[58px] font-bold leading-[1.1]">
                          Submit Your
                          <span class="text-gold"> Visa</span> Application
                        </h1>

                        <img
                          class="max-w-full"
                          src={slidesvg}
                          alt="lineA.svg"
                        />
                      </div>
                    </div>
                    <p class="text-center lg:text-left text-body1 font-body1 text-textColor-light">
                      Lorem ipsum dolor sit amet consectetur. Elementum massa
                      risus euismod semper fringilla tristique viverra urna
                      metus. Egestas eleifend ultrices lacus fringilla vivamus
                      nisl diam auctor.
                    </p>
                  </div>
                  <div class="flex gap-5 justify-start items-center">
                    <a
                      class="py-2.5 sm:py-3 lg:py-3.5 px-3.5 sm:px-4 lg:px-[18px] text-subtitle3 sm:text-subtitle2 lg:text-subtitle1 font-subtitle3 sm:font-subtitle2 lg:font-subtitle1 rounded-[20px] border-2 border-primary-light text-primary-light hover:text-white hover:bg-primary-light transition-all duration-300 ease-in"
                      href="  "
                    >
                      Learn More
                    </a>
                    <a
                      class="py-2.5 sm:py-3 lg:py-3.5 px-3.5 sm:px-4 lg:px-[18px] text-subtitle3 sm:text-subtitle2 lg:text-subtitle1 font-subtitle3 sm:font-subtitle2 lg:font-subtitle1 rounded-[20px] border-2 border-primary-light text-primary-light hover:text-white hover:bg-primary-light transition-all duration-300 ease-in"
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
              class={`swiper-slide w-full h-full py-[119px] sm:py-[118px] xl:py-[133px] bg-cover bg-center  `}
              style={{ backgroundImage: `url(${slide2})` }}
            >
              <div class="container">
                <div
                  data-aos="fade-right"
                  data-aos-duration="700"
                  class="flex max-w-[500px] xl:max-w-[585px] mx-auto lg:mx-0 justify-center lg:justify-start items-center lg:items-start flex-col gap-5 sm:gap-[30px] xl:gap-10"
                >
                  <div class="flex flex-col gap-5 sm:gap-[30px]">
                    <div class="flex flex-col gap-5">
                      <div class="flex justify-center lg:justify-start items-center lg:items-start gap-2">
                        <i class="text-secondary-light text-subtitle2 sm:text-subtitle1 font-subtitle1 ri-shield-star-fill"></i>
                        <p class="font-medium text-lg">
                          Plan Your dream trip with us
                        </p>
                      </div>
                      <div class="flex flex-col gap-[9px]">
                        <h1 class="text-center lg:text-left text-[58px] font-bold">
                          Submit Your
                          <span class="text-gold"> Visa</span> Application
                        </h1>

                        <img
                          class="max-w-full"
                          src={slidesvg}
                          alt="lineA.svg"
                        />
                      </div>
                    </div>
                    <p class="text-center lg:text-left text-body1 font-body1 text-textColor-light">
                      Lorem ipsum dolor sit amet consectetur. Elementum massa
                      risus euismod semper fringilla tristique viverra urna
                      metus. Egestas eleifend ultrices lacus fringilla vivamus
                      nisl diam auctor.
                    </p>
                  </div>
                  <div class="flex gap-5 justify-start items-center">
                    <a
                      class="py-2.5 sm:py-3 lg:py-3.5 px-3.5 sm:px-4 lg:px-[18px] text-subtitle3 sm:text-subtitle2 lg:text-subtitle1 font-subtitle3 sm:font-subtitle2 lg:font-subtitle1 rounded-[20px] border-2 border-primary-light text-primary-light hover:text-white hover:bg-primary-light transition-all duration-300 ease-in"
                      href="  "
                    >
                      Learn More
                    </a>
                    <a
                      class="py-[10px] sm:py-3 lg:py-[14px] px-[14px] sm:px-4 lg:px-[18px] text-subtitle3 sm:text-subtitle2 lg:text-subtitle1 font-subtitle3 sm:font-subtitle2 lg:font-subtitle1 rounded-[20px] border-[2px] border-primary-light text-primary-light hover:text-white hover:bg-primary-light transition-all duration-300 ease-in"
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
              class={`swiper-slide w-full h-full py-[119px] sm:py-[118px] xl:py-[133px] bg-cover bg-center  `}
              style={{ backgroundImage: `url(${slide3})` }}
            >
              <div class="container">
                <div
                  data-aos="fade-right"
                  data-aos-duration="700"
                  class="flex max-w-[500px] xl:max-w-[585px] mx-auto lg:mx-0 justify-center lg:justify-start items-center lg:items-start flex-col gap-5 sm:gap-[30px] xl:gap-10"
                >
                  <div class="flex flex-col gap-5 sm:gap-[30px]">
                    <div class="flex flex-col gap-5">
                      <div class="flex justify-center lg:justify-start items-center lg:items-start gap-2">
                        <i class="text-secondary-light text-subtitle2 sm:text-subtitle1 font-subtitle1 ri-shield-star-fill"></i>
                        <p class="font-medium text-lg">
                          Plan Your dream trip with us
                        </p>
                      </div>
                      <div class="flex flex-col gap-[9px]">
                        <h1 class="text-center lg:text-left text-[58px] font-bold">
                          Submit Your
                          <span class="text-gold"> Visa</span> Application
                        </h1>

                        <img
                          class="max-w-full"
                          src={slidesvg}
                          alt="lineA.svg"
                        />
                      </div>
                    </div>
                    <p class="text-center lg:text-left text-body1 font-body1 text-textColor-light">
                      Lorem ipsum dolor sit amet consectetur. Elementum massa
                      risus euismod semper fringilla tristique viverra urna
                      metus. Egestas eleifend ultrices lacus fringilla vivamus
                      nisl diam auctor.
                    </p>
                  </div>
                  <div class="flex gap-5 justify-start items-center">
                    <a
                      class="py-2.5 sm:py-3 lg:py-3.5 px-3.5 sm:px-4 lg:px-[18px] text-subtitle3 sm:text-subtitle2 lg:text-subtitle1 font-subtitle3 sm:font-subtitle2 lg:font-subtitle1 rounded-[20px] border-2 border-primary-light text-primary-light hover:text-white hover:bg-primary-light transition-all duration-300 ease-in"
                      href="  "
                    >
                      Learn More
                    </a>
                    <a
                      class="py-[10px] sm:py-3 lg:py-[14px] px-[14px] sm:px-4 lg:px-[18px] text-subtitle3 sm:text-subtitle2 lg:text-subtitle1 font-subtitle3 sm:font-subtitle2 lg:font-subtitle1 rounded-[20px] border-[2px] border-primary-light text-primary-light hover:text-white hover:bg-primary-light transition-all duration-300 ease-in"
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

        <div class="container swiper-pagination lg:flex lg:flex-col lg:gap-2.5 lg:items-end lg:right-0! lg:absolute! lg:top-[40%]! lg:!left-auto lg:!max-w-[500px]"></div>
      </div>
    </>
  );
};

export default HeroSlider;
