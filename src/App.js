import React from "react";
import "./scss/App.scss";

// Components
import Header from "./components/Header";
import BookingSection from "./components/BookingSection";
import Benefits from "./components/Benefits";

function App() {
  return (
    <div className="app">
      <Header />
      <BookingSection />
      <Benefits />
    </div>
  );
}

export default App;
