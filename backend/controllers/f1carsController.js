'use strict';

const firebase = require('../db');
const F1Car = require('../models/f1cars');
const firestore = firebase.firestore();

const addF1Car = async (req, res, next) => {
  try {
    const data = req.body;
    await firestore.collection('f1cars').doc().set({
      carName: data.carName,
      longitude: data.longitude,
      latitude: data.latitude,
      speed: data.speed,
      created: Date.now(),
    });
    res.send('Record saved successfuly');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getF1CarNames = async (req, res, next) => {
  try {
    const f1cars = await firestore.collection('f1cars');
    const data = await f1cars.get();
    const f1carsArray = [];
    if (data.empty) {
      res.status(404).send('No locations found');
    } else {
      data.forEach((doc) => {
        if (!f1carsArray.includes(doc.data().carName)) {
          f1carsArray.push(doc.data().carName);
        }
      });
      res.send(f1carsArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getCarDetails = async (req, res, next) => {
  try {
    const f1cars = await firestore.collection('f1cars');
    const data = await f1cars
      .where('carName', '==', req.params.carName)
      .orderBy('created', 'desc')
      .limit(1)
      .get();
    const f1carsArray = [];
    if (data.empty) {
      res.status(404).send('No locations found');
    } else {
      data.forEach((doc) => {
        if (doc.data().carName === req.params.carName) {
          f1carsArray.push(doc.data());
        }
      });
      res.send(f1carsArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addF1Car,
  getF1CarNames,
  getCarDetails,
};
