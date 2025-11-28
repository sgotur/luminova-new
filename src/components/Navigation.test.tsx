import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Navigation } from './Navigation';
import type { MenuItemData } from '../utils/types';

describe('Navigation', () => {
  const mockMenuData: MenuItemData[] = [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Contact', url: '/contact' },
  ];

  const defaultProps = {
    menuData: mockMenuData,
    logo: '/test-logo.svg',
    businessName: 'Test Company',
  };

  // Store original window.innerWidth
  let originalInnerWidth: number;

  beforeEach(() => {
    originalInnerWidth = window.innerWidth;
  });

  afterEach(() => {
    // Restore original window.innerWidth
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: originalInnerWidth,
    });
  });

  describe('Basic Rendering', () => {
    it('renders logo and business name', () => {
      render(<Navigation {...defaultProps} />);
      
      expect(screen.getByAltText('Test Company logo')).toBeInTheDocument();
      expect(screen.getByText('Test Company')).toBeInTheDocument();
    });

    it('uses semantic HTML with nav element', () => {
      const { container } = render(<Navigation {...defaultProps} />);
      
      const nav = container.querySelector('nav');
      expect(nav).toBeInTheDocument();
      expect(nav).toHaveAttribute('role', 'navigation');
      expect(nav).toHaveAttribute('aria-label', 'Main navigation');
    });

    it('renders business name in h1 tag', () => {
      render(<Navigation {...defaultProps} />);
      
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveTextContent('Test Company');
    });
  });

  describe('Desktop Viewport', () => {
    beforeEach(() => {
      // Set desktop viewport width
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1024,
      });
    });

    it('displays menu items horizontally in desktop viewport', () => {
      render(<Navigation {...defaultProps} />);
      
      // Should show all menu items
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('About')).toBeInTheDocument();
      expect(screen.getByText('Contact')).toBeInTheDocument();
      
      // Should not show hamburger menu
      expect(screen.queryByLabelText('Toggle mobile menu')).not.toBeInTheDocument();
    });

    it('renders all top-level menu items from data', () => {
      render(<Navigation {...defaultProps} />);
      
      mockMenuData.forEach(item => {
        expect(screen.getByText(item.label)).toBeInTheDocument();
      });
    });
  });

  describe('Mobile Viewport', () => {
    beforeEach(() => {
      // Set mobile viewport width
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 375,
      });
    });

    it('displays hamburger menu button in mobile viewport', () => {
      render(<Navigation {...defaultProps} />);
      
      const hamburgerButton = screen.getByLabelText('Open navigation menu');
      expect(hamburgerButton).toBeInTheDocument();
      expect(hamburgerButton).toHaveAttribute('aria-expanded', 'false');
      expect(hamburgerButton).toHaveAttribute('aria-controls', 'mobile-menu');
    });

    it('toggles mobile menu when hamburger is clicked', () => {
      render(<Navigation {...defaultProps} />);
      
      const hamburgerButton = screen.getByLabelText('Open navigation menu');
      
      // Initially closed
      expect(hamburgerButton).toHaveAttribute('aria-expanded', 'false');
      
      // Click to open
      fireEvent.click(hamburgerButton);
      expect(hamburgerButton).toHaveAttribute('aria-expanded', 'true');
      
      // Menu items should be visible
      expect(screen.getAllByText('Home')).toHaveLength(1);
      
      // Click to close
      fireEvent.click(hamburgerButton);
      expect(hamburgerButton).toHaveAttribute('aria-expanded', 'false');
    });

    it('displays menu items vertically when mobile menu is open', () => {
      render(<Navigation {...defaultProps} />);
      
      const hamburgerButton = screen.getByLabelText('Open navigation menu');
      fireEvent.click(hamburgerButton);
      
      // All menu items should be visible
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('About')).toBeInTheDocument();
      expect(screen.getByText('Contact')).toBeInTheDocument();
    });

    it('applies animation classes to mobile menu', () => {
      const { container } = render(<Navigation {...defaultProps} />);
      
      const mobileMenu = container.querySelector('#mobile-menu');
      expect(mobileMenu).toBeInTheDocument();
      
      // Initially closed - should have closed classes
      expect(mobileMenu).toHaveClass('mobile-menu-closed');
      expect(mobileMenu).toHaveClass('max-h-0');
      expect(mobileMenu).toHaveClass('opacity-0');
      
      // Open menu
      const hamburgerButton = screen.getByLabelText('Open navigation menu');
      fireEvent.click(hamburgerButton);
      
      // Should have open classes
      expect(mobileMenu).toHaveClass('mobile-menu-open');
      expect(mobileMenu).toHaveClass('max-h-screen');
      expect(mobileMenu).toHaveClass('opacity-100');
    });

    it('closes mobile menu with Escape key', () => {
      render(<Navigation {...defaultProps} />);
      
      const hamburgerButton = screen.getByLabelText('Open navigation menu');
      
      // Open menu
      fireEvent.click(hamburgerButton);
      expect(hamburgerButton).toHaveAttribute('aria-expanded', 'true');
      
      // Press Escape
      fireEvent.keyDown(hamburgerButton, { key: 'Escape' });
      expect(hamburgerButton).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('Responsive Behavior', () => {
    it('adjusts layout when viewport is resized', async () => {
      // Start with desktop
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1024,
      });

      render(<Navigation {...defaultProps} />);
      
      // Should not show hamburger in desktop
      expect(screen.queryByLabelText('Toggle mobile menu')).not.toBeInTheDocument();
      
      // Resize to mobile
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 375,
      });
      
      // Trigger resize event
      fireEvent(window, new Event('resize'));
      
      // Wait for debounced resize handler to complete (150ms debounce + buffer)
      await waitFor(() => {
        expect(screen.getByLabelText('Open navigation menu')).toBeInTheDocument();
      }, { timeout: 300 });
    });

    it('adjusts layout on orientation change', async () => {
      // Start with mobile portrait
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 375,
      });

      render(<Navigation {...defaultProps} />);
      
      // Should show hamburger in mobile
      expect(screen.getByLabelText('Open navigation menu')).toBeInTheDocument();
      
      // Change to landscape (wider viewport)
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 812,
      });
      
      // Trigger orientation change event
      fireEvent(window, new Event('orientationchange'));
      
      // Wait for orientation change handler to complete (100ms delay + buffer)
      // Requirement 10.1: Should respond within 300ms
      await waitFor(() => {
        expect(screen.queryByLabelText('Toggle mobile menu')).not.toBeInTheDocument();
      }, { timeout: 300 });
    });
  });
});
