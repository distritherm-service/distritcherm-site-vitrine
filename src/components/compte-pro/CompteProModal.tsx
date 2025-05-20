'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { FaTimes, FaBuilding, FaIdCard, FaMapMarkerAlt, FaUser, FaEnvelope, FaPhone, FaComment } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const formSchema = z.object({
  entreprise: z.string().min(2, 'Le nom de l\'entreprise est requis'),
  siret: z.string().length(14, 'Le numéro SIRET doit contenir 14 chiffres'),
  adresse: z.string().min(5, 'L\'adresse est requise'),
  codePostal: z.string().length(5, 'Le code postal doit contenir 5 chiffres'),
  ville: z.string().min(2, 'La ville est requise'),
  nom: z.string().min(2, 'Le nom est requis'),
  prenom: z.string().min(2, 'Le prénom est requis'),
  email: z.string().email('Email invalide'),
  telephone: z.string().min(10, 'Le numéro de téléphone est invalide'),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface CompteProModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CompteProModal({ isOpen, onClose }: CompteProModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // TODO: Implémenter l'envoi du formulaire
      console.log(data);
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNextStep = async () => {
    const fields = currentStep === 1 
      ? ['entreprise', 'siret', 'adresse', 'codePostal', 'ville']
      : ['nom', 'prenom', 'email', 'telephone'];
    
    const isValid = await trigger(fields as any);
    if (isValid) {
      setCurrentStep(2);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 overflow-y-auto"
      >
        <div className="flex min-h-screen items-center justify-center p-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black transition-opacity"
            onClick={onClose}
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative transform overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 text-left shadow-2xl transition-all w-full max-w-2xl"
          >
            <div className="absolute right-4 top-4">
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-500 focus:outline-none transition-colors"
              >
                <FaTimes className="h-6 w-6" />
              </button>
            </div>

            <div className="px-8 py-10">
              <div className="text-center mb-10">
                <div className="inline-block p-2 px-4 mb-4 bg-blue-50 rounded-full">
                  <span className="text-blue-600 text-sm font-semibold">PROFESSIONNELS</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Ouverture de compte professionnel
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                  Rejoignez la communauté des professionnels <span className="font-semibold text-gray-800">DISTRITHERM SERVICES</span>
                </p>
              </div>

              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-xl text-center"
                >
                  <p className="text-lg font-medium">Votre demande a été envoyée avec succès</p>
                  <p className="mt-2">Nous vous contacterons dans les plus brefs délais.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  <div className="flex justify-center mb-10">
                    <div className="flex items-center space-x-8">
                      <div className={`flex flex-col items-center ${currentStep === 1 ? 'text-blue-600' : 'text-gray-400'}`}>
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${currentStep === 1 ? 'border-blue-600 bg-blue-50' : 'border-gray-400'} transition-all duration-300`}>
                          <span className="text-lg font-semibold">1</span>
                        </div>
                        <span className="mt-2 font-medium">Entreprise</span>
                      </div>
                      <div className="w-24 h-0.5 bg-gray-200 relative">
                        <div className={`absolute inset-0 bg-blue-600 transition-all duration-300 ${currentStep === 2 ? 'w-full' : 'w-0'}`}></div>
                      </div>
                      <div className={`flex flex-col items-center ${currentStep === 2 ? 'text-blue-600' : 'text-gray-400'}`}>
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${currentStep === 2 ? 'border-blue-600 bg-blue-50' : 'border-gray-400'} transition-all duration-300`}>
                          <span className="text-lg font-semibold">2</span>
                        </div>
                        <span className="mt-2 font-medium">Contact</span>
                      </div>
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      {currentStep === 1 ? (
                        <>
                          <div className="bg-gray-50 p-6 rounded-2xl">
                            <h3 className="text-lg font-semibold text-gray-900 mb-6">Informations de l'entreprise</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="relative group">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Entreprise *
                                </label>
                                <div className="relative">
                                  <FaBuilding className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                                  <input
                                    type="text"
                                    {...register('entreprise')}
                                    className="pl-12 w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white transition-all duration-200 py-3"
                                    placeholder="Nom de votre entreprise"
                                  />
                                </div>
                                {errors.entreprise && (
                                  <p className="mt-2 text-sm text-red-600 flex items-center">
                                    <span className="mr-1">⚠️</span> {errors.entreprise.message}
                                  </p>
                                )}
                              </div>

                              <div className="relative group">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Numéro SIRET *
                                </label>
                                <div className="relative">
                                  <FaIdCard className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                                  <input
                                    type="text"
                                    {...register('siret')}
                                    className="pl-12 w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white transition-all duration-200 py-3"
                                    placeholder="14 chiffres"
                                  />
                                </div>
                                {errors.siret && (
                                  <p className="mt-2 text-sm text-red-600 flex items-center">
                                    <span className="mr-1">⚠️</span> {errors.siret.message}
                                  </p>
                                )}
                              </div>

                              <div className="md:col-span-2 relative group">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Adresse *
                                </label>
                                <div className="relative">
                                  <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                                  <input
                                    type="text"
                                    {...register('adresse')}
                                    className="pl-12 w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white transition-all duration-200 py-3"
                                    placeholder="Adresse complète"
                                  />
                                </div>
                                {errors.adresse && (
                                  <p className="mt-2 text-sm text-red-600 flex items-center">
                                    <span className="mr-1">⚠️</span> {errors.adresse.message}
                                  </p>
                                )}
                              </div>

                              <div className="relative group">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Code Postal *
                                </label>
                                <div className="relative">
                                  <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                                  <input
                                    type="text"
                                    {...register('codePostal')}
                                    className="pl-12 w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white transition-all duration-200 py-3"
                                    placeholder="Code postal"
                                  />
                                </div>
                                {errors.codePostal && (
                                  <p className="mt-2 text-sm text-red-600 flex items-center">
                                    <span className="mr-1">⚠️</span> {errors.codePostal.message}
                                  </p>
                                )}
                              </div>

                              <div className="relative group">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Ville *
                                </label>
                                <div className="relative">
                                  <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                                  <input
                                    type="text"
                                    {...register('ville')}
                                    className="pl-12 w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white transition-all duration-200 py-3"
                                    placeholder="Ville"
                                  />
                                </div>
                                {errors.ville && (
                                  <p className="mt-2 text-sm text-red-600 flex items-center">
                                    <span className="mr-1">⚠️</span> {errors.ville.message}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="bg-gray-50 p-6 rounded-2xl">
                            <h3 className="text-lg font-semibold text-gray-900 mb-6">Informations de contact</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="relative group">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Nom *
                                </label>
                                <div className="relative">
                                  <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                                  <input
                                    type="text"
                                    {...register('nom')}
                                    className="pl-12 w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white transition-all duration-200 py-3"
                                    placeholder="Votre nom"
                                  />
                                </div>
                                {errors.nom && (
                                  <p className="mt-2 text-sm text-red-600 flex items-center">
                                    <span className="mr-1">⚠️</span> {errors.nom.message}
                                  </p>
                                )}
                              </div>

                              <div className="relative group">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Prénom *
                                </label>
                                <div className="relative">
                                  <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                                  <input
                                    type="text"
                                    {...register('prenom')}
                                    className="pl-12 w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white transition-all duration-200 py-3"
                                    placeholder="Votre prénom"
                                  />
                                </div>
                                {errors.prenom && (
                                  <p className="mt-2 text-sm text-red-600 flex items-center">
                                    <span className="mr-1">⚠️</span> {errors.prenom.message}
                                  </p>
                                )}
                              </div>

                              <div className="relative group">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Email *
                                </label>
                                <div className="relative">
                                  <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                                  <input
                                    type="email"
                                    {...register('email')}
                                    className="pl-12 w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white transition-all duration-200 py-3"
                                    placeholder="votre@email.com"
                                  />
                                </div>
                                {errors.email && (
                                  <p className="mt-2 text-sm text-red-600 flex items-center">
                                    <span className="mr-1">⚠️</span> {errors.email.message}
                                  </p>
                                )}
                              </div>

                              <div className="relative group">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Téléphone *
                                </label>
                                <div className="relative">
                                  <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                                  <input
                                    type="tel"
                                    {...register('telephone')}
                                    className="pl-12 w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white transition-all duration-200 py-3"
                                    placeholder="Votre numéro"
                                  />
                                </div>
                                {errors.telephone && (
                                  <p className="mt-2 text-sm text-red-600 flex items-center">
                                    <span className="mr-1">⚠️</span> {errors.telephone.message}
                                  </p>
                                )}
                              </div>

                              <div className="md:col-span-2 relative group">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Message (optionnel)
                                </label>
                                <div className="relative">
                                  <FaComment className="absolute left-4 top-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                                  <textarea
                                    {...register('message')}
                                    rows={4}
                                    className="pl-12 w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white transition-all duration-200 py-3"
                                    placeholder="Votre message..."
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  <div className="flex justify-between pt-6">
                    {currentStep === 2 && (
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                      >
                        <span className="mr-2">←</span> Retour
                      </button>
                    )}
                    <div className="flex-1 flex justify-end">
                      {currentStep === 1 ? (
                        <button
                          type="button"
                          onClick={handleNextStep}
                          className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                        >
                          Suivant <span className="ml-2">→</span>
                        </button>
                      ) : (
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Envoi en cours...
                            </>
                          ) : (
                            'Envoyer la demande'
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
} 