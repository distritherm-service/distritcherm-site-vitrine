'use client';

import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaClock, FaBuilding, FaSpinner, FaCheckCircle } from 'react-icons/fa';
import Breadcrumb from '@/components/navigation/Breadcrumb';
import Footer from '@/components/layout/Footer';

// Interface pour les agences
interface Agency {
  id: number;
  name: string;
  address: string;
  city?: string;
  postal_code?: string;
}

// Interface pour le formulaire de contact
interface ContactFormData {
  civility: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  company_name: string;
  address: string;
  postal_code: string;
  city: string;
  principal_activity: string;
  message: string;
  agency_id: number | null;
  attachments: File[];
}

const ContactPage = () => {
  // Exemple d'agences statiques pour démonstration
  const [agencies] = useState<Agency[]>([
    { id: 1, name: 'Agence Paris', address: '123 rue de Paris', postal_code: '75001', city: 'Paris' },
    { id: 2, name: 'Agence Lyon', address: '456 rue de Lyon', postal_code: '69001', city: 'Lyon' },
    { id: 3, name: 'Agence Marseille', address: '789 avenue de Marseille', postal_code: '13001', city: 'Marseille' }
  ]);
  
  const [loading] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [animateItems, setAnimateItems] = useState(false);

  // État pour le formulaire
  const [formData, setFormData] = useState<ContactFormData>({
    civility: '',
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    company_name: '',
    address: '',
    postal_code: '',
    city: '',
    principal_activity: '',
    message: '',
    agency_id: null,
    attachments: []
  });

  useEffect(() => {
    // Déclencher les animations après le chargement de la page
    setTimeout(() => {
      setAnimateItems(true);
    }, 100);
  }, []);

  // Gérer les changements dans le formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Gérer les changements de civilité (radio buttons)
  const handleCivilityChange = (civility: string) => {
    setFormData({
      ...formData,
      civility
    });
  };

  // Gérer les changements d'agence
  const handleAgencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      agency_id: value ? parseInt(value, 10) : null
    });
  };

  // Gérer l'ajout de pièces jointes
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      // Convertir FileList en Array pour pouvoir le manipuler
      const filesArray = Array.from(e.target.files);
      
      // Vérifier la taille des fichiers (limite à 5MB par fichier)
      const validFiles = filesArray.filter(file => file.size <= 5 * 1024 * 1024);
      
      if (validFiles.length !== filesArray.length) {
        setError('Certains fichiers dépassent la limite de 5MB et ont été ignorés.');
      }
      
      // Maximum 3 fichiers
      const limitedFiles = validFiles.slice(0, 3);
      
      if (validFiles.length > 3) {
        setError('Vous pouvez joindre jusqu&apos;à 3 fichiers maximum.');
      }
      
      setFormData({
        ...formData,
        attachments: limitedFiles
      });
    }
  };

  // Soumettre le formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validation du formulaire
    if (!formData.civility) {
      setError('Veuillez sélectionner une civilité.');
      return;
    }

    if (!formData.first_name || !formData.last_name) {
      setError('Veuillez renseigner votre nom et prénom.');
      return;
    }

    if (!formData.email) {
      setError('Veuillez renseigner votre email.');
      return;
    }

    // Validation basique d'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Veuillez saisir un email valide.');
      return;
    }

    if (!formData.phone_number) {
      setError('Veuillez renseigner votre numéro de téléphone.');
      return;
    }

    if (!formData.address || !formData.postal_code || !formData.city) {
      setError('Veuillez renseigner votre adresse complète.');
      return;
    }

    if (!formData.agency_id) {
      setError('Veuillez sélectionner une agence.');
      return;
    }

    // Simulation d'envoi du formulaire
    try {
      setFormLoading(true);
      
      // Simuler une attente de 2 secondes
      setTimeout(() => {
        setSuccess('Votre message a été envoyé avec succès. Notre équipe vous contactera prochainement.');
        
        // Réinitialiser le formulaire
        setFormData({
          civility: '',
          first_name: '',
          last_name: '',
          email: '',
          phone_number: '',
          company_name: '',
          address: '',
          postal_code: '',
          city: '',
          principal_activity: '',
          message: '',
          agency_id: null,
          attachments: []
        });
        
        setFormLoading(false);
      }, 2000);
    } catch {
      setError('Une erreur est survenue lors de l&apos;envoi de votre message. Veuillez réessayer plus tard.');
      setFormLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-[#7CB9E8]/30">
      {/* Fond global avec motif de grille et effets blob */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.2] pointer-events-none" />
      <div className="absolute w-96 h-96 -top-48 -left-48 bg-[#7CB9E8] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute w-96 h-96 top-1/3 -right-48 bg-[#007FFF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob-delay-2000" />
      <div className="absolute w-96 h-96 -bottom-48 left-1/3 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob-delay-4000" />
      
      {/* Breadcrumb avec fond transparent */}
      <div className="relative z-10">
        <Breadcrumb />
      </div>
      
      <main className="flex-grow relative z-10">
        <section className="pt-6 pb-20 overflow-hidden">
          <div className="container mx-auto px-4">
            {/* En-tête de la page */}
            <div className={`text-center mb-16 transition-all duration-1000 transform ${animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative inline-block">
                <span className="bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] bg-clip-text text-transparent">
                  Contacter votre agence
                </span>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] rounded-full"></div>
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto mt-8">
                Notre équipe est à votre disposition pour répondre à toutes vos questions
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Informations de contact */}
              <div className="lg:col-span-1">
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 sticky top-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Nos coordonnées</h3>
                  
                  {loading ? (
                    <div className="flex justify-center py-8">
                      <FaSpinner className="animate-spin h-8 w-8 text-[#007FFF]" />
                    </div>
                  ) : error ? (
                    <div className="p-4 bg-red-50 rounded-lg text-red-700 mb-6">
                      {error}
                    </div>
                  ) : (
                    /* Liste des agences */
                    agencies && agencies.length > 0 ? agencies.map((agency, index) => (
                      <div 
                        key={agency.id} 
                        className={`mb-8 last:mb-0 transition-all duration-300 transform hover:scale-105 ${animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                        style={{ transitionDelay: `${index * 150}ms` }}
                      >
                        <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-md hover:shadow-xl transition-all duration-300 border border-blue-50 hover:border-[#7CB9E8]/50 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1500 ease-in-out opacity-0 group-hover:opacity-100" />
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 rounded-lg bg-[#7CB9E8]/20 flex items-center justify-center transition-all duration-300 group-hover:bg-[#007FFF]/30">
                              <FaBuilding className="w-5 h-5 text-[#007FFF]" />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 transition-colors duration-300 group-hover:text-[#007FFF]">{agency.name}</h4>
                            <p className="text-gray-600 text-sm mt-1">{agency.address}</p>
                            {agency.postal_code && agency.city && (
                              <p className="text-gray-600 text-sm">{agency.postal_code} {agency.city}</p>
                            )}
                          </div>
                          
                          {/* Cercle décoratif animé */}
                          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-100 rounded-full opacity-0 group-hover:opacity-10 transition-all duration-500 transform scale-0 group-hover:scale-100"></div>
                        </div>
                      </div>
                    )) : (
                      <div className="p-4 bg-yellow-50 rounded-lg text-yellow-700">
                        Aucune agence disponible pour le moment.
                      </div>
                    )
                  )}

                  {/* Autres informations de contact */}
                  <div className="space-y-4 mt-8">
                    <div className={`flex items-center space-x-4 p-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md bg-white/90 ${animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                        style={{ transitionDelay: `300ms` }}>
                      <div className="w-8 h-8 rounded-lg bg-[#7CB9E8]/20 flex items-center justify-center transition-all duration-300 group-hover:bg-[#007FFF]/30">
                        <FaPhone className="w-4 h-4 text-[#007FFF]" />
                      </div>
                      <span className="text-gray-600">01 48 30 45 70</span>
                    </div>
                    <div className={`flex items-center space-x-4 p-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md bg-white/90 ${animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                        style={{ transitionDelay: `450ms` }}>
                      <div className="w-8 h-8 rounded-lg bg-[#7CB9E8]/20 flex items-center justify-center transition-all duration-300 group-hover:bg-[#007FFF]/30">
                        <FaEnvelope className="w-4 h-4 text-[#007FFF]" />
                      </div>
                      <span className="text-gray-600">info@distritherm.fr</span>
                    </div>
                    <div className={`flex items-center space-x-4 p-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md bg-white/90 ${animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                        style={{ transitionDelay: `600ms` }}>
                      <div className="w-8 h-8 rounded-lg bg-[#7CB9E8]/20 flex items-center justify-center transition-all duration-300 group-hover:bg-[#007FFF]/30">
                        <FaClock className="w-4 h-4 text-[#007FFF]" />
                      </div>
                      <span className="text-gray-600">Lun-Ven: 6h30-17h</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulaire de contact */}
              <div className="lg:col-span-2">
                <div className={`bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden transition-all duration-1000 transform ${animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
                  {/* En-tête stylisé du formulaire */}
                  <div className="bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] p-6 text-white">
                    <h2 className="text-2xl font-bold mb-1">Formulaire de contact</h2>
                    <p className="text-blue-50 text-sm">Complétez le formulaire ci-dessous pour nous contacter</p>
                  </div>
                  
                  <div className="p-8">
                    {error && (
                      <div className="p-4 bg-red-50 rounded-lg text-red-700 mb-6">
                        {error}
                      </div>
                    )}

                    {success && (
                      <div className="bg-green-50 p-4 rounded-lg mb-6 border border-green-200 animate-fade-in">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0">
                            <FaCheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <div>
                            <h3 className="text-green-800 font-medium">Message envoyé avec succès!</h3>
                            <p className="text-green-700 mt-1">{success}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Sélection de l'agence */}
                      <div className="transition-all duration-300 transform hover:-translate-y-1">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Votre Agence
                          <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="agency_id"
                          value={formData.agency_id || ''}
                          onChange={handleAgencyChange}
                          className={`w-full px-4 h-[45px] rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007FFF] focus:border-transparent bg-white/70 transition-all duration-300 hover:border-[#007FFF]`}
                          required
                        >
                          <option value="">Choisissez votre Agence</option>
                          {agencies && agencies.length > 0 && agencies.map((agency) => (
                            <option key={agency.id} value={agency.id}>
                              {agency.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Civilité */}
                      <div className="transition-all duration-300 transform hover:-translate-y-1">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Civilité
                          <span className="text-red-500">*</span>
                        </label>
                        <div className="flex space-x-4">
                          {['M.', 'Mme', 'Non précisé'].map((civility) => (
                            <label key={civility} className="flex items-center group">
                              <input
                                type="radio"
                                value={civility}
                                checked={formData.civility === civility}
                                onChange={() => handleCivilityChange(civility)}
                                className="w-4 h-4 text-[#007FFF] border-gray-300 focus:ring-[#007FFF]"
                                required
                              />
                              <span className="ml-2 text-gray-700 group-hover:text-[#007FFF] transition-colors duration-300">{civility}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Nom et Prénom */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="transition-all duration-300 transform hover:-translate-y-1">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nom
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007FFF] focus:border-transparent bg-white/70 transition-all duration-300 hover:border-[#007FFF]`}
                            placeholder="Nom"
                            required
                          />
                        </div>
                        <div className="transition-all duration-300 transform hover:-translate-y-1">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Prénom
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007FFF] focus:border-transparent bg-white/70 transition-all duration-300 hover:border-[#007FFF]`}
                            placeholder="Prénom"
                            required
                          />
                        </div>
                      </div>

                      {/* Nom de l'entreprise */}
                      <div className="transition-all duration-300 transform hover:-translate-y-1">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nom de l&apos;entreprise
                        </label>
                        <input
                          type="text"
                          name="company_name"
                          value={formData.company_name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007FFF] focus:border-transparent bg-white/70 transition-all duration-300 hover:border-[#007FFF]`}
                          placeholder="Nom de votre entreprise"
                        />
                      </div>

                      {/* Email et Téléphone */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="transition-all duration-300 transform hover:-translate-y-1">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Adresse e-mail
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007FFF] focus:border-transparent bg-white/70 transition-all duration-300 hover:border-[#007FFF]`}
                            placeholder="Adresse e-mail"
                            required
                          />
                        </div>
                        <div className="transition-all duration-300 transform hover:-translate-y-1">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Téléphone
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007FFF] focus:border-transparent bg-white/70 transition-all duration-300 hover:border-[#007FFF]`}
                            placeholder="Téléphone"
                            required
                          />
                        </div>
                      </div>

                      {/* Adresse */}
                      <div className="transition-all duration-300 transform hover:-translate-y-1">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Adresse 
                          <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          rows={2}
                          className={`w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007FFF] focus:border-transparent bg-white/70 transition-all duration-300 hover:border-[#007FFF]`}
                          placeholder="Adresse"
                          required
                        />
                      </div>

                      {/* Code Postal et Ville */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="transition-all duration-300 transform hover:-translate-y-1">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Code Postal
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="postal_code"
                            value={formData.postal_code}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007FFF] focus:border-transparent bg-white/70 transition-all duration-300 hover:border-[#007FFF]`}
                            placeholder="Code Postal"
                            required
                          />
                        </div>
                        <div className="transition-all duration-300 transform hover:-translate-y-1">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Ville
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007FFF] focus:border-transparent bg-white/70 transition-all duration-300 hover:border-[#007FFF]`}
                            placeholder="Ville"
                            required
                          />
                        </div>
                      </div>

                      {/* Activité Principale */}
                      <div className="transition-all duration-300 transform hover:-translate-y-1">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Activité Principale
                        </label>
                        <input
                          type="text"
                          name="principal_activity"
                          value={formData.principal_activity}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007FFF] focus:border-transparent bg-white/70 transition-all duration-300 hover:border-[#007FFF]`}
                          placeholder="Activité Principale"
                        />
                      </div>

                      {/* Message */}
                      <div className="transition-all duration-300 transform hover:-translate-y-1">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className={`w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007FFF] focus:border-transparent bg-white/70 transition-all duration-300 hover:border-[#007FFF]`}
                          placeholder="Message"
                        />
                      </div>

                      {/* Pièces jointes */}
                      <div className="transition-all duration-300 transform hover:-translate-y-1">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Pièces jointes
                          <span className="text-xs text-gray-500 ml-2">(3 fichiers max, 5MB par fichier)</span>
                        </label>
                        <div className="flex flex-col space-y-2">
                          <input
                            type="file"
                            multiple
                            onChange={handleFileChange}
                            className={`w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007FFF] focus:border-transparent bg-white/70 transition-all duration-300 hover:border-[#007FFF]`}
                            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.xls,.xlsx"
                          />
                          {formData.attachments.length > 0 && (
                            <div className="mt-2 bg-white/80 p-3 rounded-lg">
                              <p className="text-sm font-medium text-gray-700 mb-1">Fichiers sélectionnés :</p>
                              <ul className="list-disc pl-5 text-sm text-gray-600">
                                {formData.attachments.map((file, index) => (
                                  <li key={index} className="flex items-center justify-between">
                                    <span>{file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        const newAttachments = [...formData.attachments];
                                        newAttachments.splice(index, 1);
                                        setFormData({
                                          ...formData,
                                          attachments: newAttachments
                                        });
                                      }}
                                      className="text-red-500 hover:text-red-700 text-sm ml-2"
                                    >
                                      Supprimer
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                        <p className="mt-1 text-xs text-gray-500">Formats acceptés: PDF, JPEG, PNG, DOC, DOCX, XLS, XLSX</p>
                      </div>

                      {/* Bouton d'envoi */}
                      <div>
                        <button
                          type="submit"
                          disabled={formLoading}
                          className="w-full py-3 rounded-lg bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] text-white font-semibold hover:from-[#007FFF] hover:to-[#7CB9E8] transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {formLoading ? (
                            <span className="flex items-center justify-center">
                              <FaSpinner className="animate-spin mr-2" /> Envoi en cours...
                            </span>
                          ) : 'Envoyer'}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage; 