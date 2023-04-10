import React from "react";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import Image from "next/image";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram,faDiscord} from "@fortawesome/free-brands-svg-icons";
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
              <FontAwesomeIcon icon ={faInstagram}></FontAwesomeIcon>
            </a>
            <a href="https://discord.gg/jKDhSJBWEe" className="mt-1 mr-10">
              <FontAwesomeIcon icon={faDiscord}/>
            </a>
            <a href="mailto: njitkwc@gmail.com" className="mt-1">
            <FontAwesomeIcon icon ={faEnvelope}></FontAwesomeIcon>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
