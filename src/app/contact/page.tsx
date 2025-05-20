'use client';
import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaClock, FaBuilding, FaSpinner, FaCheckCircle, FaExclamationTriangle, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
import Breadcrumb from '@/components/navigation/Breadcrumb';
import Footer from '@/components/layout/Footer';
import { contactService, ContactFormData as ApiContactFormData, Agency } from '@/services/contactService';
import Image from 'next/image';

// Interface pour le formulaire de contact
interface ContactFormData {
  civility: string;  // Type plus strict pour la civilité
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

const Contact: React.FC = () => {
  const [agencies, setAgencies] = useState<Agency[]>([]);
  const [loading, setLoading] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // État pour le formulaire avec une valeur initiale pour la civilité
  const [formData, setFormData] = useState<ContactFormData>({
    civility: 'Non précisé',  // Valeur par défaut valide
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

  // Effet pour faire disparaître les messages d'alerte après 3 secondes
  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess('');
        setError('');
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  // Récupérer les agences depuis l'API
  useEffect(() => {
    const fetchAgencies = async () => {
      try {
        setLoading(true);
        const agenciesData = await contactService.getAgencies();
        setAgencies(agenciesData);
      } catch (err) {
        console.error('Erreur lors de la récupération des agences:', err);
        setError('Impossible de récupérer la liste des agences. Veuillez réessayer plus tard.');
      } finally {
        setLoading(false);
      }
    };

    fetchAgencies();
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
    setFormData(prev => ({
      ...prev,
      civility
    }));
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
        setError('Vous pouvez joindre jusqu\'à 3 fichiers maximum.');
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

    // Validation minimale côté client
    if (!formData.agency_id) {
      setError('Veuillez sélectionner une agence.');
      return;
    }

    if (!formData.civility || !['M.', 'Mme', 'Non précisé'].includes(formData.civility)) {
      setError('Veuillez sélectionner une civilité valide.');
      return;
    }

    try {
      setFormLoading(true);
      
      // Préparation des données pour l'API
      const apiData: ApiContactFormData = {
        civility: formData.civility,
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        phone_number: formData.phone_number,
        company_name: formData.company_name || '',
        address: formData.address,
        postal_code: formData.postal_code,
        city: formData.city,
        principal_activity: formData.principal_activity,
        message: formData.message || '',
        agency_id: formData.agency_id as number,
        attachments: formData.attachments
      };
      
      // Envoi du formulaire via le service
      const response = await contactService.submitContactForm(apiData);
      
      if (response.success) {
        setSuccess(response.message);
        
        // Réinitialiser le formulaire
        setFormData({
          civility: formData.civility,  // Conserver la dernière civilité choisie
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
        
        // Faire défiler vers le haut pour voir le message de succès
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setError(response.message);
        
        // Faire défiler vers le haut pour voir le message d'erreur
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      
      setFormLoading(false);
    } catch (err: any) {
      console.error('Erreur lors de l\'envoi du message:', err);
      setError('Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer plus tard.');
      setFormLoading(false);
      
      // Faire défiler vers le haut pour voir le message d'erreur
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#EEF7FF]">
      {/* Hero compact */}
      <section className="relative h-56 md:h-64 w-full overflow-hidden shadow-sm">
        {/* Image d'arrière-plan */}
        <div className="absolute inset-0">
          <Image
            src="/image-contact.png"
            alt="Contact Distritherm Services"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-4xl font-bold text-gray-800 mb-2">Contact</h1>
          <Breadcrumb />
        </div>

        <div className="absolute bottom-0 left-1/2 w-full max-w-none -translate-x-1/2">
          <svg viewBox="0 0 1600 100" className="w-full h-6 md:h-8" preserveAspectRatio="none">
            <path d="M0,0 C600,100 1000,100 1600,0 L1600,100 L0,100 Z" fill="#EEF7FF" />
          </svg>
        </div>
      </section>

      <main className="flex-grow relative z-10">
        <section className="relative py-20 overflow-hidden bg-[#EEF7FF]">
          <div className="container relative mx-auto px-4">
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
                    agencies && agencies.length > 0 ? agencies.map((agency) => (
                      <div key={agency.id} className="mb-8 last:mb-0">
                        <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-md hover:shadow-lg transition-all duration-300">
                          <div className="flex-shrink-0">
                            <FaBuilding className="w-6 h-6 text-[#007FFF]" />
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-semibold text-gray-800 text-lg">{agency.name}</h4>
                            
                            <div className="mt-3 space-y-2">
                              <div className="flex items-start space-x-2">
                                <FaMapMarkerAlt className="w-4 h-4 text-gray-500 mt-1" />
                                <div>
                                  <p className="text-gray-600 text-sm">{agency.address}</p>
                                  <p className="text-gray-600 text-sm">{agency.postalCode} {agency.city}</p>
                                  <p className="text-gray-600 text-sm">{agency.country}</p>
                                </div>
                              </div>
                              
                              <div className="flex items-center space-x-2">
                                <FaPhone className="w-4 h-4 text-gray-500" />
                                <p className="text-gray-600 text-sm">{agency.phoneNumber}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )) : (
                      <div className="p-4 bg-yellow-50 rounded-lg text-yellow-700">
                        Aucune agence disponible pour le moment.
                      </div>
                    )
                  )}

                  {/* Autres informations de contact */}
                  <div className="space-y-4 mt-8 border-t pt-6">
                    <div className="flex items-center space-x-4">
                      <FaEnvelope className="w-5 h-5 text-[#007FFF]" />
                      <span className="text-gray-600">info@distritherm.fr</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <FaClock className="w-5 h-5 text-[#007FFF]" />
                      <span className="text-gray-600">Lun-Ven: 6h30-17h</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulaire de contact */}
              <div className="lg:col-span-2">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden transition-all duration-300">
                  
                <div className="bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] p-6 text-white">
                    <h2 className="text-2xl font-bold mb-1">Formulaire de Contact</h2>
                    <p className="text-blue-50 text-sm">Contactez-nous pour toute question ou demande d'information</p>
                  </div>
                  
                  <div className="p-8">
                    {error && (
                      <div className="p-4 bg-red-50 rounded-lg text-red-700 mb-6">
                        {error}
                      </div>
                    )}

                    {success && (
                      <div className="p-4 bg-green-50 rounded-lg text-green-700 mb-6 flex items-start">
                        <FaCheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <span>{success}</span>
                      </div>
                    )}
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Sélection de l'agence */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Votre Agence
                          <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="agency_id"
                          value={formData.agency_id || ''}
                          onChange={handleAgencyChange}
                          className="w-full px-4 h-[45px] rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007FFF] focus:border-transparent bg-white/70"
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
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Civilité
                          <span className="text-red-500">*</span>
                        </label>
                        <div className="flex space-x-4">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="civility"
                              value="M."
                              checked={formData.civility === 'M.'}
                              onChange={() => handleCivilityChange('M.')}
                              className="w-4 h-4 text-[#007FFF] border-gray-300 focus:ring-[#007FFF]"
                              required
                            />
                            <span className="ml-2 text-gray-700">M.</span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="civility"
                              value="Mme"
                              checked={formData.civility === 'Mme'}
                              onChange={() => handleCivilityChange('Mme')}
                              className="w-4 h-4 text-[#007FFF] border-gray-300 focus:ring-[#007FFF]"
                              required
                            />
                            <span className="ml-2 text-gray-700">Mme</span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="civility"
                              value="Non précisé"
                              checked={formData.civility === 'Non précisé'}
                              onChange={() => handleCivilityChange('Non précisé')}
                              className="w-4 h-4 text-[#007FFF] border-gray-300 focus:ring-[#007FFF]"
                              required
                            />
                            <span className="ml-2 text-gray-700">Non précisé</span>
                          </label>
                        </div>
                      </div>

                      {/* Nom et Prénom */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nom
                            <span className="text-red-500">*</span>
                            <span className="text-xs text-gray-500 ml-2">(max 100 caractères)</span>
                          </label>
                          <input
                            type="text"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007FFF] focus:border-transparent bg-white/70"
                            placeholder="Nom"
                            maxLength={100}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Prénom
                            <span className="text-red-500">*</span>
                            <span className="text-xs text-gray-500 ml-2">(max 100 caractères)</span>
                          </label>
                          <input
                            type="text"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007FFF] focus:border-transparent bg-white/70"
                            placeholder="Prénom"
                            maxLength={100}
                            required
                          />
                        </div>
                      </div>

                      {/* Nom de l'entreprise */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nom de l'entreprise
                        </label>
                        <input
                          type="text"
                          name="company_name"
                          value={formData.company_name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007FFF] focus:border-transparent bg-white/70"
                          placeholder="Nom de votre entreprise"
                        />
                      </div>

                      {/* Email et Téléphone */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Adresse e-mail
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007FFF] focus:border-transparent bg-white/70"
                            placeholder="Adresse e-mail"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Téléphone
                            <span className="text-red-500">*</span>
                            <span className="text-xs text-gray-500 ml-2">(max 20 caractères)</span>
                          </label>
                          <input
                            type="tel"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007FFF] focus:border-transparent bg-white/70"
                            placeholder="Téléphone"
                            maxLength={20}
                            required
                          />
                        </div>
                      </div>

                      {/* Adresse */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Adresse 
                          <span className="text-red-500">*</span>
                          <span className="text-xs text-gray-500 ml-2">(max 255 caractères)</span>
                        </label>
                        <textarea
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          rows={2}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007FFF] focus:border-transparent bg-white/70"
                          placeholder="Adresse"
                          maxLength={255}
                          required
                        />
                      </div>

                      {/* Code Postal et Ville */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Code Postal
                            <span className="text-red-500">*</span>
                            <span className="text-xs text-gray-500 ml-2">(max 10 caractères)</span>
                          </label>
                          <input
                            type="text"
                            name="postal_code"
                            value={formData.postal_code}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007FFF] focus:border-transparent bg-white/70"
                            placeholder="Code Postal"
                            maxLength={10}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Ville
                            <span className="text-red-500">*</span>
                            <span className="text-xs text-gray-500 ml-2">(max 100 caractères)</span>
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007FFF] focus:border-transparent bg-white/70"
                            placeholder="Ville"
                            maxLength={100}
                            required
                          />
                        </div>
                      </div>

                      {/* Activité Principale */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Activité Principale
                          <span className="text-red-500">*</span>
                          <span className="text-xs text-gray-500 ml-2">(max 255 caractères)</span>
                        </label>
                        <input
                          type="text"
                          name="principal_activity"
                          value={formData.principal_activity}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007FFF] focus:border-transparent bg-white/70"
                          placeholder="Activité Principale"
                          maxLength={255}
                          required
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message
                          <span className="text-xs text-gray-500 ml-2">(max 1000 caractères)</span>
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007FFF] focus:border-transparent bg-white/70"
                          placeholder="Message"
                          maxLength={1000}
                        />
                      </div>

                      {/* Pièces jointes */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Pièces jointes
                          <span className="text-xs text-gray-500 ml-2">(3 fichiers max, 5MB par fichier)</span>
                        </label>
                        <div className="flex flex-col space-y-2">
                          <input
                            type="file"
                            multiple
                            onChange={handleFileChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007FFF] focus:border-transparent bg-white/70"
                            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.xls,.xlsx"
                          />
                          {formData.attachments.length > 0 && (
                            <div className="mt-2">
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
                          className="w-full px-6 py-4 bg-gradient-to-r from-[#7CB9E8] to-[#007FFF] text-white font-medium rounded-lg hover:from-[#6ba9d8] hover:to-[#0065cc] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
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

export default Contact; 