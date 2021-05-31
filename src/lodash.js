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
  Code,
  useClipboard,
  Button
} from '@chakra-ui/react';
import AccordionTitle from './components/AccordionTitle';
import TableComponent from './components/Table';
import CodeComponent from './components/Code';

import _ from 'lodash';

const Loadash = () => {
  const test = _.chunk(['a', 'b', 'c', 'd', 'e'], 3);
  console.log(test);
  return (
    <Container>
      <Accordion defaultIndex={[0]} mt="4" allowMultiple>
        <AccordionItem>
          <AccordionTitle title="Array" />
          <AccordionPanel pb={4}>
            {/* chunk */}
            <Heading fontSize="lg" color="teal" mb="2">
              chunk
            </Heading>
            引数のsizeで指定したサイズに要素を分割した配列を作成します。配列を均等に分割できない場合、最後のチャンクは残りの要素になります。
            <Box padding="3" borderWidth="1px" borderRadius="lg" my="5">
              <TableComponent
                data={[
                  { name: 'array', type: 'Array', description: '対象の配列' },
                  {
                    name: 'size',
                    type: 'number',
                    description: '分割する要素の数。defaultは１'
                  }
                ]}
              />
            </Box>
            <CodeComponent
              data={`// example
_.chunk(['a', 'b', 'c', 'd', 'e']);
> [['a'], ['b'], ['c'], ['d'], ['e']]
_.chunk(['a', 'b', 'c', 'd', 'e'], 2);
> [['a', 'b'], ['c', 'd'], ['e']]
_.chunk(['a', 'b', 'c', 'd', 'e'], 3);
> [['a', 'b', 'c'], ['d', 'e']]`}
            />
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
