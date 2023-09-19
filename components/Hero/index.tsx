// packages below
import React from 'react';

// components below
import Container from './components/Container';
import LeftContent from './components/LeftContent';
import RightContent from './components/RightContent';

const Hero: React.FC = () => {
  return (
    <Container>
      <LeftContent />
      <RightContent />
    </Container>
  );
};

export default Hero;
