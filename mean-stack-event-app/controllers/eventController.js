const Event = require('../models/eventModel');
const multer = require('multer');

// Configuration du stockage en mémoire pour le téléchargement de fichiers
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Récupération de tous les événements
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupération d'un événement par son identifiant
exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Création d'un nouvel événement avec téléchargement d'une image
exports.createEvent = upload.single('picture'), async (req, res) => {
  try {
    // Extraction des données du corps de la requête
    const { name, category, state, eventType, placeName, placeMap, organizedBy } = req.body;
    // Conversion de l'image en base64 à partir du tampon de mémoire
    const picture = req.file.buffer.toString('base64');

    // Création d'une instance de l'événement
    const event = new Event({
      name,
      category,
      state,
      eventType,
      placeName,
      placeMap,
      organizedBy,
      picture,
    });

    // Enregistrement de l'événement dans la base de données
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mise à jour des informations d'un événement
exports.updateEvent = async (req, res) => {
  try {
    // Récupération des données mises à jour du corps de la requête
    const updatedData = req.body;
    // Mise à jour de l'événement dans la base de données
    await Event.findByIdAndUpdate(req.params.id, updatedData);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Suppression d'un événement par son identifiant
exports.deleteEvent = async (req, res) => {
  try {
    // Suppression de l'événement dans la base de données
    await Event.findByIdAndDelete(req.params.id);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
