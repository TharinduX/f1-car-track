class F1cars {
  constructor(id, carId, longitude, latitude, timestamp, speed) {
    this.id = id;
    this.carId = carId;
    this.longitude = longitude;
    this.latitude = latitude;
    this.speed = speed;
    this.timestamp = timestamp;
  }
}

module.exports = F1cars;
