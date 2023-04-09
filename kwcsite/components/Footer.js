import React from "react";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import Image from "next/image";

function Footer() {
  return (
    <nav className="bg-blue-950">
      <ul className="flex justify-center">
        <li className="mr-12 ml-12 mt-5 text-lg">
          <Link href="/" className="text-white">
            KWC
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Footer;
