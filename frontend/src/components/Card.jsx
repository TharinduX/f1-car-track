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
  Stack,
  Divider,
  Badge,
} from '@chakra-ui/react';

const Card = (props) => {
  return (
    <Box
      color='white'
      bg='teal'
      mt={2}
      maxW='full'
      borderRadius='xl'
      p={5}
      boxShadow='lg'
    >
      <HStack justifyContent='space-between'>
        <Flex
          w='35px'
          h='35px'
          borderRadius='full'
          bg='white'
          color='teal'
          alignItems='center'
          justifyContent='space-around'
        >
          <Text as='b' textAlign='center' fontSize='lg' p={2}>
            1
          </Text>
        </Flex>
        <Stack>
          <Text fontSize='xl'>{props.name}</Text>
          <HStack align>
            <Text as='sub'>Latitude: {props.lat}</Text>
            <Divider
              color='white'
              height='10px'
              orientation='vertical'
            ></Divider>
            <Text as='sub'>Longitude: {props.long}</Text>
          </HStack>
        </Stack>
        <Stack alignItems='flex-end'>
          <Text as='b' fontSize='lg'>
            Speed
          </Text>
          <Badge colorScheme='green'>{props.speed} km/h</Badge>
        </Stack>
      </HStack>
    </Box>
  );
};

export default Card;
