# Folios IA - Chat Application

Une application de chat moderne construite avec Alpine.js et Tailwind CSS.

## 📁 Structure du Projet

```
folios ia/
├── public/                 # Fichiers publics
│   └── index.html         # Page principale
├── src/                   # Code source
│   ├── js/
│   │   └── app.js        # Logique applicative
│   └── css/
│       └── styles.css    # Styles personnalisés
├── docs/                  # Documentation
└── README.md             # Ce fichier
```

## 🚀 Fonctionnalités

- **Authentification** : Connexion et inscription des utilisateurs
- **Conversations** : Créer et gérer plusieurs conversations
- **Messagerie** : Envoyer et recevoir des messages
- **Design Responsive** : Fonctionne sur tous les appareils
- **Stockage Local** : Sauvegarde des données avec localStorage
- **Interface Moderne** : UI élégante avec Tailwind CSS

## 🛠️ Technologies Utilisées

- **Alpine.js** : Framework JavaScript réactif
- **Tailwind CSS** : Framework CSS utility-first
- **Lucide Icons** : Icônes SVG
- **HTML5** : Structure sémantique

## 📝 Guide d'Utilisation

### Installation

1. Téléchargez ou clonez le projet
2. Ouvrez `public/index.html` dans votre navigateur
3. Créez un compte ou connectez-vous

### Développement

- Modifiez les fichiers dans le dossier `src/`
- Les styles CSS sont dans `src/css/styles.css`
- La logique applicative est dans `src/js/app.js`

## 📋 Structure du Code

### app.js

Contient la logique principale de l'application Alpine.js :

```javascript
function app() {
    return {
        // État d'authentification
        isAuthenticated,
        loginData,
        registerData,
        
        // État de chat
        conversations,
        selectedConvId,
        messages,
        
        // Méthodes
        login(), register(), logout(),
        loadConversations(), newConversation(),
        sendMessage(), generateAIResponse()
    };
}
```

### styles.css

Contient :
- Imports de polices Google Fonts
- Styles des scrollbars
- Animations personnalisées
- Styles responsifs

## 🎨 Personnalisation

### Couleurs

Les couleurs primaires utilisées sont :
- Bleu primaire : `#3b82f6` (blue-600)
- Gris foncé : `#111827` (gray-900)

### Polices

La police utilisée est `Inter` (Google Fonts)

## 📦 Dépendances Externes

- Alpine.js (CDN)
- Tailwind CSS (CDN)
- Lucide Icons (CDN)

## ⚙️ Configuration

Les configurations se font directement dans `app.js` :

- Endpoints API : Modifiez les URLs dans `fetch()`
- Réponses IA : Personnalisez `generateAIResponse()`
- Stockage : Géré par `localStorage`

## 🔐 Sécurité

⚠️ **Attention** : Cette application utilise des données fictives pour la démo.

Pour la production :
- Implémenter une véritable authentification
- Utiliser une API backend sécurisée
- Valider les données côté serveur
- Utiliser HTTPS

## 📄 Licence

Ce projet est fourni à titre d'exemple pédagogique.

## 💡 Améliorations Futures

- [ ] Intégration avec une véritable API IA
- [ ] Système de thèmes (clair/sombre)
- [ ] Export des conversations
- [ ] Synchronisation entre appareils
- [ ] Gestion des fichiers
- [ ] Système de rôles utilisateur

---

**Dernière mise à jour** : 7 janvier 2026
