# 🚀 DÉMARRER MAINTENANT

## ⚡ En 3 Étapes

### 1. Installez les dépendances (si pas fait)
```bash
cd "/home/fidele/Desktop/folios ia"
npm install
```

### 2. Lancez le mode développement
```bash
npm run dev
```
Gardez ce terminal ouvert. Vous verrez "Done in XXms" quand le CSS est compilé.

### 3. Lancez le serveur (dans un autre terminal)
```bash
npm run serve
```

### 4. Ouvrez dans le navigateur
```
http://localhost:8000
```

---

## 📝 Workflow Quotidien

```bash
# Terminal 1 - CSS Tailwind en temps réel
npm run dev

# Terminal 2 - Serveur web local
npm run serve

# Le navigateur se charge automatiquement si vous rafraîchissez
```

## 🎨 Quand Vous Modifiez

### Modifiez les styles
Éditez `src/css/input.css` → Tailwind compile automatiquement → Rafraîchissez le navigateur

### Modifiez le HTML
Éditez `index.html` → Rien à compiler → Rafraîchissez simplement

### Modifiez le JavaScript
Éditez `src/js/app.js` → Rien à compiler → Rafraîchissez simplement

## ✅ Vérification

Pour vérifier que tout fonctionne :

```bash
# Vérifier que le CSS est compilé
ls -lah src/css/styles.css

# Vérifier que node_modules existe
ls -lah node_modules/ | head

# Vérifier la taille du CSS (devrait être ~21 KB)
du -h src/css/styles.css
```

## 🔨 Build Production

Quand vous êtes prêt à déployer :

```bash
npm run build
```

Ensuite, commitez votre code et déployez !

## 💬 Questions ?

Consultez les fichiers de documentation :
- `docs/TAILWIND_SETUP.md` - Guide complet Tailwind
- `docs/INSTALLATION_COMPLETE.md` - Résumé de l'installation
- `docs/ARCHITECTURE.md` - Architecture de l'app
- `README.md` - Guide complet du projet

---

**Vous êtes prêt à développer ! 🎉**
