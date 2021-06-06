import React from 'react';
import {
  Container,
  Heading,
  Accordion,
  AccordionItem,
  AccordionPanel,
  Divider,
  Box,
  Link
} from '@chakra-ui/react';
import CodeComponent from './components/Code';
import TableComponent from './components/Table';
import AccordionTitle from './components/AccordionTitle';
import { data } from './consts/config';
import _ from 'lodash';

const Loadash = () => {
  return (
    <Container>
      <Box mt="8">
        公式HP：
        <Link color="teal.500" href="https://lodash.com/">
          https://lodash.com/
        </Link>
      </Box>
      <Box my="4" mb="8">
        ドキュメント：
        <Link color="teal.500" href="https://lodash.com/docs/">
          https://lodash.com/docs/
        </Link>
      </Box>
      <Accordion defaultIndex={[0]} mt="4" allowMultiple>
        {data.map((_data, index) => (
          <AccordionItem>
            <AccordionTitle title={_data.title} />
            {_data.items.map((item, idx) => (
              <>
                <AccordionPanel pb={4}>
                  <Heading fontSize="lg" fontSize="lg" color="teal" mb="2">
                    {item.label}
                  </Heading>
                  {item.description}
                  <Box padding="3" borderWidth="1px" borderRadius="lg" my="5">
                    <TableComponent data={item.table} />
                  </Box>
                  <CodeComponent data={item.code} />
                  <Box my="5">
                    <Divider />
                  </Box>
                </AccordionPanel>
              </>
            ))}
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
};

export default Loadash;
