import React from "react";
import logo from "../assets/logo/logo.png";
import underlogo from "../assets/footer/underlogo.svg";
import title1 from "../assets/footer/title1.svg";
import title2 from "../assets/footer/title2.svg";
import title3 from "../assets/footer/title3.svg";
import title4 from "../assets/footer/title4.svg";
import footerbg from "../assets/footer/footer-bg.png";
import OfficeLocations from "./OfficeLocations";
const Footer = () => {
  return (
    <footer>
      <OfficeLocations />
      <div
        class="relative bg-cover w-full h-full bg-center bg-no-repeat  bg-[#EEEEEE] "
        // style={{ backgroundImage: `url(${footerbg})` }}
      >
        <div class="container py-[50px]">
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            class="flex flex-col gap-10"
          >
            <img
              class="max-w-[228px] mx-auto"
              src={logo}
              alt="footerLogo1.svg"
            />
            <img class="max-w-full" src={underlogo} alt="line.svg" />

            <div class="flex flex-wrap justify-between gap-[50px] xl:gap-0 items-start">
              <div class="flex flex-col gap-[30px]">
                <div class="flex flex-col gap-[5px]">
                  <h5 class="text-gold text-2xl font-semibold">About us</h5>
                  <img class="max-w-full" src={title1} alt="line2.svg" />
                </div>
                <p class="max-w-[280px] text-black/70 text-lg">
                  Urna vitae facilisis at amet interdum maecenas ullamcorper.
                  Maecenas at volutpat vitae aliquam. Eu tellus proin nisi id
                  aenean laoreet mattis pretium. Gravida eget venenatis massa
                  libero integer sed ut pharetra nunc.
                </p>
                <div class="flex justify-start items-center gap-[30px]">
                  <a href="https://www.facebook.com/">
                    <i class="text-[26px] leading-[26px] ri-facebook-fill hover:text-primary-light transition-all duration-300 ease-in"></i>
                  </a>
                  <a href="https://www.instagram.com/">
                    <i class="text-[26px] leading-[26px] ri-instagram-fill hover:text-primary-light transition-all duration-300 ease-in"></i>
                  </a>
                  <a href="https://x.com/?lang=en">
                    <i class="text-[26px] leading-[26px] ri-twitter-x-fill hover:text-primary-light transition-all duration-300 ease-in"></i>
                  </a>
                  <a href="https://www.linkedin.com/">
                    <i class="text-[26px] leading-[26px] ri-linkedin-fill hover:text-primary-light transition-all duration-300 ease-in"></i>
                  </a>
                </div>
              </div>
              <div class="flex flex-col gap-[30px]">
                <div class="flex flex-col gap-[5px]">
                  <h5 class="text-2xl font-semibold text-gold">Quick Links</h5>
                  <img class="max-w-full" src={title2} alt="line2.svg" />
                </div>
                <div class="flex flex-col gap-5">
                  {[
                    "Home",
                    "About Us",
                    "Visa",
                    "Service",
                    "Countries",
                    "Coaching",
                    "Blog",
                  ].map((quickItem, index) => (
                    <div
                      class="gap-[3px] flex justify-start items-center"
                      key={index}
                    >
                      <i class="text-secondary-light text-subtitle2 ri-shield-star-fill"></i>
                      <a
                        href="index-2.html"
                        class="text-lg font-medium text-black/70  transition-all duration-300 ease-linear leading-[18px]"
                      >
                        {quickItem}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div class="flex flex-col gap-[30px]">
                <div class="flex flex-col gap-[5px]">
                  <h5 class="text-2xl font-semibold text-gold">Services</h5>
                  <img class="max-w-full" src={title2} alt="line2.svg" />
                </div>
                <div class="flex flex-col gap-5">
                  {[
                    "Home",
                    "About Us",
                    "Visa",
                    "Service",
                    "Countries",
                    "Coaching",
                    "Blog",
                  ].map((quickItem, index) => (
                    <div
                      class="gap-[3px] flex justify-start items-center"
                      key={index}
                    >
                      <i class="text-secondary-light text-subtitle2 ri-shield-star-fill"></i>
                      <a
                        href="index-2.html"
                        class="text-lg font-medium  text-black/70  transition-all duration-300 ease-linear leading-[18px]"
                      >
                        {quickItem}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div class="flex flex-col gap-[30px]">
                <div class="flex flex-col gap-[5px]">
                  <h5 class="text-gold text-2xl font-semibold">
                    Sign up to Latest Updates
                  </h5>
                  <img class="max-w-full" src={title4} alt="line2.svg" />
                </div>
                <div class="flex justify-between items-center bg-white py-[5px] pl-5 pr-[7px] border-2 border-primary-light rounded-[30px]">
                  <input
                    type="email"
                    placeholder="Enter your email..."
                    class="text-textColor-dark bg-transparent focus:outline-none"
                  />
                  <i class="ri-send-plane-fill bg-primary-light hover:bg-secondary-medium text-[18px] leading-[16px] rounded-[20px] py-3 px-[11px] cursor-pointer transition-all duration-300 ease-linear"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
