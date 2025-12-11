import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import StudyInDestination from "./pages/StudyInDestination";
import Scholarship from "./pages/Scholarship";
import AboutInsaf from "./pages/AboutInsaf";
import AwardAndAchievement from "./pages/AwardAndAchievement";
import LeadershipTeam from "./pages/LeadershipTeam";
import Testimonials from "./pages/Testimonials";
import ContactPage from "./pages/ContactPage";

const App = () => {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about-insaf" element={<AboutInsaf />} />
          <Route
            path="award-and-achievement"
            element={<AwardAndAchievement />}
          />
          <Route path="leadership-team" element={<LeadershipTeam />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="destination" element={<Destination />} />
          <Route
            path="destination/study-in-destination"
            element={<StudyInDestination />}
          />
          <Route path="scholarship" element={<Scholarship />} />
          <Route path="contact-us" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
