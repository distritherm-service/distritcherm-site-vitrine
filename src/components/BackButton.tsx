'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';

const BackButton: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 100);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBack}
      className={`fixed bottom-24 right-8 z-50 p-3 rounded-full bg-gradient-to-br from-[#007FFF] to-[#7CB9E8] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none ${
        visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Retour en arrière"
    >
      <FaArrowLeft className="w-5 h-5" />
    </button>
  );
};

export default BackButton; 