# Documentation du Thème Astro

## 🚀 Introduction

Ce thème Astro est conçu pour être facilement adaptable à différents types de sites web. Il utilise une architecture modulaire et des fichiers de configuration centralisés pour une personnalisation simple et efficace.

## 📁 Structure du Projet

```
project/
├── src/
│   ├── components/    # Composants réutilisables
│   ├── content/       # Contenu du site (JSON/MDX)
│   ├── layouts/       # Layouts des pages
│   ├── pages/         # Pages du site
│   ├── styles/        # Styles et thèmes
│   └── utils/         # Utilitaires
└── public/           # Assets statiques
```

## ⚙️ Configuration

### 1. Contenu Principal

Le contenu principal du site est configurable dans `src/content/home/index.json` :

```json
{
  "title": "{{BRAND_NAME}}",
  "subtitle": "{{MAIN_VALUE_PROPOSITION}}",
  "description": "{{META_DESCRIPTION}}",
  "blogCategories": [...],
  "features": [...],
  "mainServices": [...]
}
```

### 2. Thème et Couleurs

Les couleurs et variables du thème sont configurables dans :

- `src/styles/theme.css` : Variables globales
- `src/styles/themes/default.css` : Thème clair
- `src/styles/themes/dark.css` : Thème sombre

Exemple de personnalisation des couleurs :

```css
:root {
  --accent: 41, 128, 185;        /* Couleur principale */
  --accent-light: 133, 193, 233; /* Version claire */
  --accent-dark: 20, 60, 90;     /* Version foncée */
}
```

## 🎨 Personnalisation

### 1. Pages

#### Page d'Accueil
Modifiez `src/content/home/index.json` pour personnaliser :
- Hero section
- Fonctionnalités
- Services principaux
- Sections de contenu
- Témoignages

#### Pages de Blog
Créez des articles dans `src/content/blog/` :

```mdx
---
title: "Titre de l'article"
description: "Description"
pubDate: "2024-01-18"
category: "Catégorie"
heroImage: "url-image"
tags: ["tag1", "tag2"]
---

Contenu de l'article...
```

### 2. Navigation

La navigation est automatiquement générée à partir des catégories définies dans `src/content/home/index.json` :

```json
{
  "blogCategories": [
    {
      "id": "category-id",
      "title": "Titre Catégorie",
      "description": "Description",
      "image": "url-image",
      "icon": "IconName"
    }
  ]
}
```

### 3. Images

Le système de gestion d'images inclut :
- Fallbacks automatiques
- Optimisation des images
- Support des images locales et distantes

Configuration dans `src/utils/images.ts` :

```typescript
const DEFAULT_IMAGES = {
  home: '/images/defaults/home-default.jpg',
  blog: '/images/defaults/blog-default.jpg'
};
```

## 🧩 Composants Principaux

### Hero
```astro
<Hero
  title="Titre"
  subtitle="Sous-titre"
  image="url-image"
  size="default|compact"
/>
```

### FeatureGrid
```astro
<FeatureGrid
  features={[
    {
      icon: "IconName",
      title: "Titre",
      description: "Description"
    }
  ]}
/>
```

### BlogGrid
```astro
<BlogGrid
  posts={posts}
  showPagination={true}
/>
```

## 🎯 Fonctionnalités

### 1. Système de Thème

Support du mode clair/sombre :
- Basculement automatique selon les préférences système
- Toggle manuel
- Persistance dans le localStorage

### 2. Blog

- Catégorisation des articles
- Filtrage dynamique
- Pagination
- Recherche (à implémenter)

### 3. SEO

- Meta tags optimisés
- Structure de données schema.org
- URLs propres
- Sitemap XML

## 📦 Déploiement

1. Build du site :
```bash
npm run build
```

2. Les fichiers de production seront générés dans `dist/`

## 🔧 Maintenance

### 1. Mises à jour

Pour mettre à jour les dépendances :
```bash
npm update
```

### 2. Ajout de Contenu

1. Articles de blog :
   - Créer un fichier `.mdx` dans `src/content/blog/`
   - Ajouter les métadonnées requises
   - Écrire le contenu en Markdown

2. Pages :
   - Créer un fichier `.astro` dans `src/pages/`
   - Utiliser les composants existants
   - Ajouter le contenu spécifique

### 3. Personnalisation Avancée

1. Composants :
   - Créer de nouveaux composants dans `src/components/`
   - Utiliser les styles et variables du thème
   - Maintenir la cohérence visuelle

2. Styles :
   - Modifier les variables dans `src/styles/theme.css`
   - Créer des variantes de thème dans `src/styles/themes/`
   - Utiliser les classes utilitaires existantes

## 📝 Bonnes Pratiques

1. **Organisation du Contenu**
   - Structure cohérente des fichiers MDX
   - Images optimisées
   - Hiérarchie claire des catégories

2. **Performance**
   - Optimisation des images
   - Lazy loading
   - Minimisation des dépendances

3. **Maintenance**
   - Documentation à jour
   - Tests réguliers
   - Vérification des liens

## 🤝 Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Distribué sous la licence MIT. Voir `LICENSE` pour plus d'informations.