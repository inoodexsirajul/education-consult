import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import StudyInDestination from "./pages/StudyInDestination";

const App = () => {
  return (
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
  );
};

export default App;
