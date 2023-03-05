import React from "react";
import m from "./App.module.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
  return (
    <div className={m.app_wrapper}>
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
