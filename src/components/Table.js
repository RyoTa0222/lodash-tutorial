import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

/**
interface Props {
  data: {
    name: string
    type: string
    description: string
  }[]
}
*/

const TableComponent = ({ data }) => {
  console.log(data);
  return (
    <Table variant="simple" size="sm">
      <Thead>
        <Tr>
          <Th>引数</Th>
          <Th>型</Th>
          <Th>概要</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((el, index) => {
          return (
            <Tr key={index}>
              <Td>{el.name}</Td>
              <Td>{el.type}</Td>
              <Td>{el.description}</Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default TableComponent;
