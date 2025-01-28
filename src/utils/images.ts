/**
 * Utilitaires de gestion des images
 * -------------------------------
 * Fonctions pour gérer les images et leurs fallbacks
 */

// Types d'images
export type ImageCategory = 'home' | 'blog';

// Configuration des images par défaut
const DEFAULT_IMAGES = {
  home: '/images/defaults/home-default.jpg',
  blog: '/images/defaults/blog-default.jpg'
};

/**
 * Vérifie si une URL est valide
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Construit le chemin d'une image locale
 */
export function buildLocalImagePath(category: ImageCategory, filename: string): string {
  return `/images/${category}/${filename}`;
}

/**
 * Retourne l'image par défaut pour une catégorie
 */
export function getDefaultImage(category: ImageCategory): string {
  return DEFAULT_IMAGES[category];
}

/**
 * Gère le fallback des images
 */
export function handleImageError(event: Event, category: ImageCategory): void {
  const img = event.target as HTMLImageElement;
  img.src = DEFAULT_IMAGES[category];
}

/**
 * Retourne le chemin d'image approprié
 */
export function getImagePath(path: string, category: ImageCategory): string {
  if (isValidUrl(path)) {
    return path;
  }
  return buildLocalImagePath(category, path);
}