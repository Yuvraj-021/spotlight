import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import EventList from "./components/EventList";
import Carousel from "./components/Carousel";
import SlidingCategories from "./components/SlidingCategories";
import Footer from "./components/Footer";
import EventsPage from "./components/EventsPage";
import AuthPage from "./components/AuthPage";
import HomePage from "./components/HomePage"

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* Home Page */}

      {/* <Header/>
      <Carousel />
      <EventList/>
      <SlidingCategories/>
      <Footer/> */}

      {/* <AuthPage /> */}

      {/* <EventsPage/> */}

      <BrowserRouter>
        <Routes>
          
            <Route path="/" element={<AuthPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/home" element={<HomePage />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
