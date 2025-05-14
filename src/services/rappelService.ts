import axiosInstance from './axios';

/**
 * Interface pour la requête de rappel
 */
interface RemindMeRequest {
  fullName: string;
  phoneNumber: string;
}

/**
 * Service pour gérer les demandes de rappel téléphonique
 */
export const rappelService = {
  /**
   * Envoie une demande de rappel téléphonique
   * @param data Informations de la personne demandant un rappel
   */
  requestCallback: async (data: RemindMeRequest) => {
    try {
      // Formatage des données selon l'API
      const formattedData = {
        fullName: data.fullName.trim(),
        phoneNumber: data.phoneNumber.replace(/\s/g, '') // Enlever tous les espaces
      };

      const response = await axiosInstance.post('/users/remind-me', formattedData);
      
      return {
        success: true,
        message: response.data.message || 'Votre demande de rappel a bien été prise en compte'
      };
    } catch (error: any) {
      // Gestion des erreurs
      if (error.response) {
        // Le serveur a répondu avec un statut d'erreur
        return {
          success: false,
          message: error.response.data.message || 'Les données fournies sont invalides'
        };
      }
      
      // Erreur réseau ou autre
      return {
        success: false,
        message: 'Vous n\'êtes pas autorisé à accéder à cette ressource'
      };
    }
  }
}; 