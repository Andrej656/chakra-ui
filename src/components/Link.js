// Link component for multiple usage
import React from 'react';
import { Link } from '@chakra-ui/react';

const LinkComponent = ({ href, text }) => {
  return (
    <Link href={href} color="teal.500" fontWeight="bold">
      {text}
    </Link>
  );
};

export default LinkComponent;
