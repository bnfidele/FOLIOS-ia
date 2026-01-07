# Configuration - Folios IA

## Configuration de Base

### URLs API

Par défaut, l'application utilise des endpoints simulés. Pour intégrer une API réelle, modifiez les URLs dans `src/js/app.js` :

```javascript
// Login
fetch('/api/auth/login')

// Register  
fetch('/api/auth/register')

// Send Message
fetch('/api/messages/send')
```

## Variables d'Environnement

Créez un fichier `.env` (à ajouter au .gitignore) :

```env
API_BASE_URL=http://localhost:3000
API_AUTH_LOGIN=/api/auth/login
API_AUTH_REGISTER=/api/auth/register
API_MESSAGES_SEND=/api/messages/send
TIMEOUT=5000
```

## Paramètres de l'Application

### Timeouts

```javascript
// Délai de réponse IA simulée (ms)
await new Promise(resolve => setTimeout(resolve, 1500));
```

### Limites

```javascript
// Longueur maximale du titre de conversation
conversation.title = userMessage.substring(0, 30) + '...'

// Longueur maximale d'un message
message.content.length > 1000 // À implémenter
```

### Stockage Local

```javascript
// Clés localStorage
'folios_token'        // Token d'authentification
'folios_user'         // Email utilisateur
'folios_conversations' // Conversations (à ajouter)
```

## Thème et Styles

### Couleurs Principales

```css
/* Bleu (primaire) */
#3b82f6 (blue-600)

/* Gris foncé (background sidebar) */
#111827 (gray-900)

/* Blanc (background principal) */
#ffffff

/* Gris clair (arrière-plan messages) */
#f3f4f6 (gray-50)
```

### Breakpoints Tailwind

```css
sm: 640px
md: 768px  /* Point clé pour Folios IA */
lg: 1024px
xl: 1280px
```

## Polices

```css
Font Family: 'Inter'
Import: Google Fonts
Weights: 400, 500, 600, 700
```

## Responsive Design

### Mobile (<768px)
- Sidebar cachée par défaut
- Header mobile fixe
- Pleine largeur du chat

### Desktop (≥768px)
- Sidebar visible
- Header desktop
- Layout 2 colonnes

## Validations

### Email

```javascript
// Pattern de validation
/^[^\s@]+@[^\s@]+\.[^\s@]+$/
```

### Age

```javascript
// Min: 13 ans
// Type: number
```

### Password

```javascript
// Min: 8 caractères (à implémenter)
// Doit contenir: majuscule, minuscule, chiffre (à implémenter)
```

## Limites de l'Application

### Actuellement Limitée À

- 1 utilisateur actif par navigateur (localStorage)
- Pas de synchronisation entre onglets
- Pas de persistance serveur
- Pas d'images ou fichiers
- Pas de notifications push
- Pas de mode hors ligne

### À Implémenter

- Backend d'authentification
- Base de données
- Synchronisation en temps réel (WebSocket)
- Gestion des fichiers
- Notifications
- Offline mode

## Performances

### Optimisations Actuelles

- Tailwind CSS minifié (CDN)
- Alpine.js allégé
- Pas de bundle complexe
- CSS-in-HTML (Tailwind)

### À Améliorer

- Code splitting
- Lazy loading des conversations
- Service Worker
- Compression GZIP

## Sécurité - Checklist

- [ ] Validation côté serveur (backend)
- [ ] HTTPS obligatoire
- [ ] Protection CSRF (backend)
- [ ] Rate limiting (backend)
- [ ] Sanitization des inputs
- [ ] Chiffrement des données
- [ ] Session timeout
- [ ] Logout des sessions expirées

## Développement Local

### Serveur Local

```bash
# Utiliser Python
python3 -m http.server 8000

# Ou Node.js
npx http-server

# Ou PHP
php -S localhost:8000
```

Puis accédez à : `http://localhost:8000/public/index.html`

### Extensions de Navigateur Utiles

- Vue.js DevTools (pour comprendre le state)
- Redux DevTools (pour debug)
- Postman (pour tester l'API)

---

**Version** : 1.0.0  
**Dernière mise à jour** : 7 janvier 2026
