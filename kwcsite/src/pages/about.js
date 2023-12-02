import Image from 'next/image'
import React from 'react'

function about() {
  return (

    <main className="w-full text-white">
      <div
        className="p-10 text-xl text-center opacity-100 animate-fade-in"

      >
        <h1 className='text-4xl mb-7'>
          Empowering Youth through Programming Education
        </h1>
        <hr className='bg-white my-4'></hr>

        <div className='mt-6'>
          <div className="flex flex-wrap items-center mb-5">
            <div className="w-full md:w-3/4 pr-4 mb-2 md:mb-0">
              <h1 className="text-2xl">Founded at the New Jersey Institute of Technology in Newark, we are dedicated to empowering youth through technology education and encouraging computer science.</h1>
            </div>
            <div className="w-full md:w-1/4">
              <Image src="/njitlogo.png" alt="NJIT LOGO" className=" max-w-md mx-auto md:ml-auto mb-4 md:mb-0" width={250} height={250} />
            </div>

          </div>
          <hr className='bg-white my-4'></hr>
          <div className="flex flex-wrap items-center mt-7 mb-10">

            <div className=" w-full md:w-1/4">
              <Image src="/hawthorneave.jpg" alt="Hawthorne school" className=" max-w-md mx-auto md:ml-auto mb-4 md:mb-0" width={300} height={300} />
            </div>

            <div className="w-full md:w-3/4 pr-4 mb-8 md:mb-0">
              <h1 className="text-2xl">We are passionate about making a difference in our local community, and we are proud to partner with Hawthorne Ave Elementary School in Newark to facilitate after-school programming sessions. Our curriculum is designed to augment the programming proficiency of the youth in Newark, and we aim to inspire a lifelong love of learning through creative lessons.</h1>
            </div>

          </div>
          <hr className='bg-white'></hr>
          <div className="flex flex-wrap items-center mt-6 mb-10">
            <div className="w-full md:w-3/4 pr-4 mb-5 md:mb-0">
              <h1 className="text-2xl"> We use a unique curriculum that centers on Scratch, a beginner-friendly visual programming language that allows children to create interactive stories, games, and animations. We also introduce children to the world of drones, providing them with hands-on experience in programming them.</h1>
            </div>
            <div className="w-full md:w-1/4">
              <Image src="/scratch.png" alt="your image" className=" max-w-md mx-auto md:ml-auto mb-4 md:mb-0" width={250} height={250} />
            </div>

          </div>

          <hr className='bg-white my-8'></hr>

          <h1 className='text-4xl mb-7'>
          If you&apos;re interested in joining Kids Who Code, we welcome all NJIT students, whether you&apos;re an experienced programmer or a beginner, and invite you to join us in making a difference in the lives of children in our community. 
        </h1>
        <h1 className="text-3xl mb-6"> Click the <u><a href='https://discord.com/invite/jKDhSJBWEe'>Discord</a></u> Icon or <u><a href='https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiBiNjBjPH-AhWaF1kFHUy-BwwQFnoECBgQAQ&url=https%3A%2F%2Fnjit.campuslabs.com%2Fengage%2Forganization%2Fkidswhocode&usg=AOvVaw2VNNNK7Nsx1xwPr3l1pm6f'>Highlander Hub</a></u> to learn more!</h1>


         
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