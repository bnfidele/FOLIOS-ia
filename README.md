# 🤖 Folios IA

> **L'Assistant IA que vous attendiez. Plus rapide, plus intelligent, plus simple.**

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/status-✅%20Ready-brightgreen?style=for-the-badge)
![Node](https://img.shields.io/badge/node-14%2B-00a8ff?style=for-the-badge)

**[⚡ Démarrage Rapide](#-démarrage-rapide)** • **[📖 Docs Complètes](#-documentation)** • **[🤝 Contribuer](#-contribution)**

</div>

---

## 🎯 Qu'est-ce que Folios IA ?

**Folios IA** est une application web de chat moderne qui offre une expérience utilisateur fluide et intuitive pour communiquer avec une IA. Construite avec les meilleures pratiques du développement web contemporain, elle combine la puissance d'Alpine.js pour la réactivité, de Tailwind CSS pour un design élégant, et de Lucide Icons pour une esthétique professionnelle.

### 🎯 Cas d'Usage

- 💼 **Professionnels** : Discussions avec des assistants IA pour productivité
- 👨‍🎓 **Étudiants** : Apprentissage interactif et Q&A
- 🎨 **Créatifs** : Brainstorming et génération d'idées
- 🔍 **Chercheurs** : Exploration et analyse rapide

---

## ⚡ Démarrage Rapide

```bash
# 1. Cloner le repository
git clone https://github.com/bnfidele/FOLIOS.git
cd FOLIOS

# 2. Installer les dépendances
npm install

# 3. Démarrer en développement
npm run dev

# 4. Dans un autre terminal, lancer le serveur
npm run serve

# 5. Ouvrir http://localhost:8000
```

---

## 🎬 Démo

### Première Utilisation

```
1. Connexion
   └─ Email: demo@example.com
   └─ Mot de passe: n'importe quel mot de passe

2. Créer une conversation
   └─ Cliquez sur "+ Nouvelle Conversation"

3. Envoyer un message
   └─ Tapez et appuyez sur Entrée
   └─ L'IA répond automatiquement
```

---

## 💎 Fonctionnalités

### ✅ Authentification
- 🔑 Login/Logout sécurisé
- 📧 Gestion des emails
- 💾 Stockage localStorage
- 🎭 Mode démo intégré

### 💬 Conversations
- ➕ Créer de nouvelles conversations
- 🏷️ Auto-titrage intelligent
- 🔄 Basculer facilement entre convos
- 📜 Historique complet

### 📨 Messagerie
- 💨 Envoi instantané
- 🤖 Réponses IA simulées
- ⏳ Indicateur de chargement
- 📍 Auto-scroll vers les nouveaux messages

### 🎨 Design & UX
- 📱 Responsive design (mobile, tablet, desktop)
- 🎯 Interface intuitive
- ✨ Animations fluides
- 🌈 Thème moderne Tailwind

---

## 🏗️ Stack Technique

```
Frontend
├── Alpine.js (3.x)      → Réactivité
├── Tailwind CSS (3.4)   → Styling
├── Lucide Icons         → Icônes
├── HTML5                → Markup
└── Vanilla JS (ES6+)    → Logique

Backend (Optionnel)
└── API REST compatible

Storage
└── localStorage         → Données client
```

---

## 📦 Installation & Configuration

### Prérequis

- Node.js 14+ ou simplement un navigateur web
- npm (optionnel)
- Aucune dépendance système requise

### Installation Simple

```bash
# Cloner le projet
git clone https://github.com/bnfidele/FOLIOS.git
cd FOLIOS

# Installer les dépendances
npm install

# Démarrer en mode développement (Tailwind watch)
npm run dev
```

### Serveur Local

```bash
# Terminal 1 : Compiler les styles
npm run dev

# Terminal 2 : Lancer le serveur
npm run serve

# Puis ouvrez http://localhost:8000
```

### Production

```bash
# Builder pour la production
npm run build

# Déployer le dossier courant
```

---

## 🎯 Guide d'Utilisation

### Premier Pas

```
1️⃣  Ouvrir http://localhost:8000
2️⃣  Connexion (email + password quelconque)
3️⃣  Créer une conversation
4️⃣  Envoyer un message
```

### Workflows

**Créer une Conversation**
- Cliquez sur `+ Nouvelle Conversation`
- Le titre est auto-généré

**Envoyer un Message**
- Tapez votre message
- Appuyez sur `Entrée` ou cliquez l'icône d'envoi
- L'IA répond après 1.5 sec

**Basculer de Conversation**
- Cliquez sur un titre dans la liste gauche
- L'historique se charge instantanément

**Se Déconnecter**
- Cliquez l'icône de profil
- Sélectionnez `Déconnexion`

---

## 👨‍💻 Développement

### Configuration de l'Environnement

```bash
# Installer les dépendances
npm install

# Mode développement avec watch
npm run dev

# Build production
npm run build

# Serveur local
npm run serve
```

### Fichiers Clés à Modifier

| Fichier | Rôle |
|---------|------|
| `src/js/app.js` | Logique métier et état |
| `src/css/input.css` | Styles personnalisés |
| `index.html` | Markup et bindings Alpine |

### Ajout de Nouvelles Fonctionnalités

1. **Ajouter une méthode dans le composant Alpine** (`src/js/app.js`)
2. **Créer le markup HTML** (`index.html`)
3. **Ajouter les styles** (`src/css/input.css`)
4. **Compiler Tailwind** : `npm run build`

### Débogage

- Utilisez la console du navigateur (F12)
- Inspectez le state Alpine : `app()` dans la console
- Vérifiez localStorage : `console.log(localStorage)`

---

## 🚀 Déploiement

### Options de Déploiement

#### 1. **Vercel** (Recommandé)
```bash
npm install -g vercel
vercel
```

#### 2. **GitHub Pages**
```bash
git push origin main
# Activer GitHub Pages dans les paramètres du repo
```

#### 3. **Netlify**
```bash
npm install -g netlify-cli
netlify deploy
```

#### 4. **Serveur Classique**
```bash
# Copier tous les fichiers sur le serveur
# Servir via Apache/Nginx
# Le fichier index.html doit être à la racine
```

### Checklist Avant Déploiement

- [ ] Tester localement : `npm run serve`
- [ ] Compiler CSS : `npm run build`
- [ ] Vérifier la console pour les erreurs
- [ ] Tester sur mobile
- [ ] Vérifier localStorage fonctionne
- [ ] Mettre à jour les URLs API (si backend)

---

## 🤝 Contribution

Nous accueillons les contributions ! Voici comment :

1. **Forker le repository**
2. **Créer une branche** : `git checkout -b feature/ma-feature`
3. **Commiter les changements** : `git commit -m "Ajout de ma feature"`
4. **Pousser** : `git push origin feature/ma-feature`
5. **Créer une Pull Request**

### Standards de Code

- Utiliser ESLint (futur)
- Indentation : 4 espaces
- Commentaires en français
- Noms de variables explicites

---

## 📚 Documentation Supplémentaire

Pour plus de détails, consultez :

- **[QUICKSTART.md](./QUICKSTART.md)** - Démarrage rapide
- **[docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md)** - Architecture détaillée
- **[docs/API.md](./docs/API.md)** - Documentation API
- **[docs/DEVELOPMENT.md](./docs/DEVELOPMENT.md)** - Guide de développement
- **[docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md)** - Guide de déploiement
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - Guide de contribution

---

## 🐛 Bugs et Problèmes

### Problèmes Courants

**Q: Le CSS ne charge pas**
- Exécutez : `npm run build`
- Videz le cache du navigateur (Ctrl+Shift+Del)

**Q: Les messages ne s'affichent pas**
- Vérifiez que Alpine.js est chargé (F12 > Console)
- Vérifiez que le composant est initialisé : `x-init="init()"`

**Q: localStorage ne fonctionne pas**
- Vérifiez que vous n'êtes pas en navigation privée
- Vérifiez les permissions du navigateur

### Signaler un Bug

Créez une issue sur GitHub avec :
- Description du problème
- Étapes pour reproduire
- Navigateur et OS utilisés
- Capture d'écran si possible

---

## 📊 Feuille de Route

- [ ] Intégration d'un vrai backend API
- [ ] Authentification JWT avancée
- [ ] Sauvegarde persistante en base de données
- [ ] Thème clair/sombre
- [ ] Exportation de conversations
- [ ] Système de tags
- [ ] Recherche dans les messages
- [ ] Support du markdown
- [ ] Upload de fichiers
- [ ] Notifications en temps réel

---

## 📄 License

Ce projet est sous license **MIT**. Voir [LICENSE](./LICENSE) pour plus de détails.

---

## 👥 Auteurs et Contributeurs

- **Auteur Principal** : [bnfidele](https://github.com/bnfidele)
- **Contributeurs** : Voir [CONTRIBUTING.md](./CONTRIBUTING.md)

---

## 📞 Support

- 📧 Email : fidele@folios.life (futur)
- 💬 Issues GitHub : [FOLIOS Issues](https://github.com/bnfidele/FOLIOS/issues)
- 📖 Documentation : Voir le dossier `/docs`

---

## 🎉 Remerciements

Merci aux créateurs de :
- [Alpine.js](https://alpinejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

---

**Dernière mise à jour** : 7 janvier 2026
**Version** : 1.0.0
**Statut** : ✅ Production Ready

---

<p align="center">
  Fait avec ❤️ par la communauté Folios
</p>
