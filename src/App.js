import React from 'react';
import './style.css';
import { ChakraProvider } from '@chakra-ui/react';
import Loadash from './lodash';

export default function App() {
  return (
    <ChakraProvider>
      <Loadash />
    </ChakraProvider>
  );
}
