// Progress with percentage
import React from 'react';
import { CircularProgress, CircularProgressLabel, Box } from '@chakra-ui/react';

const CircularProgressComponent = ({ percentage }) => {
  return (
    <Box w="200px" h="200px" position="relative">
      <CircularProgress
        value={percentage}
        size="200px"
        thickness="12px"
        color="teal"
      >
        <CircularProgressLabel>{percentage}%</CircularProgressLabel>
      </CircularProgress>
    </Box>
  );
};

export default CircularProgressComponent;
