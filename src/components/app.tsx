import React from 'react';
import { YourComponent } from './sketch';
import { SweaterTwo } from './sweater';
import { Box, Flex } from '@stacks/ui';
import { useControls } from 'leva';

export const App: React.FC = () => {
  const { color, leftArm, rightArm, torso } = useControls({
    color: '#ffffff',
    leftArm: '#ffffff',
    rightArm: '#ffffff',
    torso: '#ffffff',
  });

  return (
    <Flex
      p="300px"
      bg="black"
      alignItems="center"
      justifyContent="center"
      width="100vw"
      height="100vh"
    >
      <Box zIndex={99} position="absolute">
        <YourComponent color={color} />
      </Box>
      <SweaterTwo colors={{ leftArm, rightArm, torso }} color={color} />
    </Flex>
  );
};
