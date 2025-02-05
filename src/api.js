const API_KEY = '7c51ce5f51b2a0e2bb3bf45b2afaa9ae'; // Exemple
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}&language=fr-FR`);
    if (!response.ok) throw new Error('Erreur lors de la récupération des données');
    return await response.json();
  } catch (error) {
    console.error('Erreur API:', error);
    return null;
  }
};