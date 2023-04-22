import React from 'react';
import {
  AspectRatio,
  Box,
  Container,
  Flex,
  HStack,
  Text,
  Heading,
  Stat,
  Spinner,
  Stack,
} from '@chakra-ui/react';

import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  useLoadScript,
} from '@react-google-maps/api';

import CustomMarker from '../assets/marker.png';

const Map = (props) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded)
    return (
      <Flex>
        <Spinner size='lg' />
      </Flex>
    );

  return (
    <AspectRatio w='full' ratio={16 / 9}>
      <GoogleMap zoom={18} center={{ lat: props.lat, lng: props.long }}>
        <MarkerF
          options={{ icon: CustomMarker }}
          position={{ lat: props.lat, lng: props.long }}
        />
      </GoogleMap>
    </AspectRatio>
  );
};

export default Map;
