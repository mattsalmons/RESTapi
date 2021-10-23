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
router.get('/:id', getSubscriber, (req, res) => {
 res.send(res.subscriber.name);
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

async function getSubscriber(req, res, next) {
  let subscriber;
  try {
    subscriber = await Subscriber.findById(req.params.id);
    if (subscriber == null) {
      return res.status(404).json({ message: 'Cannot find subscriber' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.subscriber = subscriber;
  next();
};


module.exports = router;