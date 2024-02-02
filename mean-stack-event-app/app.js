const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const eventRoutes = require('./routes/eventRoutes');
const path = require('path');
const cors = require('cors');

// Initialisation de l'application Express
const app = express();

// Activation de CORS pour permettre les requêtes depuis d'autres domaines
app.use(cors());
// Utilisation du format JSON pour les requêtes et réponses
app.use(express.json());

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://username:password@localhost:27017/mean_stack_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Événement déclenché lorsque la connexion à MongoDB est établie
mongoose.connection.on('connected', () => {
  console.log('Connecté à MongoDB');
});

// Serveur les fichiers statiques depuis le répertoire 'browser'
app.use(express.static(path.join(__dirname, 'frontend/dist/frontend/browser')));

// Utilisation des routes définies pour les événements
app.use('/events', eventRoutes);

// Gestion des erreurs - middleware pour les erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Une erreur s\'est produite !');
});

// Configuration du port du serveur
const PORT = process.env.PORT || 3000;
// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Le serveur fonctionne sur le port ${PORT}`);
});
