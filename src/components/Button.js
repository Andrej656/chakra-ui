// Button design 
import React from 'react';
import { Button } from '@chakra-ui/react';

const ButtonComponent = ({ text, onClick }) => {
  return (
    <Button colorScheme="blue" onClick={onClick}>
      {text}
    </Button>
  );
};

export default ButtonComponent;
