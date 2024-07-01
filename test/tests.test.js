import { render, screen, logDOM } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import App from '../src/App';
import Nav from '@/app/components/Nav';

describe('App', () => {
  it('renders headline', () => {
    render(<App title="React" />);
    screen.debug();
  });
});
