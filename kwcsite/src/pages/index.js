import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>KidsWhoCode</title>
        <meta name="description" content="Kids Who Code Club Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <div className="mt-10 transition-all">
            <h1 className="text-9xl text-white text-right mr-12 pr-28 mt-10">
              NJIT
            </h1>
            <h1 className="text-7xl text-white text-right mr-4">
              Kids Who Code
            </h1>
          </div>
        </div>
      </main>
    </>
  );
}
