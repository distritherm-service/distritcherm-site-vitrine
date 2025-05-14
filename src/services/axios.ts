import axios from 'axios';

// URL de l'API backend
export const BASE_API_URL = 'https://distritherm-backend.onrender.com';

// Création de l'instance axios avec la configuration de base
const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  timeout: 30000, // 30 secondes
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Intercepteur pour les requêtes
axiosInstance.interceptors.request.use(
  (config) => {
    // Ajout du header x-platform
    config.headers['x-platform'] = 'web';
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercepteur pour les réponses
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance; 