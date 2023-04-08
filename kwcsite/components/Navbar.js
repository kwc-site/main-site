import Link from "next/link";
import React from "react";
import { Router, useRouter } from "next/router";
import Image from "next/image";

function Navbar() {
  const router = useRouter();

  return (
    <nav className="bg-blue-950">
      <ul className="flex">
        <Link href="/">
          <Image src="/kwclogo.png" width="64" height="64"></Image>
        </Link>
        <li className="mr-12 ml-12">
          <Link href="/" className="text-white">
            KWC
          </Link>
        </li>
        <li className="mr-12">
          <Link href="/leaders" className="text-white">
            Leaders
          </Link>
        </li>
        <li className="mr-12">
          <Link
            href="/pastlessons"
            className="text-white"
          >
            Lessons
          </Link>
        </li>
        <li className="mr-12">
          <Link href="/about" className="text-white">
            About
          </Link>
        </li>
        <li className="mr-12">
          <Link href="/contact" className="text-white">
            Contact
          </Link>
        </li>
      </ul>
      {/* <Link href="/">KWC</Link> */}

      {/* <Link href="/calender">Calender</Link> */}
    </nav>
  );
}

export default Navbar;
