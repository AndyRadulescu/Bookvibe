import { describe, expect, it } from 'vitest';
import StartComponent from './star.component';
import { render, screen } from '@testing-library/react';

describe('star.component.tsx', () => {
  it('renders half star', () => {
    render(<StartComponent star={'half'} />);
    expect(screen.getByTestId('half')).toBeDefined();
    expect(screen.getByTestId('empty')).toBeDefined();
  });

  it('renders full star', () => {
    render(<StartComponent star={'full'} />);
    expect(screen.getByTestId('full')).toBeDefined();
    expect(screen.queryByTestId('empty')).toBeNull();
  });
});
