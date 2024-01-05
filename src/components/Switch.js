// Switch button for overlay and background color
import React, { useState } from 'react';
import { Switch } from '@chakra-ui/react';

const SwitchComponent = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
    // Add logic for handling switch change here
    console.log('Switch is toggled:', !isChecked);
  };

  return (
    <Switch
      onChange={handleChange}
      isChecked={isChecked}
      colorScheme="teal"
      size="lg"
    />
  );
};

export default SwitchComponent;
