import React from 'react';
import {
  Container,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Code
} from '@chakra-ui/react';
import AccordionTitle from './components/AccordionTitle';
import _ from "lodash"

const Loadash = () => {
  const test = _.chunk(['a', 'b', 'c', 'd'], 3);
  console.log(test)
  return (
    <Container>
      <Accordion defaultIndex={[0]} mt="4" allowMultiple>
        <AccordionItem>
          <AccordionTitle title="Array" />
          <AccordionPanel pb={4}>
          {/* chunk */}
            <Heading fontSize="lg">chunk</Heading>
            指定したサイズのグループに要素を分割した配列を作成します。配列を均等に分割できない場合、最後のチャンクは残りの要素になります。
            <Box>
              引数
              array: Array
              size: number, default=1
            </Box>
            <Code colorScheme="blackAlpha">
              // example
              _.chunk(['a', 'b', 'c', 'd'], 2);
            </Code>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Section 2 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  );
};

export default Loadash;
