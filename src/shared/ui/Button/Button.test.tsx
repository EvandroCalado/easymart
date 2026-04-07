import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Button } from './Button';

describe('Button', () => {
  test('should render a button', () => {
    render(<Button>test</Button>);

    expect(screen.getByRole('button', { name: 'test' })).toBeInTheDocument();
  });

  test('should render with className prop', () => {
    render(<Button className='test'>test</Button>);

    expect(screen.getByRole('button', { name: 'test' })).toHaveClass('test');
  });
});
