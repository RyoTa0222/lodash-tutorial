import React from 'react';
import { Code, useClipboard, Button } from '@chakra-ui/react';
import Editor from 'react-simple-code-editor';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-dark.css';
import { highlight, languages } from 'prismjs/components/prism-core';

const CodeComponent = ({ data }) => {
  const { hasCopied, onCopy } = useClipboard(data);
  return (
    <Code
      width="100%"
      bg="rgb(1, 22, 39)"
      borderRadius="8px"
      padding="3"
      position="relative"
    >
      <Editor
        value={data}
        onValueChange={data => setCode(data)}
        highlight={data => highlight(data, languages.js)}
        padding={10}
        style={{
          fontSize: 12,
          width: '100%'
        }}
      />
      <Button
        onClick={onCopy}
        size="sm"
        fontSize="xs"
        height="20px"
        colorScheme="teal"
        position="absolute"
        right="10px"
        top="10px"
      >
        {hasCopied ? 'Copied' : 'COPY'}
      </Button>
    </Code>
  );
};

export default CodeComponent;
