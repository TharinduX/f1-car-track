'use strict';

const firebase = require('../db');
const F1Car = require('../models/f1cars');
const firestore = firebase.firestore();

const addF1Car = async (req, res, next) => {
  try {
    const data = req.body;
    await firestore.collection('f1cars').doc().set(data);
    res.send('Record saved successfuly');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getF1CarLocations = async (req, res, next) => {
  try {
    const f1cars = await firestore.collection('f1cars');
    const data = await f1cars.get();
    const f1carsArray = [];

    if (data.empty) {
      res.status(404).send('No locations found');
    } else {
      data.forEach((doc) => {
        const f1car = new F1Car(
          doc.id,
          doc.data().carName,
          doc.data().longitude,
          doc.data().latitude,
          doc.data().speed,
          doc.data().timestamp
        );
        f1carsArray.push(f1car);
      });
      res.send(f1carsArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addF1Car,
  getF1CarLocations,
};
