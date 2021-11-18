import React from "react";
import "./scss/App.scss";

// Components
import Header from "./components/Header";
import BookingSection from "./components/BookingSection";
import Benefits from "./components/Benefits";
import TopRoutes from "./components/TopRoutes";

function App() {
  return (
    <div className="app">
      <Header />
      <BookingSection />
      <Benefits />
      <TopRoutes />
    </div>
  );
}

export default App;
