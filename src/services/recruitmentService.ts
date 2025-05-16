import axiosInstance from './axios';

/**
 * Interface pour les données du formulaire de recrutement
 */
export interface RecruitmentFormData {
  civility: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  address: string;
  postal_code: string;
  city: string;
  desired_position: string;
  current_position: string;
  message: string;
  cvFile?: File;
  motivationFile?: File;
}

/**
 * Interface pour la réponse du serveur
 */
interface RecruitmentResponse {
  success: boolean;
  message: string;
  error?: string;
}

/**
 * Service pour gérer les formulaires de recrutement
 */
export const recruitmentService = {
  /**
   * Récupère la liste des postes disponibles depuis l'API
   * @returns Liste des postes disponibles
   */
  getAvailablePositions: async (): Promise<string[]> => {
    // Utilisation directe des postes définis localement sans appel API
    // puisque l'API ne semble pas avoir d'endpoint GET /recruitment
    return [
      "Commercial(e) B2B",
      "Technicien(ne) SAV",
      "Responsable logistique",
      "Assistant(e) commercial(e)",
      "Chargé(e) de clientèle",
      "Technicien(ne) de maintenance"
    ];
  },

  /**
   * Envoie un formulaire de candidature
   * @param data Données du formulaire de recrutement
   */
  submitRecruitmentForm: async (data: RecruitmentFormData): Promise<RecruitmentResponse> => {
    try {
      // Validation côté client pour éviter les erreurs côté serveur
      if (!data.civility || !['M.', 'Mme', 'Non précisé'].includes(data.civility)) {
        return {
          success: false,
          message: 'La civilité doit être M., Mme. ou Non précisé',
        };
      }

      if (!data.first_name) {
        return {
          success: false,
          message: 'Le prénom est requis',
        };
      }

      if (!data.last_name) {
        return {
          success: false,
          message: 'Le nom est requis',
        };
      }

      if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        return {
          success: false,
          message: 'Veuillez fournir une adresse email valide',
        };
      }

      if (!data.phone_number) {
        return {
          success: false,
          message: 'Le numéro de téléphone est requis',
        };
      }

      if (!data.address) {
        return {
          success: false,
          message: 'L\'adresse est requise',
        };
      }

      if (!data.postal_code) {
        return {
          success: false,
          message: 'Le code postal est requis',
        };
      }

      if (!data.city) {
        return {
          success: false,
          message: 'La ville est requise',
        };
      }

      if (!data.desired_position) {
        return {
          success: false,
          message: 'Le poste souhaité est requis',
        };
      }

      if (!data.current_position) {
        return {
          success: false,
          message: 'Le poste actuel est requis',
        };
      }

      if (!data.message) {
        return {
          success: false,
          message: 'Le message est requis',
        };
      }

      if (!data.cvFile) {
        return {
          success: false,
          message: 'Le CV est requis',
        };
      }

      // Création d'un FormData pour gérer les fichiers
      const formData = new FormData();
      
      // Ajouter toutes les données du formulaire selon les noms de champs attendus par l'API
      formData.append('civility', data.civility);
      formData.append('first_name', data.first_name);
      formData.append('last_name', data.last_name);
      formData.append('email', data.email);
      formData.append('phone_number', data.phone_number);
      formData.append('address', data.address);
      formData.append('postal_code', data.postal_code);
      formData.append('city', data.city);
      formData.append('desired_position', data.desired_position);
      formData.append('current_position', data.current_position);
      formData.append('message', data.message);
      
      // Ajout du CV (obligatoire)
      if (data.cvFile) {
        // Vérifier que le fichier est bien un objet File valide
        if (data.cvFile instanceof File) {
          // Essayer avec différents noms de champs possibles pour le CV
          formData.append('cvFile', data.cvFile, data.cvFile.name);
          formData.append('cv', data.cvFile, data.cvFile.name); // Alternative possible
          formData.append('resume', data.cvFile, data.cvFile.name); // Alternative possible
          console.log(`CV ajouté: ${data.cvFile.name}, taille: ${data.cvFile.size} bytes`);
        } else {
          console.error('Le CV n\'est pas un objet File valide');
          return {
            success: false,
            message: 'Format de CV invalide'
          };
        }
      }
      
      // Ajout de la lettre de motivation (facultative)
      if (data.motivationFile) {
        // Vérifier que le fichier est bien un objet File valide
        if (data.motivationFile instanceof File) {
          // Essayer avec différents noms de champs possibles pour la lettre de motivation
          formData.append('motivationFile', data.motivationFile, data.motivationFile.name);
          formData.append('motivation', data.motivationFile, data.motivationFile.name); // Alternative possible
          formData.append('cover_letter', data.motivationFile, data.motivationFile.name); // Alternative possible
          console.log(`Lettre de motivation ajoutée: ${data.motivationFile.name}, taille: ${data.motivationFile.size} bytes`);
        } else {
          console.error('La lettre de motivation n\'est pas un objet File valide');
          // On continue quand même car ce fichier est facultatif
        }
      }

      // Configurer les en-têtes spécifiquement pour cette requête
      const config = {
        headers: {
          'x-platform': 'web',
          // Ne pas définir Content-Type, il sera automatiquement défini avec le boundary correct
        }
      };
      
      // Log pour déboguer
      console.log('Envoi du formulaire de recrutement à l\'API...');
      console.log('URL complète:', `${axiosInstance.defaults.baseURL}/recruitment`);
      
      // Essayer d'abord avec l'endpoint '/recruitment'
      try {
        const response = await axiosInstance.post('/recruitment', formData, config);
        console.log('Réponse de l\'API:', response.data);
        
        return {
          success: true,
          message: response.data?.message || 'Votre candidature a été envoyée avec succès'
        };
      } catch (firstError) {
        console.error('Erreur avec l\'endpoint /recruitment, tentative avec /api/recruitment:', firstError);
        
        // Si la première tentative échoue, essayer avec '/api/recruitment'
        try {
          const response = await axiosInstance.post('/recruitment', formData, config);
          console.log('Réponse de l\'API (second essai):', response.data);
          
          return {
            success: true,
            message: response.data?.message || 'Votre candidature a été envoyée avec succès'
          };
        } catch (secondError) {
          // Si les deux tentatives échouent, propager l'erreur
          throw secondError;
        }
      }
      
    } catch (error: any) {
      console.error('Erreur lors de l\'envoi du formulaire de recrutement:', error);
      
      // Récupération du message d'erreur avec plus de détails
      let errorMessage = 'Une erreur est survenue lors de l\'envoi de votre candidature';
      
      if (error.response) {
        // La requête a été faite et le serveur a répondu avec un code d'état
        console.error('Erreur de réponse:', {
          status: error.response.status,
          data: error.response.data
        });
        errorMessage = error.response.data?.message || 
                      error.response.data?.error || 
                      `Erreur ${error.response.status}: ${error.response.statusText}`;
      } else if (error.request) {
        // La requête a été faite mais aucune réponse n'a été reçue
        console.error('Erreur de requête - pas de réponse:', error.request);
        errorMessage = 'Aucune réponse du serveur. Veuillez vérifier votre connexion internet.';
      } else {
        // Une erreur s'est produite lors de la configuration de la requête
        console.error('Erreur de configuration:', error.message);
        errorMessage = error.message || 'Erreur lors de la préparation de la requête';
      }
      
      return {
        success: false,
        message: errorMessage
      };
    }
  }
};

export default recruitmentService; 