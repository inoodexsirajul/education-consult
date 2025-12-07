import React from "react";
import HeroSlider from "../components/HeroSlider";
import Services from "../components/Services";
import StudyDestinations from "../components/StudyDestinations";
import WhyChooseUs from "../components/WhyChooseUs";
import StudyAbroadSteps from "../components/StudyAbroadSteps";
import StudyAbroadTimeline from "../components/StudyAbroadTimeline";
import AwardsSection from "../components/AwardsSection";
import SuccessGallery from "../components/SuccessGallery";
import HomeBlogs from "../components/HomeBlogs";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <Services />
      <StudyDestinations />
      {/* <StudyAbroadSteps /> */}
      <AwardsSection />
      {/* <SuccessGallery /> */}

      <StudyAbroadTimeline />
      <WhyChooseUs />
      <HomeBlogs />
    </>
  );
};

export default Home;
