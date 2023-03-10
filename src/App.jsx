import React from "react";
import { Route, Routes } from "react-router-dom";
import s from "./App.module.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

function App() {
  return (
      <div className={s.app_wrapper}>
        <Header />
        <Navbar />
        <div className={s.app_wrapper_content}>
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dialogs" element={<Dialogs />} />
          </Routes>
        </div>
      </div>
  )
}

export default App;
