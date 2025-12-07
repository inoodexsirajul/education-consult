import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

// Replace these with real student success photos (visa approved, airport, campus etc.)
import img1 from "../assets/stories/1.webp";
import img2 from "../assets/stories/2.webp";
import img3 from "../assets/stories/3.webp";
import img4 from "../assets/stories/4.webp";

const images = [img1, img2, img3, img4];

const SuccessGallery = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = 22000;
    const duration = 3000;
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-[#283e77]/5 via-white to-[#c3a25d]/5 overflow-hidden relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#c3a25d]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#283e77]/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl lg:text-8xl font-black text-[#283e77] mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c3a25d] via-[#d4b86b] to-[#c3a25d]">
              {count.toLocaleString()}+
            </span>
          </h2>
          <p className="text-3xl lg:text-5xl font-bold text-[#283e77]/90">
            Success Stories
          </p>
          <p className="mt-4 text-xl lg:text-2xl text-[#283e77]/70 font-medium">
            You could be the next
          </p>
        </div>

        {/* Image Only Slider */}
        <Swiper
          modules={[Autoplay, EffectFade]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={1500}
          className="success-gallery-swiper"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={img}
                  alt={`Success story ${index + 1}`}
                  className="w-full h-[500px] lg:h-[650px] object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Dark Overlay + Gold Border on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Golden Border Glow */}
                <div className="absolute inset-0 rounded-3xl ring-4 ring-transparent group-hover:ring-[#c3a25d]/50 transition-all duration-700" />

                {/* Subtle Gold Shine */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#c3a25d]/20 to-transparent 
                  -translate-x-full group-hover:translate-x-full transition-transform duration-2000"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Optional CTA */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-flex items-center gap-4 px-12 py-6 rounded-full bg-[#283e77] text-white text-xl font-bold 
              shadow-2xl hover:bg-[#c3a25d] hover:shadow-[#c3a25d]/30 transition-all duration-500 hover:scale-110"
          >
            Be the Next Success Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default SuccessGallery;
