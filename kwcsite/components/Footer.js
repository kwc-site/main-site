import React from "react";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-blue-950 mt-auto bottom-0 left-0 w-full text-center">
      <nav className="mx-auto">
        <ul className="flex justify-center mt-2 mb-3 text-lg">
          <li className="mr-6 ml-6 text-white flex items-center">
            <a
              href="https://instagram.com/njitkidswhocode?igshid=YmMyMTA2M2Y="
              className="mr-10"
            >
              <Image
                src="/clubphotos/instagram.png"
                width="50"
                height="50"
                alt="Instagram logo"
              />
            </a>
            <a href="https://discord.gg/jKDhSJBWEe" className="mt-1 mr-10">
              <Image
                src="/clubphotos/discordlogo.png"
                width="45"
                height="45"
                alt="Discord logo"
              />
            </a>
            <a href="mailto: njitkwc@gmail.com" className="mt-1">
              <Image
                src="/clubphotos/emaillogo.png"
                height="80"
                width="63"
                alt="Discord logo"
              />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
