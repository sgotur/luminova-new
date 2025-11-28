import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Logo } from './Logo';

describe('Logo Component', () => {
  const defaultProps = {
    src: '/test-logo.png',
    alt: 'Test Company Logo',
    businessName: 'Test Company',
  };

  it('renders logo image with correct src and alt text', () => {
    render(<Logo {...defaultProps} />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/test-logo.png');
    expect(img).toHaveAttribute('alt', 'Test Company Logo');
  });

  it('applies custom className when provided', () => {
    render(<Logo {...defaultProps} className="custom-class" />);
    const img = screen.getByRole('img');
    expect(img).toHaveClass('custom-class');
  });

  it('displays fallback when image fails to load', () => {
    render(<Logo {...defaultProps} />);
    const img = screen.getByRole('img');
    
    // Simulate image load error
    fireEvent.error(img);
    
    // Should show fallback with first letter of business name
    const fallback = screen.getByRole('img');
    expect(fallback).toHaveTextContent('T');
    expect(fallback).toHaveAttribute('aria-label', 'Test Company Logo');
  });

  it('uses businessName for aria-label in fallback when alt is empty', () => {
    const { container } = render(<Logo {...defaultProps} alt="" />);
    const img = container.querySelector('img');
    
    // Simulate image load error
    if (img) {
      fireEvent.error(img);
    }
    
    const fallback = screen.getByRole('img');
    expect(fallback).toHaveAttribute('aria-label', 'Test Company');
  });

  it('displays first letter of businessName in uppercase in fallback', () => {
    render(<Logo {...defaultProps} businessName="acme corp" />);
    const img = screen.getByRole('img');
    
    // Simulate image load error
    fireEvent.error(img);
    
    const fallback = screen.getByRole('img');
    expect(fallback).toHaveTextContent('A');
  });

  it('has proper Tailwind styling classes', () => {
    render(<Logo {...defaultProps} />);
    const img = screen.getByRole('img');
    expect(img).toHaveClass('object-contain');
  });
});
