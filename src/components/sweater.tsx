import React, { forwardRef } from 'react';
import { Box, BoxProps } from '@stacks/ui';

export const Sweater = forwardRef((props: BoxProps, ref) => {
  return (
    <Box as="svg" viewBox="0 0 556 272" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M325.122 0L295.732 54.9062L531.5 173.5L549.5 142L325.122 0Z" fill="currentColor" />
      <path d="M230.249 0L259.64 54.9062L23.5 173L6 142L230.249 0Z" fill="currentColor" />
      <Box
        ref={ref}
        as="path"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M326 0H230V24L178 96L182 240H374L378 96L326 24V0Z"
        fill="currentColor"
      />
      <rect x="182" y="240" width="192" height="32" fill="currentColor" />
      <path d="M326 0H230C230 0 240 32 278 32C316 32 326 0 326 0Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M230 0C230 0 231.065 3.40818 233.821 8C239.509 17.4783 252.401 32 278 32C303.598 32 316.491 17.4783 322.179 8C324.935 3.40818 326 0 326 0H230ZM243.484 8C244.15 8.86639 244.88 9.74754 245.678 10.6278C251.64 17.207 261.578 24 278 24C294.422 24 304.36 17.207 310.322 10.6278C311.12 9.74754 311.85 8.86639 312.516 8H243.484Z"
        fill="currentColor"
      />
    </Box>
  );
});
export const SweaterTwo = forwardRef(
  (
    {
      colors = {
        leftArm: 'currentColor',
        rightArm: 'currentColor',
        torso: 'currentColor',
      },
      ...props
    }: BoxProps,
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
