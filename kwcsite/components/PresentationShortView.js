import React from "react";
import Link from "next/link";
function PresentationShortView({ title, date, creator, id, slidesURL }) {
  return (
    <div>
      <li className="text-white text-2xl">
        <h2>
          {title} by {creator}
        </h2>
        <p>{date}</p>
        <iframe
          src={`${slidesURL}&start=2&rm=minimal`}
          width="340"
          height="280"
        ></iframe>
      </li>
      <Link href={`/pastlessons/${id}`}>
        <button className="bg-white text-blue-900 py-2 px-4 rounded-full font-bold text-lg  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          View Lesson
        </button>
      </Link>
      <hr className="bg-white my-8" />
    </div>
  );
}

export default PresentationShortView;
