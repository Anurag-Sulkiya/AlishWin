// src/components/home/HeroBanner.jsx
'use client'
import React from 'react';
import Image from 'next/image';

const HeroBanner = () => {
    return (
      <div className="relative min-h-screen">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-emerald-500/90">
          {/* Add your background image here */}
          <Image src="/Images/hero-bg.png" alt="Medical background" fill className="object-cover" />
        </div>
        
        {/* Curved bottom */}
        <div className="absolute bottom-0 w-full">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L80,106.7C160,117,320,139,480,154.7C640,171,800,181,960,165.3C1120,149,1280,107,1360,85.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
  
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              WE PROVIDE BEST HEALTHCARE
            </h1>
            <p className="text-white text-lg mb-8">
              Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta
              aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis
              delectus repellat modi impedit sequi.
            </p>
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors">
              Read More
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroBanner ;