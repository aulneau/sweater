import React, { forwardRef } from 'react';
import { Box, BoxProps } from '@stacks/ui';

export const Sweater = forwardRef(
  (
    {
      colors = {
        leftArm: 'currentColor',
        rightArm: 'currentColor',
        torso: 'currentColor',
      },
      ...props
    }: BoxProps & {
      colors: {
        leftArm: string;
        rightArm: string;
        torso: string;
      };
    },
    ref
  ) => {
    return (
      <Box
        as="svg"
        viewBox="0 0 1016 690"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M276.5 58.5L435 0C439.641 3.64669 462.252 10.9202 507.75 10.9993C553.259 10.9202 576.859 3.64669 581.5 0L740 58.5L773.5 280.5L782 689.5H508.5H508H234.5L243 280.5L276.5 58.5Z"
          fill={colors.torso}
        />
        <path
          d="M937 177.5L738 57.5L771.5 287L879.5 345L815 566.5L898 595L1016 396L937 177.5Z"
          fill={colors.rightArm}
        />
        <path
          d="M79 177.5L278 57.5L244.5 287L136.5 345L201 566.5L118 595L0 396L79 177.5Z"
          fill={colors.leftArm}
        />
        <path
          d="M937 177.5L879.5 345.5L867.5 136L937 177.5Z"
          fill="url(#paint0_linear)"
          fillOpacity="0.2"
        />
        <path
          d="M80 177.5L137.5 345.5L149.5 136L80 177.5Z"
          fill="url(#paint1_linear)"
          fillOpacity="0.2"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="968"
            y1="241"
            x2="870"
            y2="243.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop />
            <stop offset="1" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="49"
            y1="241"
            x2="147"
            y2="243.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop />
            <stop offset="1" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
        </defs>
      </Box>
    );
  }
);
