import Link from "next/link";
import React from "react";
import { Router, useRouter } from "next/router";
import Image from "next/image";

function Navbar() {
  const router = useRouter();

  return (
    <nav>
      <div>
        {/* <Link href="/">KWC</Link> */}

        <Link href="/">
          <Image src="/kwclogo.png" width="64" height="64"></Image>
        </Link>
        <Link href="/">Kids Who Code</Link>
        <Link href="/calender">Calender</Link>
        <Link href="/leaders">Leaders</Link>
        <Link href="/lessons">Lessons</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
