'use client';

import React, { useState, useEffect } from 'react';
import { FaUsers, FaGraduationCap, FaHandshake, FaChartLine, FaSpinner, FaCheckCircle } from 'react-icons/fa';
import Breadcrumb from '@/components/navigation/Breadcrumb';
import Footer from '@/components/layout/Footer';

interface FormData {
  desired_position: string;
  current_position: string;
  civility: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  address: string;
  postal_code: string;
  city: string;
  message: string;
}

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_FILE_TYPES = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

const RecrutementPage = () => {
  const [formData, setFormData] = useState<FormData>({
    desired_position: '',
    current_position: '',
    civility: '',
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    address: '',
    postal_code: '',
    city: '',
    message: ''
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [animateItems, setAnimateItems] = useState(false);

  const postes = [
    "Commercial(e) B2B",
    "Technicien(ne) SAV",
    "Responsable logistique",
    "Assistant(e) commercial(e)",
    "Chargé(e) de clientèle",
    "Technicien(ne) de maintenance"
  ];

  const avantages = [
    {
      icon: <FaUsers className="w-8 h-8 text-[#007FFF]" />,
      title: "Équipe dynamique",
      description: "Rejoignez une équipe passionnée et collaborative"
    },
    {
      icon: <FaGraduationCap className="w-8 h-8 text-[#007FFF]" />,
      title: "Formation continue",
      description: "Développez vos compétences avec nos programmes de formation"
    },
    {
      icon: <FaHandshake className="w-8 h-8 text-[#007FFF]" />,
      title: "Environnement stimulant",
      description: "Travaillez dans un cadre moderne et innovant"
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-[#007FFF]" />,
      title: "Évolution de carrière",
      description: "Des opportunités d&apos;évolution au sein de l&apos;entreprise"
    }
  ];

  const validateFile = (file: File): string | null => {
    if (file.size > MAX_FILE_SIZE) {
      return `Le fichier "${file.name}" dépasse la taille maximale de 5 MB`;
    }
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      return `Format du fichier "${file.name}" non supporté. Utilisez PDF, DOC ou DOCX`;
    }
    return null;
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, type: 'cv' | 'motivation') => {
    const file = event.target.files?.[0];
    if (file) {
      const error = validateFile(file);
      if (error) {
        alert(error);
        event.target.value = '';
        if (type === 'cv') {
          setCvFile(null);
        }
        return;
      }

      if (type === 'cv') {
        setCvFile(file);
        setErrors({ ...errors, cvFile: '' });
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.desired_position) newErrors.desired_position = 'Veuillez sélectionner un poste';
    if (!formData.current_position) newErrors.current_position = 'Veuillez indiquer votre poste actuel';
    if (!formData.civility) newErrors.civility = 'Veuillez sélectionner une civilité';
    if (!formData.last_name) newErrors.last_name = 'Le nom est requis';
    if (!formData.first_name) newErrors.first_name = 'Le prénom est requis';
    if (!formData.email) newErrors.email = 'L&apos;email est requis';
    else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Veuillez saisir un email valide';
      }
    }
    if (!formData.phone_number) newErrors.phone_number = 'Le téléphone est requis';
    if (!formData.address) newErrors.address = 'L&apos;adresse est requise';
    if (!formData.postal_code) newErrors.postal_code = 'Le code postal est requis';
    if (!formData.city) newErrors.city = 'La ville est requise';
    if (!formData.message) newErrors.message = 'Le message est requis';
    if (!cvFile) newErrors.cvFile = 'Le CV est requis';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setFormData({
      desired_position: '',
      current_position: '',
      civility: '',
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      address: '',
      postal_code: '',
      city: '',
      message: ''
    });
    setCvFile(null);
    const cvInput = document.getElementById('cv-upload') as HTMLInputElement;
    if (cvInput) cvInput.value = '';
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    if (!cvFile) {
      alert('Le CV est obligatoire');
      setErrors(prev => ({ ...prev, cvFile: 'Le CV est obligatoire' }));
      return;
    }

    setIsLoading(true);
    setShowSuccessMessage(false);

    try {
      // Simulation d&apos;un envoi de formulaire
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setShowSuccessMessage(true);
      resetForm();
    } catch (error) {
      console.error('Erreur lors de l&apos;envoi de la candidature:', error);
      alert('Une erreur est survenue lors de l&apos;envoi de votre candidature');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Déclencher les animations après le chargement de la page
    setTimeout(() => {
      setAnimateItems(true);
    }, 100);
  }, []);

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
                  Rejoignez notre équipe
                </span>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] rounded-full"></div>
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto mt-8">
                Découvrez les opportunités de carrière chez Distritherm Services et participez à notre développement
              </p>
            </div>

            {/* Section des avantages + Formulaire */}
            <div className="flex flex-col lg:flex-row gap-8 mb-16">
              {/* Colonne Avantages */}
              <div className="lg:w-2/5 w-full">
                <div className="grid grid-cols-1 gap-8">
                  {avantages.map((avantage, index) => (
                    <div
                      key={index}
                      className={`bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-blue-50 hover:border-[#7CB9E8]/50 relative overflow-hidden ${animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      {/* Effet de brillance au survol */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1500 ease-in-out opacity-0 group-hover:opacity-100" />
                      
                      <div className="w-16 h-16 rounded-lg bg-[#7CB9E8]/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#007FFF]/30">
                        <div className="w-8 h-8 text-[#007FFF] transition-all duration-300 group-hover:text-[#0056b3]">
                          {avantage.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-[#007FFF]">{avantage.title}</h3>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">{avantage.description}</p>
                      
                      {/* Cercle décoratif animé */}
                      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-100 rounded-full opacity-0 group-hover:opacity-10 transition-all duration-500 transform scale-0 group-hover:scale-100"></div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Colonne Formulaire */}
              <div className="lg:w-3/5 w-full">
                <div className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden transition-all duration-1000 transform ${animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
                  {/* En-tête stylisé du formulaire */}
                  <div className="bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] p-6 text-white">
                    <h2 className="text-2xl font-bold mb-1">Formulaire de recrutement</h2>
                    <p className="text-blue-50 text-sm">Complétez le formulaire ci-dessous pour nous rejoindre</p>
                  </div>
                  
                  <div className="p-8">
                    {showSuccessMessage && (
                      <div className="bg-green-50 p-4 rounded-lg mb-6 border border-green-200 animate-fade-in">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0">
                            <FaCheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <div>
                            <h3 className="text-green-800 font-medium">Candidature envoyée avec succès!</h3>
                            <p className="text-green-700 mt-1">
                              Votre candidature a bien été reçue. Nous l&apos;examinerons dans les plus brefs délais et reviendrons vers vous prochainement.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Poste souhaité */}
                      <div className="transition-all duration-300 transform hover:-translate-y-1">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Poste Souhaité
                          <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="desired_position"
                          value={formData.desired_position}
                          onChange={handleInputChange}
                          className={`w-full px-4 rounded-lg h-[45px] rounded-lg border ${errors.desired_position ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-[#007FFF] focus:border-transparent bg-white/70 transition-all duration-300 hover:border-[#007FFF]`}
                        >
                          <option value="">Sélectionnez un poste</option>
                          {postes.map((poste) => (
                            <option key={poste} value={poste}>
                              {poste}
                            </option>
                          ))}
                        </select>
                        {errors.desired_position && <p className="text-red-500 text-sm mt-1 animate-pulse-custom">{errors.desired_position}</p>}
                      </div>

                      {/* Poste actuel */}
                      <div className="transition-all duration-300 transform hover:-translate-y-1">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Poste Actuel
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="current_position"
                          value={formData.current_position}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-lg border ${errors.current_position ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-[#007FFF] focus:border-transparent bg-white/70 transition-all duration-300 hover:border-[#007FFF]`}
                          placeholder="Votre poste actuel"
                        />
                        {errors.current_position && <p className="text-red-500 text-sm mt-1 animate-pulse-custom">{errors.current_position}</p>}
                      </div>

                      {/* Civilité avec animation */}
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
                                name="civility"
                                value={civility}
                                checked={formData.civility === civility}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-[#007FFF] border-gray-300 focus:ring-[#007FFF]"
                              />
                              <span className="ml-2 text-gray-700 group-hover:text-[#007FFF] transition-colors duration-300">{civility}</span>
                            </label>
                          ))}
                        </div>
                        {errors.civility && <p className="text-red-500 text-sm mt-1 animate-pulse-custom">{errors.civility}</p>}
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
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded-lg border ${errors.last_name ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-[#007FFF] focus:border-transparent bg-white/70 transition-all duration-300 hover:border-[#007FFF]`}
                            placeholder="Nom"
                          />
                          {errors.last_name && <p className="text-red-500 text-sm mt-1 animate-pulse-custom">{errors.last_name}</p>}
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
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded-lg border ${errors.first_name ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-[#007FFF] focus:border-transparent bg-white/70 transition-all duration-300 hover:border-[#007FFF]`}
                            placeholder="Prénom"
                          />
                          {errors.first_name && <p className="text-red-500 text-sm mt-1 animate-pulse-custom">{errors.first_name}</p>}
                        </div>
                      </div>

                      {/* Email et Téléphone */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="transition-all duration-300 transform hover:-translate-y-1">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-[#007FFF] focus:border-transparent bg-white/70 transition-all duration-300 hover:border-[#007FFF]`}
                            placeholder="Email"
                          />
                          {errors.email && <p className="text-red-500 text-sm mt-1 animate-pulse-custom">{errors.email}</p>}
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
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded-lg border ${errors.phone_number ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-[#007FFF] focus:border-transparent bg-white/70 transition-all duration-300 hover:border-[#007FFF]`}
                            placeholder="Téléphone"
                          />
                          {errors.phone_number && <p className="text-red-500 text-sm mt-1 animate-pulse-custom">{errors.phone_number}</p>}
                        </div>
                      </div>

                      {/* Adresse */}
                      <div className="transition-all duration-300 transform hover:-translate-y-1">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Adresse
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-lg border ${errors.address ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-[#007FFF] focus:border-transparent bg-white/70 transition-all duration-300 hover:border-[#007FFF]`}
                          placeholder="Adresse"
                        />
                        {errors.address && <p className="text-red-500 text-sm mt-1 animate-pulse-custom">{errors.address}</p>}
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
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded-lg border ${errors.postal_code ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-[#007FFF] focus:border-transparent bg-white/70 transition-all duration-300 hover:border-[#007FFF]`}
                          />
                          {errors.postal_code && <p className="text-red-500 text-sm mt-1 animate-pulse-custom">{errors.postal_code}</p>}
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
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded-lg border ${errors.city ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-[#007FFF] focus:border-transparent bg-white/70 transition-all duration-300 hover:border-[#007FFF]`}
                            placeholder="Ville"
                          />
                          {errors.city && <p className="text-red-500 text-sm mt-1 animate-pulse-custom">{errors.city}</p>}
                        </div>
                      </div>

                      {/* Message */}
                      <div className="transition-all duration-300 transform hover:-translate-y-1">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message
                          <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-[#007FFF] focus:border-transparent bg-white/70 transition-all duration-300 hover:border-[#007FFF]`}
                          placeholder="Votre message"
                        />
                        {errors.message && <p className="text-red-500 text-sm mt-1 animate-pulse-custom">{errors.message}</p>}
                      </div>

                      {/* Fichiers */}
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-grow">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            CV
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => handleFileChange(e, 'cv')}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007FFF] focus:border-transparent bg-white/70 transition-all duration-300 hover:border-[#007FFF]"
                          />
                          {errors.cvFile && <p className="text-red-500 text-sm mt-1 animate-pulse-custom">{errors.cvFile}</p>}
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] text-white font-semibold hover:from-[#007FFF] hover:to-[#7CB9E8] transition-all duration-300"
                      >
                        {isLoading ? (
                          <FaSpinner className="animate-spin mr-2" />
                        ) : (
                          "Soumettre la candidature"
                        )}
                      </button>
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

export default RecrutementPage;