const express = require('express');
const router = express.Router();
const path = require('path');


const eventControllerPath = path.resolve(__dirname, '../controllers/eventController');
const eventController = require(eventControllerPath);

// Root URL route
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/src/index.html'));
});

router.get('/:id', eventController.getEventById);
router.post('/', eventController.createEvent);
router.put('/:id', eventController.updateEvent);
router.delete('/:id', eventController.deleteEvent);

module.exports = router;
