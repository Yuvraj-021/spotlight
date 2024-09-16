import React from 'react';


const EventDetails = (props) => {
  const event = {
    title: props.title,
    date: props.date,
    time: props.time,
    location: props.location,
    description:props.desc,
    image: props.image, // Replace with your image URL
    price: props.price,
  };

  return (
    <div className="bg-slate-100 text-black min-h-screen">
      <div className="max-w-7xl mx-auto p-6 md:py-12">
        {/* Event Title */}
        <h1 className="text-4xl font-bold text-center md:text-left mb-6">
          {props.title}
        </h1>

        {/* Event Image */}
        <div className="w-full h-80 object-cover rounded-t-lg overflow-hidden shadow-md mb-8">
          <img
            src={props.image}
            alt={event.title}
            className="w-full object-cover"
          />
        </div>

        {/* Event Information */}
        <div className="md:flex md:space-x-12">
          {/* Event Details */}
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">Event Details</h2>
            <p className="mb-2">
              <span className="font-semibold">Date:</span> {event.date}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Time:</span> {event.time}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Location:</span> {event.location}
            </p>
            <p className=" mt-4">{event.description}</p>
          </div>

          {/* Booking Section */}
          <div className="md:w-1/3 bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-green-400 mb-4">Book Your Spot</h2>
            <p className="text-2xl font-bold text-green-400 mb-4">
              {event.price}
            </p>

            <button className="bg-green-500 text-white px-6 py-3 w-full rounded-lg font-semibold hover:bg-green-600 transition">
              Book Now
            </button>

            {/* Add more details if needed */}
            <p className="text-sm text-gray-400 mt-4">
              Limited seats available. Secure your spot now!
            </p>
          </div>
        </div>

        {/* Extra Information (Optional) */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">More Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-300">
            {/* Details about speakers, agenda, or other event specifics */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Key Speakers</h3>
              <p className="text-gray-400">
                Hear from top industry leaders, innovators, and visionaries
                shaping the future of technology.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Agenda</h3>
              <p className="text-gray-400">
                A full day packed with presentations, hands-on workshops, and
                networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
