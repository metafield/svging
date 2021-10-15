import type { CircleAttrs } from '../types';

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
