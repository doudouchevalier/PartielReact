// src/root.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import MovieDetails from './components/MovieDetails'; // Importer la page de détails
import Home from '../pages/home';
import { createBrowserRouter } from 'react-router-dom';
import MovieDetails from '../components/movieDetails';
import ErrorPage from '../pages/404';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
      },
      {
        path: "/movie/",
        element: <MovieDetails />
      },
      {
        path: "*",
        element: <ErrorPage />
      }
    ]);

  export default router;
