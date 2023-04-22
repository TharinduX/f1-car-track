import React, { useState, useEffect } from 'react';
import {
  AspectRatio,
  Box,
  Container,
  Flex,
  HStack,
  Text,
  Heading,
  Stat,
} from '@chakra-ui/react';
import Card from './components/Card';
import { db } from './firebase-config';
import { collection, onSnapshot } from 'firebase/firestore';

const colRef = collection(db, 'f1cars');

const MapView = () => {
  const [f1cars, setF1cars] = useState([]);

  useEffect(() => {
    onSnapshot(colRef, (snapshot) => {
      setF1cars(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <Flex>
      <Box p={5} width='600px'>
        <Heading>Leaderboard</Heading>
        {f1cars.map((f1car) => (
          <Card
            name={f1car.carName}
            lat={f1car.latitude}
            long={f1car.longitude}
            speed={f1car.speed}
          />
        ))}
      </Box>
      <AspectRatio h='100vh' w='full' ratio={16 / 9}>
        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng' />
      </AspectRatio>
    </Flex>
  );
};

export default MapView;
