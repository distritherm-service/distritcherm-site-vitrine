'use client';

import React from 'react';
import Breadcrumb from '@/components/navigation/Breadcrumb';
import Footer from '@/components/layout/Footer';

const QuiSommesNousPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Breadcrumb />
      <main className="flex-grow">
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-[#7CB9E8]/30">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.2]" />
            <div className="absolute w-96 h-96 -top-48 -left-48 bg-[#7CB9E8] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
            <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-[#007FFF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          </div>

          <div className="container relative mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative inline-block">
                <span className="bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] bg-clip-text text-transparent">
                  Qui Sommes Nous ?
                </span>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] rounded-full"></div>
              </h1>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QuiSommesNousPage; 