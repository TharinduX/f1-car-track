const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
const config = require('./config');

const db = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = db;
