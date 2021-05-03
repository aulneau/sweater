import React from 'react';
import { SketchComponent } from './sketch';
import { Sweater } from './sweater';
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
        <SketchComponent color={color} />
      </Box>
      <Sweater colors={{ leftArm, rightArm, torso }} color={color} />
    </Flex>
  );
};
