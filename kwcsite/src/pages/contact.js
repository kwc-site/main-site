import React from 'react'
import Link from "next/link";
import { Router, useRouter } from "next/router";
import Image from "next/image";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faDiscord } from "@fortawesome/free-brands-svg-icons";

function contact() {
  return (
    <main className="w-full text-white">
      <div
        className="p-10 text-xl text-center opacity-100 animate-fade-in"

      >
        <h1 className='text-4xl mb-7'>
          Contacts
        </h1>
        <h1 className='text-3xl mb-7'>
          Please email for professional inquiries
        </h1>
        <hr className='bg-white my-4'></hr>

        <ul className="flex justify-center mt-2 mb-3 text-lg">
          <li className="mr-6 ml-6 text-white flex items-center mt-5">
            <a href="https://discord.gg/jKDhSJBWEe" className="mt-1 mr-10">
              <FontAwesomeIcon size="3x" icon={faDiscord}></FontAwesomeIcon>
            </a>
            <a href="mailto: njitkwc@gmail.com" className="mt-1 ml-10">
              <FontAwesomeIcon size="3x" icon={faEnvelope}></FontAwesomeIcon>
            </a>
          </li>
        </ul>




      </div>
      <style jsx>{`

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
    </main>
  )
}

export default contact