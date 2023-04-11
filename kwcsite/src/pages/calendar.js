import React from "react";

function calender() {
  return (
    <div className="flex justify-center w-full mt-10">
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%234285F4&ctz=America%2FNew_York&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=bmppdGtpZHN3aG9jb2RlQGdtYWlsLmNvbQ&color=%23039BE5"
        width="800"
        height="600"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
}

export default calender;
