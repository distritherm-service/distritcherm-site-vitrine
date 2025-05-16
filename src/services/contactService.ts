import axiosInstance from './axios';

/**
 * Interface pour les agences
 */
export interface Agency {
  id: number;
  name: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  phoneNumber: string;
  createdAt: string;
}

/**
 * Interface pour les données du formulaire de contact
 */
export interface ContactFormData {
  civility: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  company_name?: string;
  address: string;
  postal_code: string;
  city: string;
  principal_activity: string;
  message: string;
  agency_id: number;
  attachments?: File[];
}

/**
 * Interface pour la réponse du serveur
 */
interface ContactResponse {
  success: boolean;
  message: string;
  error?: string;
}

/**
 * Service pour gérer les formulaires de contact
 */
export const contactService = {
  /**
   * Récupère la liste des agences depuis l'API
   * @returns Liste des agences
   */
  getAgencies: async (): Promise<Agency[]> => {
    try {
      const response = await axiosInstance.get('/agencies');
      
      // D'après le swagger, la réponse contient un champ "agencies" qui est un tableau
      if (response.data && response.data.agencies && Array.isArray(response.data.agencies)) {
        return response.data.agencies;
      }
      
      // Fallback si la structure est différente
      if (Array.isArray(response.data)) {
        return response.data;
      }
      
      // Si on a une autre structure avec un champ data
      if (response.data && response.data.data && Array.isArray(response.data.data)) {
        return response.data.data;
      }
      
      // Si aucun format reconnu, retourner un tableau vide
      console.warn('Format de réponse inattendu pour les agences:', response.data);
      return [];
    } catch (error: any) {
      console.error('Erreur lors de la récupération des agences:', error);
      throw new Error('Impossible de récupérer la liste des agences');
    }
  },

  /**
   * Envoie un formulaire de contact
   * @param data Données du formulaire de contact
   */
  submitContactForm: async (data: ContactFormData): Promise<ContactResponse> => {
    try {
      // Validation côté client pour éviter les erreurs côté serveur
      if (!data.civility || !['M.', 'Mme', 'Non précisé'].includes(data.civility)) {
        return {
          success: false,
          message: 'La civilité doit être M., Mme. ou Non précisé',
        };
      }

      if (!data.first_name || data.first_name.length > 100) {
        return {
          success: false,
          message: 'Le prénom ne peut pas dépasser 100 caractères',
        };
      }

      if (!data.last_name || data.last_name.length > 100) {
        return {
          success: false,
          message: 'Le nom ne peut pas dépasser 100 caractères',
        };
      }

      if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        return {
          success: false,
          message: 'Veuillez fournir une adresse email valide',
        };
      }

      if (!data.phone_number || data.phone_number.replace(/\s+/g, '').length > 20) {
        return {
          success: false,
          message: 'Le numéro de téléphone ne peut pas dépasser 20 caractères',
        };
      }

      if (!data.address || data.address.length > 255) {
        return {
          success: false,
          message: 'L\'adresse ne peut pas dépasser 255 caractères',
        };
      }

      if (!data.postal_code || data.postal_code.length > 10) {
        return {
          success: false,
          message: 'Le code postal ne peut pas dépasser 10 caractères',
        };
      }

      if (!data.city || data.city.length > 100) {
        return {
          success: false,
          message: 'La ville ne peut pas dépasser 100 caractères',
        };
      }

      if (!data.principal_activity || data.principal_activity.length > 255) {
        return {
          success: false,
          message: 'L\'activité principale ne peut pas dépasser 255 caractères',
        };
      }

      if (data.message && data.message.length > 1000) {
        return {
          success: false,
          message: 'Le message ne peut pas dépasser 1000 caractères',
        };
      }

      // Création d'un FormData pour gérer les fichiers
      const formData = new FormData();
      
      // Formatage du numéro de téléphone (supprimer les espaces)
      const formattedPhoneNumber = data.phone_number.replace(/\s+/g, '');
      
      // Ajout des champs textuels avec les données formatées
      const formattedData = {
        ...data,
        phone_number: formattedPhoneNumber
      };
      
      // Ajouter toutes les données du formulaire
      Object.entries(formattedData).forEach(([key, value]) => {
        // Ne pas ajouter les pièces jointes ici, on les traite séparément
        if (key !== 'attachments' && value !== undefined) {
          formData.append(key, String(value));
        }
      });
      
      // Ajout des pièces jointes s'il y en a
      if (data.attachments && data.attachments.length > 0) {
        data.attachments.forEach((file, index) => {
          formData.append(`attachments[${index}]`, file);
        });
      }
      
      // Configuration spéciale pour FormData
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };
      
      // Envoi direct en JSON si pas de pièces jointes pour éviter les problèmes de FormData
      let response;
      if (!data.attachments || data.attachments.length === 0) {
        // Envoi en JSON
        response = await axiosInstance.post('/contact', {
          civility: data.civility,
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          phone_number: formattedPhoneNumber,
          company_name: data.company_name || '',
          address: data.address,
          postal_code: data.postal_code,
          city: data.city,
          principal_activity: data.principal_activity,
          message: data.message || '',
          agency_id: data.agency_id
        });
      } else {
        // Envoi avec FormData pour les pièces jointes
        response = await axiosInstance.post('/contact', formData, config);
      }
      
      return {
        success: true,
        message: response.data.message || 'Votre message a été envoyé avec succès'
      };
    } catch (error: any) {
      console.error('Erreur lors de l\'envoi du message:', error);
      
      // Gestion des erreurs
      if (error.response) {
        // Le serveur a répondu avec un statut d'erreur
        const errorMessage = error.response.data.message || 
                           error.response.data.error ||
                           'Les données fournies sont invalides';
        
        return {
          success: false,
          message: errorMessage,
          error: error.response.data.error
        };
      }
      
      // Erreur réseau ou autre
      return {
        success: false,
        message: 'Une erreur est survenue lors de l\'envoi du formulaire',
        error: 'NETWORK_ERROR'
      };
    }
  }
}; 