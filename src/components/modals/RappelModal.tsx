"use client";
import React, { useState, useRef, useEffect } from 'react';
import { FaPhoneAlt, FaTimes } from 'react-icons/fa';
import { rappelService } from '../../services';

interface RappelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RappelModal: React.FC<RappelModalProps> = ({ isOpen, onClose }) => {
  const [nom, setNom] = useState('');
  const [telephone, setTelephone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  const modalRef = useRef<HTMLDivElement>(null);
  
  // Fermer le modal si on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);
  
  // Empêcher le scroll quand le modal est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!nom || !telephone) return;
    
    setIsSubmitting(true);
    setErrorMessage(null);
    
    try {
      // Appel au service de rappel
      const response = await rappelService.requestCallback({
        fullName: nom,
        phoneNumber: telephone
      });
      
      if (response.success) {
        setSubmitSuccess(true);
        
        // Reset form après 2 secondes
        setTimeout(() => {
          setNom('');
          setTelephone('');
          setSubmitSuccess(false);
          onClose();
        }, 2000);
      } else {
        setErrorMessage(response.message);
      }
    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
      setErrorMessage('Une erreur est survenue lors de la demande de rappel');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity">
      <div 
        ref={modalRef}
        className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 overflow-hidden transform transition-all duration-300 ease-in-out"
        style={{ 
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          animation: 'modal-appear 0.3s ease-out forwards'
        }}
      >
        {/* En-tête du modal */}
        <div className="bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8] px-6 py-4 flex justify-between items-center">
          <h3 className="text-white text-xl font-bold flex items-center gap-2">
            <FaPhoneAlt className="text-white" /> Demande de rappel
          </h3>
          <button 
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors focus:outline-none"
          >
            <FaTimes className="text-2xl" />
          </button>
        </div>
        
        {/* Corps du modal */}
        <div className="p-6">
          {submitSuccess ? (
            <div className="text-center py-8">
              <div className="text-[#0ea5e9] text-5xl mb-4">✓</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Demande envoyée !</h4>
              <p className="text-gray-600">Nous vous contacterons très bientôt.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="text-gray-600 mb-6">
                Laissez-nous vos coordonnées et nous vous rappellerons dans les plus brefs délais.
              </p>
              
              {errorMessage && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                  <p className="text-red-700 text-sm">{errorMessage}</p>
                </div>
              )}
              
              <div className="mb-4">
                <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom
                </label>
                <input
                  type="text"
                  id="nom"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent outline-none transition-all"
                  placeholder='jeau'
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
                  Numéro de téléphone
                </label>
                <input
                  type="tel"
                  id="telephone"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent outline-none transition-all"
                  placeholder="01 23 45 67 89"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold py-3 px-4 rounded-md transition-all duration-300 flex justify-center items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'}`}
              >
                {isSubmitting ? (
                  <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                ) : null}
                {isSubmitting ? 'Envoi en cours...' : 'Demander un rappel'}
              </button>
            </form>
          )}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes modal-appear {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default RappelModal; 