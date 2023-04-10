import React from "react";
import Link from "next/link";

function PresentationShortView({ title, date, creator, id, slidesURL }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <li className="text-white text-2xl">
            <h1 className="text-3xl mb-12 font-bold">{date}</h1>
            <h2 className="mb-12">
              {title} by {creator}
            </h2>
          </li>
          <Link href={`/pastlessons/${id}`}>
            <button className="bg-white text-blue-900 py-2 px-4 rounded-full font-bold text-lg mt-12 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              View Lesson
            </button>
          </Link>
        </div>
        <div className="ml-2">
          <iframe
            src={`${slidesURL}&start=2&rm=minimal`}
            width="340"
            height="280"
          ></iframe>
        </div>
      </div>
      <hr className="bg-white my-8" />
    </>
  );
}

export default PresentationShortView;
