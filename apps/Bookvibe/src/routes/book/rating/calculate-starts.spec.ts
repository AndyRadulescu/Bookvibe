import { describe, expect, it } from 'vitest';
import { calculateStars } from './calculate-starts';

describe('calculate-stars', () => {
  it('should calculate the number of stars', () => {
    expect(calculateStars(4.5)).toEqual(['full', 'full', 'full', 'full', 'half']);
    expect(calculateStars(2.5)).toEqual(['full', 'full', 'half', 'empty', 'empty']);
    expect(calculateStars(0)).toEqual(['empty', 'empty', 'empty', 'empty', 'empty']);
  });
  it('should calculate even if string', () => {
    expect(calculateStars('3.5')).toEqual(['full', 'full', 'full', 'half', 'empty']);
  });

  it('in case of undefined -> empty array', () => {
    expect(calculateStars(undefined)).toEqual(['empty', 'empty', 'empty', 'empty', 'empty']);
  });
});
