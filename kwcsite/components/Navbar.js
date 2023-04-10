import Link from "next/link";
import React from "react";
import { Router, useRouter } from "next/router";
import Image from "next/image";

function Navbar() {
  const router = useRouter();

  return (
    <nav className="bg-blue-950">
      <ul className="flex justify-center">
        <Link href="/">
          <Image src="/kwclogo.png" width="64" height="64"></Image>
        </Link>
        <li className="mr-12 ml-12 mt-5 text-lg">
          <Link href="/" className="text-white">
            KWC
          </Link>
        </li>
        <li className="mr-12 mt-5 text-lg">
          <Link href="/calender" className="text-white">
            Calender
          </Link>
        </li>
        <li className="mr-12 mt-5 text-lg">
          <Link href="/leaders" className="text-white">
            Leaders
          </Link>
        </li>
        <li className="mr-12 mt-5 text-lg">
          <Link href="/pastlessons" className="text-white">
            Lessons
          </Link>
        </li>
        <li className="mr-12 mt-5 text-lg">
          <Link href="/about" className="text-white">
            About
          </Link>
        </li>
        <li className="mr-12 mt-5 text-lg">
          <Link href="/contact" className="text-white">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
