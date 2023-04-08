import React from "react";

function PresentationShortView({ title, date, maker, id, slidesURL }) {
  return (
    <div>
      <li>
        <h2>
          {title} by {maker}
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
