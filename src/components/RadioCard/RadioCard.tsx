import { useRadio, Box, Text } from '@chakra-ui/react';
import type { NextPage } from 'next'
import Head from 'next/head'
import React, { ReactNode } from 'react';

interface Props {
  children: React.ReactNode;
  setValueButton: (valueButton: string) => void;
}

  const RadioCard = (props: any) => { // prop: any
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        position="relative"
        cursor="pointer"
        h="2px"
        w="2px"
        border={`4px solid ${props.children == "Sim" ? "#87FA34" : "#FD5028"}`}
        borderRadius="100%"
        boxShadow="md"
        _checked={{
          bg: `${props.children == "Sim" ? "#87FA34" : "#FD5028"}`,
          color: "white",
        }}
        p={4}
      >
        <Text
          letterSpacing="3px"
          fontWeight="bold"
          fontSize="lg"
          position="absolute"
          top={0}
          left={props.children == "Sim" ? -12 : 12}
        >
          {props.children}
        </Text>
      </Box>
    </Box>
  );
}

export default RadioCard;