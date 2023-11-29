import { useState } from "react";
import Head from "next/head";
import Typewriter from "typewriter-effect";
import Carousel from "../../components/Carousel";

export default function Home() {
  const [showText, setShowText] = useState(false);
  const images = [
    { id: 1, src: "/clubphotos/clubphoto1.png", height: 300, width: 300 },
    { id: 2, src: "/clubphotos/schoolimage1.png", height: 300, width: 300 },
    { id: 3, src: "/clubphotos/schoolimage2.png", height: 300, width: 300 },
    { id: 4, src: "/clubphotos/schoolimage3.png", height: 300, width: 300 },
    { id: 5, src: "/clubphotos/schoolimage4.jpg", height: 300, width: 300 },
  ];

  const handleTypewriterComplete = () => {
    setShowText(true);
  };

  return (
    <>
      <Head>
        <title>KidsWhoCode</title>
        <meta name="description" content="Kids Who Code Club Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full flex flex-col items-center text-white mt-5">
        <div className="w-1/2 p-10">
          <div className="border-2 border-gray-700 rounded-lg p-6 text-5xl">
            <Typewriter
              options={{
                strings: "NJIT Kids Who Code",
                autoStart: true,
                loop: false,
                deleteSpeed: 20,
                delay: 50,
                pauseFor: 200,
              }}
              onInit={(typewriter) => {
                typewriter.callFunction(handleTypewriterComplete).start();
              }}
              style={{ fontSize: "5rem", textAlign: "left" }}
            />
          </div>

          <div
            className={`text-xl text-right mt-5  ${
              showText ? "opacity-100 animate-fade-in" : "opacity-0"
            }`}
          >
            <p>
              A professional club at New Jersey Institute of Technology
              dedicated to teaching programming to young children through a
              unique curriculum.
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center mt-5">
          <Carousel images={images} />
        </div>
      </main>

      {/* Credit to Fireship for teaching me */}
      <style jsx>{`
        p {
          font-size: 1.5rem;
          line-height: 1.5;
        }

        .animate-fade-in {
          animation-name: fade-in;
          animation-duration: 2s;
          animation-fill-mode: forwards;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
