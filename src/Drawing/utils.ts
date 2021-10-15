import type { CircleAttrs, LineAttrs } from '../types';

export function circle(
  centerX: number,
  centerY: number,
  radius: number,
  style: string
): CircleAttrs {
  return {
    cx: centerX.toString(),
    cy: centerY.toString(),
    r: radius.toString(),
    style,
  };
}

export function line(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  style: string
): LineAttrs {
  return {
    x1: x1.toString(),
    y1: y1.toString(),
    x2: x2.toString(),
    y2: y2.toString(),
    style,
  };
}
