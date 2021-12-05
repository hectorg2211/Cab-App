import React from "react";
import "./scss/App.scss";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import BookingSection from "./components/BookingSection";
import Benefits from "./components/Benefits";
import TopRoutes from "./components/TopRoutes";
import Why from "./components/Why";
import Rates from "./components/Rates";
import Footer from "./components/Footer";

// Pages
import CabsScreen from "./components/CabsScreen";
import DashboardScreen from "./components/DashboardScreen";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <BookingSection />
              <Benefits />
              <TopRoutes />
              <Why />
              <Rates />
              <Footer />
            </>
          }
        ></Route>
        <Route path="/cabs" element={<CabsScreen />}></Route>
        <Route path="/dashboard/*" element={<DashboardScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
