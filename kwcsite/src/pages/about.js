import Image from 'next/image'
import React from 'react'

function about() {
  return (

    <main className="w-full text-white">
      <div
        className="p-10 text-xl text-center opacity-100 animate-fade-in"

      >
        <h1 className='text-4xl mb-7'>
          Kids Who Code: Empowering Youth through Technology Education
        </h1>
        <hr className='bg-white'></hr>

        <div className='mt-6'>
          <div class="flex flex-wrap items-center">
            <div class="w-full md:w-3/4 pr-4 mb-5 md:mb-0">
              <h1 class="text-2xl">Founded at the New Jersey Institute of Technology in Newark, we are dedicated to empowering youth through technology education.</h1>
            </div>
            <div class="w-full md:w-1/4">
              <Image src="/njitlogo.png" alt="your image" class=" max-w-md mx-auto md:ml-auto mb-4 md:mb-0" width={250} height={250}/>
            </div>
            
          </div>
          <hr className='bg-white'></hr>

          <h1 className='text-2xl'>We are passionate about making a difference in our community, and we are proud to partner with Hawthorne Ave Elementary School in Newark to facilitate after-school programming sessions. Our curriculum is designed to augment the programming proficiency of the youth in Newark, and we aim to inspire a lifelong love of learning through creative projects.</h1>
        </div>




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

export default about