/**
 * Utilitaires de gestion du thème
 * ------------------------------
 * Fonctions pour manipuler le thème de l'application
 */

export type Theme = 'light' | 'dark';

export class ThemeManager {
  private static instance: ThemeManager;
  private currentTheme: Theme = 'light';

  private constructor() {
    // Initialiser le thème depuis le localStorage ou les préférences système
    this.initTheme();
  }

  public static getInstance(): ThemeManager {
    if (!ThemeManager.instance) {
      ThemeManager.instance = new ThemeManager();
    }
    return ThemeManager.instance;
  }

  /**
   * Initialise le thème au chargement
   */
  private initTheme(): void {
    // Vérifier le localStorage
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    
    if (savedTheme) {
      this.setTheme(savedTheme);
    } else {
      // Vérifier les préférences système
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setTheme(prefersDark ? 'dark' : 'light');
    }

    // Écouter les changements de préférences système
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
          this.setTheme(e.matches ? 'dark' : 'light');
        }
      });
  }

  /**
   * Change le thème actif
   */
  public setTheme(theme: Theme): void {
    this.currentTheme = theme;
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }

  /**
   * Retourne le thème actif
   */
  public getTheme(): Theme {
    return this.currentTheme;
  }

  /**
   * Bascule entre les thèmes clair et sombre
   */
  public toggleTheme(): void {
    this.setTheme(this.currentTheme === 'light' ? 'dark' : 'light');
  }
}

// Export d'une instance unique
export const themeManager = ThemeManager.getInstance();