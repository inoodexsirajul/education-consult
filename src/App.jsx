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
import AdmissionSupport from "./pages/services/AdmissionSupport";
import HealthInsurance from "./pages/services/HealthInsurance";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";

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
          <Route path="admission-support" element={<AdmissionSupport />} />
          <Route path="health-insurance" element={<HealthInsurance />} />
          <Route path="scholarship" element={<Scholarship />} />
          <Route path="terms-of-use" element={<TermsOfUse />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="contact-us" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
