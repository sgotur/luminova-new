import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SkipLink } from './SkipLink';

/**
 * Tests for SkipLink component
 * Requirements: 5.1, 5.3 - Accessibility and keyboard navigation
 */
describe('SkipLink', () => {
  it('renders skip link with correct text', () => {
    render(<SkipLink />);
    const skipLink = screen.getByText('Skip to main content');
    expect(skipLink).toBeInTheDocument();
  });

  it('has correct href pointing to main content', () => {
    render(<SkipLink />);
    const skipLink = screen.getByText('Skip to main content');
    expect(skipLink).toHaveAttribute('href', '#main-content');
  });

  it('has aria-label for screen readers', () => {
    render(<SkipLink />);
    const skipLink = screen.getByLabelText('Skip to main content');
    expect(skipLink).toBeInTheDocument();
  });

  it('has skip-link class for styling', () => {
    render(<SkipLink />);
    const skipLink = screen.getByText('Skip to main content');
    expect(skipLink).toHaveClass('skip-link');
  });
});
