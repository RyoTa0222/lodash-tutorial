import React from 'react';
import {
  Container,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react';

const AccordionTitle = ({ title }) => {
  return (
    <AccordionButton>
      <Box flex="1" textAlign="left">
        <Heading>{title}</Heading>
      </Box>
      <AccordionIcon />
    </AccordionButton>
  );
};

export default AccordionTitle;
