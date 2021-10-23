const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber');

// Get all subscribers
router.get('/', async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get one subscriber
router.get('/:id', (req, res) => {
  let id = req.params.id;
  res.send(`get subscriber ${id}`);
});
// Create a subscriber
router.post('/', async (req, res) => {
  const subscriber = new Subscriber({
    name: req.body.name,
    subscribedToChannel: req.body.subscribedToChannel
  });
  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// Update a subscriber
router.patch('/:id', (req, res) => {

});
// Delete a subscriber
router.delete('/:id', (req, res) => {

});

module.exports = router;