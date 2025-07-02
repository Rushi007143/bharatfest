"use client";

import { useState, useEffect, useCallback } from 'react';

const FAVORITES_KEY = 'bharatfest-favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedFavorites = localStorage.getItem(FAVORITES_KEY);
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error('Failed to parse favorites from localStorage', error);
      setFavorites([]);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const updateLocalStorage = (newFavorites: string[]) => {
    try {
      setFavorites(newFavorites);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
    } catch (error) {
      console.error('Failed to save favorites to localStorage', error);
    }
  };

  const addFavorite = useCallback((festivalId: string) => {
    updateLocalStorage([...favorites, festivalId]);
  }, [favorites]);

  const removeFavorite = useCallback((festivalId: string) => {
    updateLocalStorage(favorites.filter((id) => id !== festivalId));
  }, [favorites]);

  const isFavorite = useCallback((festivalId: string) => {
    return favorites.includes(festivalId);
  }, [favorites]);

  const toggleFavorite = useCallback((festivalId: string) => {
    if (isFavorite(festivalId)) {
      removeFavorite(festivalId);
    } else {
      addFavorite(festivalId);
    }
  }, [isFavorite, addFavorite, removeFavorite]);

  return { favorites, toggleFavorite, isFavorite, isLoaded };
}
