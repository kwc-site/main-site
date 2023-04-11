import Head from "next/head";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <>
      <Head>
        <title>KidsWhoCode</title>
        <meta name="description" content="Kids Who Code Club Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full flex flex-row text-white mt-5">
        <div className="w-1/2 p-10">
          <div className="border-2 border-gray-700 rounded-lg p-6 text-6xl">
            <Typewriter
              options={{
                strings: "NJIT Kids Who Code",
                autoStart: true,
                loop: false,
                deleteSpeed: 20,
                delay: 50,
                pauseFor: 2000,
              }}
              style={{ fontSize: "5rem", textAlign: "left" }}
            />
          </div>
        </div>
        <div className="flex-1 p-10 text-xl text-right mt-3">
          <p>
            A professional club at New Jersey Institute of Technology dedicated
            to teaching programming to young children through a unique
            curriculum containing Scratch.
          </p>
        </div>
      </main>
      <style jsx>{`
        p {
          font-size: 1.5rem;
          line-height: 1.5;
        }
      `}</style>
    </>
  );
}
