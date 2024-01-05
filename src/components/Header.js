// Header.tsx
import { Box, Flex, Link, Heading } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex as="header" justify="space-between" align="center" p="4">
      <Heading size="md">Your Brand</Heading>
      <Flex as="nav">
        <Link mx="2" href="#about">About</Link>
        <Link mx="2" href="#projects">Projects</Link>
        <Link mx="2" href="#contact">Contact</Link>
      </Flex>
    </Flex>
  );
};

export default Header;
