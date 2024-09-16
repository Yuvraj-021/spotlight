import React from "react";
import Header from "./Header";
import EventList from "./EventList";
import Carousel from "./Carousel";
import SlidingCategories from "./SlidingCategories";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Carousel />
      <EventList />
      <SlidingCategories />
      <Footer />
    </>
  );
};

export default HomePage;
