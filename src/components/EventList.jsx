import React from "react";
import EventBlock from "./EventBlock";

// Images Import here
import stree from "../assets/images/stree.png";
import tummbad from "../assets/images/tummbad.avif";
import murder from "../assets/images/murder.avif";
import goat from "../assets/images/goat.avif";
import joker from "../assets/images/joker.avif";

function EventList() {
  return (
    <>
      <div class="p-6 bg-gray-100">
        <div className="flex justify-between items-center py-4">
          <h2 class="text-2xl font-bold mb-4">Upcoming Events</h2>
          <a href="#" className="text-pink-500 text-sm hover:underline">
            See All &rsaquo;
          </a>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <EventBlock
            image={murder}
            title="The Buckingham Murders"
            genre="Crime/Mystery/Thriller"
            rating="★ 6.9/10"
            votes="9K Votes"
            promoted={true}
            likes={false}
          />
          <EventBlock
            image={tummbad}
            title="Tumbbad"
            genre="Fantasy/Horror/Period"
            rating="★ 8.3/10"
            votes="58.8K Votes"
            promoted={true}
            likes={false}
          />
          <EventBlock
            image={joker}
            title="Joker: Folie à Deux"
            genre="Drama/Suspense/Thriller"
            rating=""
            votes=""
            promoted={false}
            likes={true}
          />
          <EventBlock
            image={stree}
            title="Stree 2: Sarkate Ka Aatank"
            genre="Comedy/Horror"
            rating="★ 8.9/10"
            votes="353.2K Votes"
            promoted={false}
            likes={false}
          />
          <EventBlock
            image={goat}
            title="Thalapathy is the G.O.A.T"
            genre="Action/Drama/Thriller"
            rating="★ 6.9/10"
            votes="26K Votes"
            promoted={false}
            likes={false}
          />
        </div>
      </div>
    </>
  );
}

export default EventList;
