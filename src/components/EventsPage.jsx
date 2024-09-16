import React from "react";

import Header from "./Header";
import EventDetails from "./EventDetails"
import Footer from "./Footer";

// Images Import here
import stree from "../assets/images/stree.png";


const EventsPage = () => {
  return (
    <>
      <Header />

      <EventDetails
        title="Stree Movie Celebrity Meet 2024"
        date="March 20, 2024"
        time="10:00 AM - 4:00 PM"
        location="BKC, Mumbai"
        desc="Join us for a day of insightful talks, networking, and the latest innovations in the tech industry. Explore cutting-edge technologies, meet industry leaders, and participate in hands-on workshops."
        image={stree}
        price="199 ₹"
      />
      
      <Footer />
    </>
  );
};

export default EventsPage;
