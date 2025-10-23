import { describe, it, expect } from 'vitest';
import { theme } from './ui-react';

describe('ui-react theme', () => {
  it('should be defined', () => {
    expect(theme).toBeDefined();
  });

  it('should have primary and secondary palettes', () => {
    expect(theme.palette.primary).toBeDefined();
    expect(theme.palette.secondary).toBeDefined();
  });

  it('should have typography settings', () => {
    expect(theme.typography).toBeDefined();
  });
});