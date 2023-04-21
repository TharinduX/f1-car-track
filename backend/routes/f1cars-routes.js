const express = require('express');
const {
  addF1Car,
  getF1CarLocations,
} = require('../controllers/f1carsController');

const router = express.Router();
router.post('/f1car', addF1Car);
router.get('/locations', getF1CarLocations);

module.exports = {
  routes: router,
};
