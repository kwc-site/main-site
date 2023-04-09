import React from "react";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-blue-950 mt-auto bottom-0 left-0 h-20 w-full text-center">
      <nav className="mx-auto">
        <ul className="flex justify-center mt-5 text-lg">
          <li className="mr-12 ml-12 text-white">
            <Link href="/">KWC</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
