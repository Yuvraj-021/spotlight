import React from "react";

function EventBlock(props) {
  return (
    <>
      <div class="bg-white rounded-lg shadow-md">
        <div class="relative">
          <img
            src={props.image}
            alt={props.title}
            class="w-full h-80 object-cover rounded-t-lg"
          />
          <span class="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {props.promoted ? "PROMOTED" : ""}
          </span>
        </div>
        <div class="p-4">
          <h3 class="font-bold text-lg">{props.title}</h3>
          <p class="text-sm text-gray-600">{props.genre}</p>

          {props.likes ? (
            <div class="mt-2 text-gray-500 text-sm">
              <span class="text-green-500">👍 69.2K Likes</span>
            </div>
          ) : (
            <div class="mt-2 text-gray-500 text-sm">
              <span class="text-red-500">{props.rating}</span>{" "}
              <span>{props.votes}</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default EventBlock;
