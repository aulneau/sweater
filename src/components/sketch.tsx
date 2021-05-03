import React from 'react';
import Sketch from 'react-p5';
import p5Types from 'p5'; //Import this for typechecking and intellisense
import * as p5ex from 'p5ex';

interface ComponentProps {
  //Your component props
  color: string;
}

const SKETCH_NAME = 'Stripes';

export const SketchComponent: React.FC<ComponentProps> = ({ color }: ComponentProps) => {
  let x = 50;
  const y = 50;

  // ---- variables
  let backgroundColor: p5Types.Color;
  let backgroundPixels: number[];

  let resetIndicator: boolean = false;
  let resizeIndicator: boolean = false;
  let timeoutId: number = -1;

  const huePatterns = [
    [0, 120, 240],
    [0, 30, 60],
    [0, 150, 210],
    [0, 90, 180, 270],
  ];

  // ---- functions

  // p.setup = () => {
  //   p.createScalableCanvas(p5ex.ScalableCanvasTypes.SQUARE640x640);
  //
  //   backgroundColor = p.color(255);
  //   p.rectMode(p.CENTER);
  //   p.pixelDensity(1);
  //
  //   resetIndicator = true;
  //   p.noLoop();
  // };

  // p.windowResized = () => {
  //   resizeIndicator = true;
  //   p.resizeScalableCanvas();
  // };
  //
  //
  // p.keyTyped = () => {
  //   if (p.key === 's') p.saveCanvas('stripes', 'png');
  // };
  //

  //See annotations in JS for more information
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(600, 600).parent(canvasParentRef);

    backgroundColor = p5.color(color);
    p5.rectMode(p5.CENTER);
    p5.pixelDensity(1);

    resetIndicator = true;
    p5.noLoop();
  };

  function drawStripe(p: p5Types, color: p5Types.Color) {
    p.blendMode(p.MULTIPLY);

    p.noStroke();
    p.fill(color);

    const thickness = p.random(5, 70);
    const interval = thickness + p.random(10, 50);
    const length = p.random(0.4, 0.6) * p.height;
    const y = p.random(-1, 1) * 100;

    let x = -p.random(0.2, 0.3) * p.width + thickness / 2;
    const maxX = -x;
    const xOffset = p.random(-1, 1) * 100;

    while (x < maxX) {
      p.rect(x + xOffset, y, thickness, length, 3);
      x += interval;
    }
  }
  const draw = (p: p5Types) => {
    if (resetIndicator || resizeIndicator) {
      p.background(p.color(255, 0));
      // p5ex.applyRandomTexture(p, 16);
      p.loadPixels();
      backgroundPixels = p.pixels;

      resetIndicator = false;

      if (resizeIndicator) {
        resizeIndicator = false;
        if (timeoutId !== -1) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          p.redraw();
        }, 100);
        return;
      }
    }

    p.pixels = backgroundPixels;
    p.updatePixels();

    p.translate(0.5 * p.width, 0.5 * p.height);

    const huePattern = p.random(huePatterns);

    for (let i = 0; i < huePattern.length; i += 1) {
      const theta = p.radians(p.random(40, 70));
      const color = p.color(
        p5ex.cielchColor(
          100 * Math.sin(theta),
          80 + 50 * Math.cos(theta) + p.random(-1, 1) * 10,
          p.random(p.TWO_PI) + p.radians(huePattern[i]),
          128
        )
      );

      drawStripe(p, color);
    }

    p.filter(p.ERODE);
  };

  return <Sketch setup={setup} draw={draw} />;
};
