import React from 'react';
import './style.css';
import { ChakraProvider } from '@chakra-ui/react';

export default function App() {
  return (
    <ChakraProvider>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </ChakraProvider>
  );
}
