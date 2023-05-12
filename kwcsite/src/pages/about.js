import React from 'react'

function about() {
  return (
    
    <main className="w-full text-white mt-5">
              <div
          className="p-10 text-xl text-center opacity-100 animate-fade-in"
      
        >
          <p>
            A professional club at New Jersey Institute of Technology dedicated
            to teaching programming to young children through a unique
            curriculum.
          </p>
        </div>
        <style jsx>{`
        p {
          font-size: 2rem;
          line-height: 1.5;
        }

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