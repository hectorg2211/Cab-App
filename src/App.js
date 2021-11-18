import React from "react";
import "./scss/App.scss";

// Components
import Header from "./components/Header";
import BookingSection from "./components/BookingSection";

function App() {
  return (
    <div className="app">
      <Header />
      <BookingSection />
    </div>
  );
}

export default App;
