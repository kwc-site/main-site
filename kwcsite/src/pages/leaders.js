import React from "react";
import Image from "next/image";

function leaders() {
  return (
    <div className="flex flex-col items-center text-white w-full">
      <h1 className="text-4xl font-bold mb-6 mt-6">E-Board Spring 2023</h1>
      <div className="justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-3">President</h1>
          <Image src="/eboard/president.png" width="150" height="150"></Image>
          <h2 className="text-xl mt-2">Jill Jacinto</h2>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-10 mt-5">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-3">Vice President</h1>
          <Image
            src="/eboard/vicepresident.png"
            width="150"
            height="150"
          ></Image>
          <h2 className="text-xl mt-2">Eric Yi</h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-3">Treasurer</h1>
          <Image src="/eboard/treasurer.png" width="150" height="150"></Image>
          <h2 className="text-xl mt-2">Dev Patel</h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-3">Secretary</h1>
          <Image src="/eboard/secretary.png" width="150" height="170"></Image>
          <h2 className="text-xl mt-2 mb-3">Bhavya Deshaboina</h2>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-3">PR Coordinator</h1>
          <Image src="/eboard/pr.png" width="150" height="150"></Image>
          <h2 className="text-xl mt-2">Namitha Yalla</h2>
        </div>
        <div className="flex flex-col items-center justify-center mb-10 ">
          <h1 className="text-2xl font-bold mt-10 mb-3">Events Coordinator</h1>
          <Image src="/eboard/events.png" width="150" height="150"></Image>
          <h2 className="text-xl mt-2">Haripriya Kemisetti</h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-3">Webmaster</h1>
          <Image src="/eboard/webmaster.png" width="150" height="150"></Image>
          <h2 className="text-xl mt-2">Jeremy Kurian</h2>
        </div>
      </div>
    </div>
  );
}

export default leaders;
