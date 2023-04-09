import React from "react";

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
    </div>
  );
}

export default PresentationShortView;
