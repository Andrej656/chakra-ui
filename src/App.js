// App.js
import React from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Button from './components/Button';
import Progress from './components/Progress';
import Switch from './components/Switch';
import Link from './components/Link';

function App() {
  return (
    <ChakraProvider>
      <Header />

      <Container maxW="container.lg" mt="8">
        <About />
        <Projects />
        <Contact />

        {/* Sample Chakra UI components */}
        <Button onClick={() => console.log('Button clicked!')}>
          Click me
        </Button>
        <Switch />
        <Progress value={75} />
        <Link href="https://example.com">Click here</Link>
      </Container>
    </ChakraProvider>
  );
}

export default App;
