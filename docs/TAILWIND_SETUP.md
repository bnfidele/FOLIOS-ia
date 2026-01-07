# Installation et Utilisation de Tailwind CSS

## ✅ Tailwind CSS est Installé !

Tailwind CSS a été installé localement via npm pour une meilleure performance et personnalisation.

## 📋 Configuration

- **Package Manager** : npm
- **Version Tailwind** : 3.4.0+
- **Fichier de config** : `tailwind.config.js`
- **Input CSS** : `src/css/input.css`
- **Output CSS** : `src/css/styles.css` (généré automatiquement)

## 🚀 Commandes Disponibles

### Mode Développement (Watch Mode)
```bash
npm run dev
```
Compile le CSS Tailwind en temps réel et surveille les modifications.

### Build Production
```bash
npm run build
```
Compile le CSS Tailwind une seule fois (minifié en production).

### Serveur Local
```bash
npm run serve
```
Démarre un serveur HTTP local sur `http://localhost:8000`

## 📁 Structure des Fichiers CSS

```
src/css/
├── input.css      # Fichier source (directives Tailwind + styles personnalisés)
└── styles.css     # Fichier généré (à ne pas éditer directement)
```

## 💻 Workflow Recommandé

1. **Démarrer le mode développement** :
   ```bash
   npm run dev
   ```
   (gardez ce terminal ouvert)

2. **Dans un autre terminal, lancer le serveur** :
   ```bash
   npm run serve
   ```

3. **Modifier vos fichiers HTML et CSS** : Les changements seront compilés automatiquement

4. **Rafraîchir le navigateur** pour voir les modifications

## 🎨 Personnalisation

### Modifier le thème

Editez `tailwind.config.js` :

```javascript
theme: {
  extend: {
    colors: {
      primary: '#3b82f6',
      secondary: '#1f2937',
    },
  },
}
```

### Ajouter des styles personnalisés

Editez `src/css/input.css` et utilisez les directives `@layer` :

```css
@layer components {
    .btn-custom {
        @apply px-4 py-2 rounded-lg font-semibold transition-all;
    }
}
```

## 📦 Dépendances Installées

- `tailwindcss` : Framework CSS utility-first

Pour voir les autres dépendances, consultez `package.json`

## 🔧 Purging CSS

Tailwind CSS purge automatiquement les styles non utilisés basé sur le fichier `content` dans `tailwind.config.js` :

```javascript
content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
],
```

Cela garantit que le fichier CSS final est optimisé et minimisé.

## 🐛 Dépannage

### Le CSS ne se met pas à jour ?
- Assurez-vous que `npm run dev` est en cours d'exécution
- Rafraîchissez la page (Ctrl+Shift+R ou Cmd+Shift+R)
- Videz le cache du navigateur

### Erreur lors de la compilation ?
- Vérifiez la syntaxe dans `input.css`
- Assurez-vous que vous n'utilisez que des classes Tailwind valides
- Consultez la [documentation Tailwind](https://tailwindcss.com/docs)

## 📚 Ressources

- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Configuration Tailwind](https://tailwindcss.com/docs/configuration)
- [Utility-first CSS](https://tailwindcss.com/docs/utility-first)

## 🎯 Prochaines Étapes

1. Lancez `npm run dev` pour la compilation en temps réel
2. Modifiez vos styles dans `src/css/input.css`
3. Utilisez les classes Tailwind dans `index.html`
4. Pour la production, exécutez `npm run build`

---

**Version** : 1.0.0  
**Dernière mise à jour** : 7 janvier 2026
