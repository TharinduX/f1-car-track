const express = require('express');
const {
  addF1Car,
  getF1CarNames,
  getCarDetails,
} = require('../controllers/f1carsController');

const router = express.Router();
router.post('/f1car', addF1Car);
router.get('/names', getF1CarNames);
router.get('/details/:carName', getCarDetails);

module.exports = {
  routes: router,
};
