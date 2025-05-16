import axios from 'axios';

// URL de l'API backend
// Utiliser l'URL relative pour que ça fonctionne en développement et en production
export const BASE_API_URL = 'https://distritherm-backend.onrender.com';

// Création de l'instance axios avec la configuration de base
const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  timeout: 60000, // 60 secondes pour permettre le téléchargement des fichiers
  headers: {
    'Accept': 'application/json',
    // Ajouter un header d'authentification si nécessaire
    // 'Authorization': 'Bearer YOUR_API_KEY_HERE',
    // Ne pas définir Content-Type par défaut pour permettre à axios de le définir correctement pour les requêtes multipart/form-data
  }
});

// Intercepteur pour les requêtes
axiosInstance.interceptors.request.use(
  (config) => {
    // Ajout du header x-platform
    config.headers['x-platform'] = 'web';
    
    // Log de la requête pour le débogage
    console.log(`Requête ${config.method?.toUpperCase()} vers ${config.url}`);
    
    return config;
  },
  (error) => {
    console.error('Erreur dans l\'intercepteur de requête:', error);
    return Promise.reject(error);
  }
);

// Intercepteur pour les réponses
axiosInstance.interceptors.response.use(
  (response) => {
    // Log de la réponse pour le débogage
    console.log(`Réponse ${response.status} de ${response.config.url}`);
    return response;
  },
  (error) => {
    console.error('Erreur dans l\'intercepteur de réponse:', error);
    console.error('Détails de l\'erreur:', {
      status: error.response?.status,
      statusText: error.response?.statusText,
      url: error.config?.url,
      method: error.config?.method
    });
    return Promise.reject(error);
  }
);

export default axiosInstance; 