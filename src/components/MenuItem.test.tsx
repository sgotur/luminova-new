import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MenuItem } from './MenuItem';
import type { MenuItemData } from '../utils/types';

describe('MenuItem Component', () => {
  describe('Basic rendering', () => {
    it('should render menu item label', () => {
      const item: MenuItemData = { label: 'Home' };
      render(<MenuItem item={item} isMobile={false} />);
      
      expect(screen.getByText('Home')).toBeInTheDocument();
    });

    it('should render as anchor tag when url is provided', () => {
      const item: MenuItemData = { label: 'About', url: '/about' };
      render(<MenuItem item={item} isMobile={false} />);
      
      const link = screen.getByRole('menuitem');
      expect(link.tagName).toBe('A');
      expect(link).toHaveAttribute('href', '/about');
    });

    it('should render as plain text when no url or children', () => {
      const item: MenuItemData = { label: 'Contact' };
      render(<MenuItem item={item} isMobile={false} />);
      
      const element = screen.getByRole('menuitem');
      expect(element.tagName).toBe('SPAN');
    });
  });

  describe('Dropdown trigger detection', () => {
    it('should render as button when item has children', () => {
      const item: MenuItemData = {
        label: 'Products',
        children: [
          { label: 'Product 1' },
          { label: 'Product 2' }
        ]
      };
      render(<MenuItem item={item} isMobile={false} />);
      
      const button = screen.getByRole('menuitem');
      expect(button.tagName).toBe('BUTTON');
      expect(button).toHaveAttribute('aria-haspopup', 'true');
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });

    it('should display dropdown indicator icon when item has children', () => {
      const item: MenuItemData = {
        label: 'Services',
        children: [{ label: 'Service 1' }]
      };
      render(<MenuItem item={item} isMobile={false} />);
      
      const button = screen.getByRole('menuitem');
      const svg = button.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });
  });

  describe('Desktop hover interactions', () => {
    it('should open dropdown on hover in desktop mode', () => {
      const item: MenuItemData = {
        label: 'Products',
        children: [
          { label: 'Product 1' },
          { label: 'Product 2' }
        ]
      };
      render(<MenuItem item={item} isMobile={false} />);
      
      const button = screen.getByRole('menuitem');
      const container = button.parentElement;
      
      // Initially closed
      expect(button).toHaveAttribute('aria-expanded', 'false');
      
      // Hover to open
      if (container) {
        fireEvent.mouseEnter(container);
      }
      expect(button).toHaveAttribute('aria-expanded', 'true');
      expect(screen.getByText('Product 1')).toBeInTheDocument();
      expect(screen.getByText('Product 2')).toBeInTheDocument();
    });

    it('should close dropdown on mouse leave in desktop mode', () => {
      const item: MenuItemData = {
        label: 'Products',
        children: [{ label: 'Product 1' }]
      };
      render(<MenuItem item={item} isMobile={false} />);
      
      const button = screen.getByRole('menuitem');
      const container = button.parentElement;
      
      // Open dropdown
      if (container) {
        fireEvent.mouseEnter(container);
        expect(button).toHaveAttribute('aria-expanded', 'true');
        
        // Close dropdown
        fireEvent.mouseLeave(container);
        expect(button).toHaveAttribute('aria-expanded', 'false');
      }
    });
  });

  describe('Mobile click interactions', () => {
    it('should toggle dropdown on click in mobile mode', () => {
      const item: MenuItemData = {
        label: 'Products',
        children: [{ label: 'Product 1' }]
      };
      render(<MenuItem item={item} isMobile={true} />);
      
      const button = screen.getByRole('menuitem');
      
      // Initially closed
      expect(button).toHaveAttribute('aria-expanded', 'false');
      
      // Click to open
      fireEvent.click(button);
      expect(button).toHaveAttribute('aria-expanded', 'true');
      expect(screen.getByText('Product 1')).toBeInTheDocument();
      
      // Click to close
      fireEvent.click(button);
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });

    it('should not open dropdown on hover in mobile mode', () => {
      const item: MenuItemData = {
        label: 'Products',
        children: [{ label: 'Product 1' }]
      };
      render(<MenuItem item={item} isMobile={true} />);
      
      const button = screen.getByRole('menuitem');
      const container = button.parentElement;
      
      // Hover should not open in mobile
      if (container) {
        fireEvent.mouseEnter(container);
      }
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('Touch interactions', () => {
    it('should toggle dropdown on touch start', () => {
      const item: MenuItemData = {
        label: 'Products',
        children: [{ label: 'Product 1' }]
      };
      render(<MenuItem item={item} isMobile={true} />);
      
      const button = screen.getByRole('menuitem');
      
      // Initially closed
      expect(button).toHaveAttribute('aria-expanded', 'false');
      
      // Touch to open
      fireEvent.touchStart(button);
      expect(button).toHaveAttribute('aria-expanded', 'true');
      expect(screen.getByText('Product 1')).toBeInTheDocument();
      
      // Touch to close
      fireEvent.touchStart(button);
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });

    it('should not trigger touch events on items without children', () => {
      const item: MenuItemData = { label: 'Home', url: '/home' };
      render(<MenuItem item={item} isMobile={true} />);
      
      const link = screen.getByRole('menuitem');
      
      // Touch event should not cause errors on non-dropdown items
      expect(() => fireEvent.touchStart(link)).not.toThrow();
    });
  });

  describe('Keyboard navigation', () => {
    it('should toggle dropdown on Enter key', () => {
      const item: MenuItemData = {
        label: 'Products',
        children: [{ label: 'Product 1' }]
      };
      render(<MenuItem item={item} isMobile={false} />);
      
      const button = screen.getByRole('menuitem');
      
      // Press Enter to open
      fireEvent.keyDown(button, { key: 'Enter' });
      expect(button).toHaveAttribute('aria-expanded', 'true');
      
      // Press Enter to close
      fireEvent.keyDown(button, { key: 'Enter' });
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });

    it('should toggle dropdown on Space key', () => {
      const item: MenuItemData = {
        label: 'Products',
        children: [{ label: 'Product 1' }]
      };
      render(<MenuItem item={item} isMobile={false} />);
      
      const button = screen.getByRole('menuitem');
      
      // Press Space to open
      fireEvent.keyDown(button, { key: ' ' });
      expect(button).toHaveAttribute('aria-expanded', 'true');
    });

    it('should close dropdown on Escape key', () => {
      const item: MenuItemData = {
        label: 'Products',
        children: [{ label: 'Product 1' }]
      };
      render(<MenuItem item={item} isMobile={false} />);
      
      const button = screen.getByRole('menuitem');
      
      // Open dropdown
      fireEvent.keyDown(button, { key: 'Enter' });
      expect(button).toHaveAttribute('aria-expanded', 'true');
      
      // Press Escape to close
      fireEvent.keyDown(button, { key: 'Escape' });
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });

    it('should open dropdown on ArrowDown key', () => {
      const item: MenuItemData = {
        label: 'Products',
        children: [{ label: 'Product 1' }]
      };
      render(<MenuItem item={item} isMobile={false} />);
      
      const button = screen.getByRole('menuitem');
      
      // Press ArrowDown to open
      fireEvent.keyDown(button, { key: 'ArrowDown' });
      expect(button).toHaveAttribute('aria-expanded', 'true');
    });

    it('should handle keyboard navigation on anchor links', () => {
      const item: MenuItemData = { label: 'Home', url: '/home' };
      render(<MenuItem item={item} isMobile={false} />);
      
      const link = screen.getByRole('menuitem');
      
      // Keyboard events should not cause errors on links
      expect(() => fireEvent.keyDown(link, { key: 'Enter' })).not.toThrow();
      expect(() => fireEvent.keyDown(link, { key: 'ArrowDown' })).not.toThrow();
    });

    it('should handle keyboard navigation on plain text items', () => {
      const item: MenuItemData = { label: 'Contact' };
      render(<MenuItem item={item} isMobile={false} />);
      
      const span = screen.getByRole('menuitem');
      
      // Verify tabindex is set for keyboard accessibility
      expect(span).toHaveAttribute('tabIndex', '0');
      
      // Keyboard events should not cause errors on plain text
      expect(() => fireEvent.keyDown(span, { key: 'Enter' })).not.toThrow();
    });
  });

  describe('ARIA attributes', () => {
    it('should have aria-expanded and aria-haspopup for dropdown triggers', () => {
      const item: MenuItemData = {
        label: 'Products',
        children: [{ label: 'Product 1' }]
      };
      render(<MenuItem item={item} isMobile={false} />);
      
      const button = screen.getByRole('menuitem');
      expect(button).toHaveAttribute('aria-haspopup', 'true');
      expect(button).toHaveAttribute('aria-expanded');
    });

    it('should update aria-expanded when dropdown opens', () => {
      const item: MenuItemData = {
        label: 'Products',
        children: [{ label: 'Product 1' }]
      };
      render(<MenuItem item={item} isMobile={true} />);
      
      const button = screen.getByRole('menuitem');
      expect(button).toHaveAttribute('aria-expanded', 'false');
      
      fireEvent.click(button);
      expect(button).toHaveAttribute('aria-expanded', 'true');
    });
  });

  describe('Styling and visual feedback', () => {
    it('should apply active styles when dropdown is open', () => {
      const item: MenuItemData = {
        label: 'Products',
        children: [{ label: 'Product 1' }]
      };
      render(<MenuItem item={item} isMobile={true} />);
      
      const button = screen.getByRole('menuitem');
      
      // Open dropdown
      fireEvent.click(button);
      
      // Check for active class - Requirement 4.3
      expect(button.className).toContain('active');
      expect(button.className).toContain('menu-item');
    });
  });
});
