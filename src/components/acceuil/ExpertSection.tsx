import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ExpertSection = () => {
  return (
    <div className="w-full bg-[#DCDCDC] h-[200px] relative overflow-visible mt-20">
      <div className="max-w-7xl mx-auto h-full">
        <div className="flex items-center h-full px-4 relative">
          <div className="text-left absolute left-16 z-10 mt-8 ml-8">
            <h2 className="text-[24px] leading-tight font-bold text-gray-800 mb-6">
              "Besoin d&apos;un conseil sur votre
              commande ou votre projet ?"
            </h2>
            <div className="text-center">
              <Link
                href="/contact"
                className="inline-block px-10 py-3 bg-[#8B0000] text-white text-sm font-semibold rounded hover:bg-red-900 transition-colors duration-200 shadow-md"
              >
                Contacter un expert
              </Link>
            </div>
          </div>
          <div className="absolute right-32 bottom-0 h-[320px]" style={{ transform: 'translateY(-2px)' }}>
            <div className="relative h-full min-w-[450px] w-auto">
              <Image
                src="/image-conseiller2.png"
                alt="Expert conseil"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 200px, 400px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertSection; 