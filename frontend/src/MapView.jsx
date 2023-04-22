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
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  limit,
} from 'firebase/firestore';
import Map from './components/Map';

const colRef = query(
  collection(db, 'f1cars'),
  orderBy('created', 'desc'),
  limit(1)
);
const MapView = () => {
  const [f1cars, setF1cars] = useState([]);

  useEffect(() => {
    onSnapshot(colRef, (querySnapshot) => {
      setF1cars(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <Flex>
      <Box p={5} overflow='auto' h='100vh' maxW='500px' w='full'>
        <Heading>Leaderboard</Heading>
        {f1cars.map((f1car) => (
          <Card
            key={f1car.carName}
            place='1'
            name={f1car.carName}
            lat={f1car.latitude}
            long={f1car.longitude}
            speed={f1car.speed}
          />
        ))}
      </Box>
      {f1cars.map((f1car) => (
        <Map
          key={f1car.carName}
          lat={parseFloat(f1car.latitude)}
          long={parseFloat(f1car.longitude)}
        />
      ))}
    </Flex>
  );
};

export default MapView;
