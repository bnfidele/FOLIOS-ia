# Architecture de Folios IA

## Vue d'ensemble

Folios IA est une application frontend construite avec Alpine.js et stylisée avec Tailwind CSS. Elle utilise une architecture simple et moderne basée sur des composants réactifs.

## Architecture des Composants

### 1. **Application Principale** (`app.js`)

#### État (State)

```javascript
{
    // Authentification
    isAuthenticated: boolean
    isRegisterMode: boolean
    sidebarOpen: boolean
    loginData: { email, password }
    registerData: { email, age, password, confirmPassword }
    
    // Chat
    conversations: Array<Conversation>
    selectedConvId: number
    messageInput: string
    isLoading: boolean
}
```

#### Conversation Object

```javascript
{
    id: number
    title: string
    messages: Array<Message>
}
```

#### Message Object

```javascript
{
    id: number
    sender: 'user' | 'ai'
    content: string
}
```

### 2. **Flux de Données**

```
User Action
    ↓
Alpine.js Event Handler
    ↓
State Update
    ↓
DOM Re-render (Alpine.js)
    ↓
Display Update
```

### 3. **Cycle de Vie**

1. **Initialisation** : `init()`
   - Vérification du token localStorage
   - Chargement des conversations si authentifié

2. **Authentification** : `login()` / `register()`
   - Validation des données
   - Appel API (simulé)
   - Sauvegarde du token

3. **Chat** : `sendMessage()`
   - Ajout du message utilisateur
   - Simulation de réponse IA
   - Mise à jour du titre de la conversation

## Structure des Fichiers

```
folios ia/
├── public/
│   └── index.html           # Point d'entrée
├── src/
│   ├── js/
│   │   └── app.js          # Logique applicative
│   └── css/
│       └── styles.css      # Styles personnalisés
└── docs/
    ├── ARCHITECTURE.md     # Ce fichier
    └── API.md             # Documentation API
```

## Interactions Utilisateur

### 1. Authentification

```
┌─────────────────────────────────────┐
│  Écran de Connexion/Inscription     │
├─────────────────────────────────────┤
│  Email [_____________]               │
│  Mot de passe [_______]              │
│  [Se connecter] [S'inscrire]        │
└─────────────────────────────────────┘
         ↓ login() / register()
    ✓ Token stocké
    ↓
┌─────────────────────────────────────┐
│      Interface de Chat              │
└─────────────────────────────────────┘
```

### 2. Messagerie

```
User
  ↓ sendMessage()
  ↓ userMessage pushed to state
  ↓ API call (simulated)
  ↓ aiMessage pushed to state
  ↓ DOM updates with Alpine.js
  ↓
Display (both messages appear)
```

## État Réactif

Alpine.js rend tous les propriétés réactives :

- Toute modification de l'état déclenche un re-render
- Les directives `x-model` lient les inputs au state
- Les directives `x-show` / `x-if` affichent/masquent les éléments conditionnellement
- Les directives `x-for` itèrent sur les arrays

## Persistance des Données

### LocalStorage

```javascript
localStorage.getItem('folios_token')      // Token d'authentification
localStorage.getItem('folios_user')       // Email utilisateur
```

### À Implémenter

Pour la production, ajouter un backend qui persiste :
- Les conversations
- Les messages
- Les préférences utilisateur

## Flux d'API (Simulé)

### Login

```
POST /api/auth/login
{
    email: string
    password: string
}

Response:
{
    token: string
}
```

### Register

```
POST /api/auth/register
{
    email: string
    age: number
    password: string
}

Response:
{
    token: string
}
```

### Send Message

```
POST /api/messages/send
{
    conversationId: number
    content: string
    token: string
}

Response:
{
    id: number
    content: string
    timestamp: string
}
```

## Performance

### Optimisations

1. **Lazy Loading** : Les conversations se chargent à la demande
2. **Debouncing** : Les saisies sont gérées efficacement
3. **Event Delegation** : Utilisation des événements Alpine.js
4. **CSS Minimal** : Tailwind CSS avec PurgeCSS

### À Améliorer

- Pagination des messages
- Virtualisation des listes longues
- Compression des images
- Caching agressif

## Sécurité

### Implémenté

- Sanitization des inputs (Alpine.js)
- HTTPS en production

### À Ajouter

- Validation côté serveur
- Protection CSRF
- Rate limiting
- Chiffrement des données sensibles

## Testabilité

### Unit Tests

Tester les méthodes :
- `login()` : validation, stockage du token
- `generateAIResponse()` : réponses aléatoires
- `selectConversation()` : changement d'état

### Integration Tests

- Flux d'authentification complet
- Envoi de messages
- Création de conversations

## Maintenabilité

### Code Quality

- Nommage cohérent en français
- Commentaires explicatifs
- Structure claire et modulable

### Extensibilité

- Ajouter de nouvelles méthodes dans `app()`
- Créer des fichiers CSS additionnels
- Modulariser avec des imports ES6

---

**Version** : 1.0.0  
**Dernière mise à jour** : 7 janvier 2026
