import { shared } from './shared';
import { describe, expect, it } from 'vitest';

describe('shared', () => {
  it('should work', () => {
    expect(shared()).toEqual('shared');
  });
});
