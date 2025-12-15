import React from "react";
import HeroSlider from "../components/HeroSlider";
import Services from "../components/Services";
import StudyDestinations from "../components/StudyDestinations";
import WhyChooseUs from "../components/WhyChooseUs";
import StudyAbroadSteps from "../components/StudyAbroadSteps";
import AwardsSection from "../components/AwardsSection";
import SuccessGallery from "../components/SuccessGallery";
import HomeBlogs from "../components/HomeBlogs";
import CounselingSection from "../components/CounselingSection";
import UpcomingEvents from "../components/UpcomingEvents";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <Services />
      <StudyDestinations />
      <StudyAbroadSteps />
      <AwardsSection />
      <UpcomingEvents />
      <SuccessGallery />

      <WhyChooseUs />
      <HomeBlogs />
      <CounselingSection />
    </>
  );
};

export default Home;
