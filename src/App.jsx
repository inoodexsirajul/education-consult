import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import StudyInDestination from "./pages/StudyInDestination";

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
          <Route path="destination" element={<Destination />} />
          <Route
            path="destination/study-in-destination"
            element={<StudyInDestination />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
