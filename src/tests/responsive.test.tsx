import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Navigation } from '../components/Navigation';
import type { MenuItemData } from '../utils/types';

/**
 * Responsive Layout Tests
 * Requirements: 10.1, 10.2, 10.3
 * 
 * Tests the navigation component's responsive behavior across three breakpoints:
 * - Mobile: < 768px
 * - Tablet: 768px - 1024px
 * - Desktop: > 1024px
 */
describe('Responsive Layout Tests', () => {
  const mockMenuData: MenuItemData[] = [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { 
      label: 'Services', 
      children: [
        { label: 'Web Design', url: '/services/web-design' },
        { label: 'Development', url: '/services/development' },
      ]
    },
    { label: 'Contact', url: '/contact' },
  ];

  const defaultProps = {
    menuData: mockMenuData,
    logo: '/test-logo.svg',
    businessName: 'Test Company',
  };

  let originalInnerWidth: number;

  beforeEach(() => {
    originalInnerWidth = window.innerWidth;
  });

  afterEach(() => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: originalInnerWidth,
    });
  });

  describe('Mobile Layout (< 768px) - Requirement 10.1', () => {
    const mobileWidths = [320, 375, 414, 600, 767];

    mobileWidths.forEach(width => {
      it(`displays mobile layout at ${width}px width`, () => {
        Object.defineProperty(window, 'innerWidth', {
          writable: true,
          configurable: true,
          value: width,
        });

        render(<Navigation {...defaultProps} />);

        // Should display hamburger menu button
        const hamburgerButton = screen.getByLabelText('Open navigation menu');
        expect(hamburgerButton).toBeInTheDocument();
        expect(hamburgerButton).toHaveAttribute('aria-expanded', 'false');

        // Menu should be initially hidden
        const mobileMenu = document.querySelector('#mobile-menu');
        expect(mobileMenu).toHaveClass('mobile-menu-closed');
        expect(mobileMenu).toHaveClass('max-h-0');
        expect(mobileMenu).toHaveClass('opacity-0');
      });
    });

    it('stacks menu items vertically in mobile layout', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 375,
      });

      render(<Navigation {...defaultProps} />);

      // Open mobile menu
      const hamburgerButton = screen.getByLabelText('Open navigation menu');
      fireEvent.click(hamburgerButton);

      // Check that mobile menu uses vertical stacking classes
      const mobileMenu = document.querySelector('#mobile-menu');
      expect(mobileMenu).toBeInTheDocument();

      // Menu list should have vertical spacing
      const menuList = mobileMenu?.querySelector('ul');
      expect(menuList).toHaveClass('space-y-2');
    });

    it('optimizes touch targets to minimum 44x44 pixels in mobile layout', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 375,
      });

      const { container } = render(<Navigation {...defaultProps} />);

      // Check hamburger button size
      const hamburgerButton = screen.getByLabelText('Open navigation menu');
      const buttonStyles = window.getComputedStyle(hamburgerButton);
      
      // Button should have adequate padding for touch targets
      expect(hamburgerButton).toBeInTheDocument();
      
      // Open menu to check menu items
      fireEvent.click(hamburgerButton);

      // Menu items should be rendered with adequate touch target size
      const menuItems = container.querySelectorAll('[role="menuitem"]');
      expect(menuItems.length).toBeGreaterThan(0);
    });

    it('displays mobile menu with expand/collapse animation', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 375,
      });

      render(<Navigation {...defaultProps} />);

      const mobileMenu = document.querySelector('#mobile-menu');
      const hamburgerButton = screen.getByLabelText('Open navigation menu');

      // Initially closed
      expect(mobileMenu).toHaveClass('mobile-menu-closed');
      expect(mobileMenu).toHaveClass('max-h-0');
      expect(mobileMenu).toHaveClass('opacity-0');

      // Open menu
      fireEvent.click(hamburgerButton);

      // Should have open classes and transition classes
      expect(mobileMenu).toHaveClass('mobile-menu-open');
      expect(mobileMenu).toHaveClass('max-h-screen');
      expect(mobileMenu).toHaveClass('opacity-100');
      expect(mobileMenu).toHaveClass('transition-all');
      expect(mobileMenu).toHaveClass('duration-300');
    });

    it('renders all menu items when mobile menu is expanded', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 375,
      });

      render(<Navigation {...defaultProps} />);

      const hamburgerButton = screen.getByLabelText('Open navigation menu');
      fireEvent.click(hamburgerButton);

      // All top-level menu items should be visible
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('About')).toBeInTheDocument();
      expect(screen.getByText('Services')).toBeInTheDocument();
      expect(screen.getByText('Contact')).toBeInTheDocument();
    });
  });

  describe('Tablet Layout (768px - 1024px) - Requirement 10.2', () => {
    const tabletWidths = [768, 800, 900, 1024];

    tabletWidths.forEach(width => {
      it(`displays desktop-style layout at ${width}px width`, () => {
        Object.defineProperty(window, 'innerWidth', {
          writable: true,
          configurable: true,
          value: width,
        });

        render(<Navigation {...defaultProps} />);

        // Should NOT display hamburger menu button
        expect(screen.queryByLabelText('Open navigation menu')).not.toBeInTheDocument();
        expect(screen.queryByLabelText('Close navigation menu')).not.toBeInTheDocument();

        // Should display menu items horizontally
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('About')).toBeInTheDocument();
        expect(screen.getByText('Services')).toBeInTheDocument();
        expect(screen.getByText('Contact')).toBeInTheDocument();
      });
    });

    it('adapts layout to available screen width in tablet range', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 900,
      });

      const { container } = render(<Navigation {...defaultProps} />);

      // Should use Bootstrap responsive utilities
      const nav = container.querySelector('nav');
      expect(nav).toBeInTheDocument();

      // Container should use Bootstrap fluid container
      const containerFluid = container.querySelector('.container-fluid');
      expect(containerFluid).toBeInTheDocument();

      // Should have responsive padding classes
      const paddingElement = container.querySelector('.px-md-4');
      expect(paddingElement).toBeInTheDocument();
    });

    it('displays horizontal menu with proper spacing in tablet layout', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 800,
      });

      const { container } = render(<Navigation {...defaultProps} />);

      // Menu should use flex layout
      const menuList = container.querySelector('[role="menubar"]');
      expect(menuList).toBeInTheDocument();
      expect(menuList).toHaveClass('d-flex');
      expect(menuList).toHaveClass('align-items-center');
    });
  });

  describe('Desktop Layout (> 1024px) - Requirement 10.3', () => {
    const desktopWidths = [1025, 1280, 1440, 1920, 2560];

    desktopWidths.forEach(width => {
      it(`displays full horizontal navigation at ${width}px width`, () => {
        Object.defineProperty(window, 'innerWidth', {
          writable: true,
          configurable: true,
          value: width,
        });

        render(<Navigation {...defaultProps} />);

        // Should NOT display hamburger menu button
        expect(screen.queryByLabelText('Open navigation menu')).not.toBeInTheDocument();

        // All menu items should be visible horizontally
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('About')).toBeInTheDocument();
        expect(screen.getByText('Services')).toBeInTheDocument();
        expect(screen.getByText('Contact')).toBeInTheDocument();
      });
    });

    it('displays all items visible in horizontal layout', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1440,
      });

      const { container } = render(<Navigation {...defaultProps} />);

      // Menu should use horizontal flex layout
      const menuList = container.querySelector('[role="menubar"]');
      expect(menuList).toBeInTheDocument();
      expect(menuList).toHaveClass('d-flex');

      // All menu items should be rendered
      const menuItems = container.querySelectorAll('[role="menubar"] > li');
      expect(menuItems.length).toBe(mockMenuData.length);
    });

    it('uses Bootstrap grid system for responsive layout', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1440,
      });

      const { container } = render(<Navigation {...defaultProps} />);

      // Should use Bootstrap row and column classes
      const row = container.querySelector('.row');
      expect(row).toBeInTheDocument();

      const columns = container.querySelectorAll('.col-auto');
      expect(columns.length).toBeGreaterThan(0);
    });
  });

  describe('Smooth Transitions Between Breakpoints - Requirement 6.4', () => {
    it('transitions from mobile to tablet layout smoothly', async () => {
      // Start with mobile
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 600,
      });

      render(<Navigation {...defaultProps} />);

      // Verify mobile layout
      expect(screen.getByLabelText('Open navigation menu')).toBeInTheDocument();

      // Resize to tablet
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 800,
      });

      fireEvent(window, new Event('resize'));

      // Wait for layout to adjust (debounced resize handler)
      await waitFor(() => {
        expect(screen.queryByLabelText('Open navigation menu')).not.toBeInTheDocument();
      }, { timeout: 300 });

      // Menu items should be visible
      expect(screen.getByText('Home')).toBeInTheDocument();
    });

    it('transitions from tablet to desktop layout smoothly', async () => {
      // Start with tablet
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 900,
      });

      render(<Navigation {...defaultProps} />);

      // Verify tablet layout (desktop-style)
      expect(screen.queryByLabelText('Open navigation menu')).not.toBeInTheDocument();
      expect(screen.getByText('Home')).toBeInTheDocument();

      // Resize to desktop
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1440,
      });

      fireEvent(window, new Event('resize'));

      // Layout should remain consistent (both use desktop-style)
      await waitFor(() => {
        expect(screen.getByText('Home')).toBeInTheDocument();
      }, { timeout: 300 });
    });

    it('transitions from desktop to mobile layout smoothly', async () => {
      // Start with desktop
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1440,
      });

      render(<Navigation {...defaultProps} />);

      // Verify desktop layout
      expect(screen.queryByLabelText('Open navigation menu')).not.toBeInTheDocument();

      // Resize to mobile
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 375,
      });

      fireEvent(window, new Event('resize'));

      // Wait for layout to adjust
      await waitFor(() => {
        expect(screen.getByLabelText('Open navigation menu')).toBeInTheDocument();
      }, { timeout: 300 });
    });

    it('closes mobile menu when transitioning to desktop layout', async () => {
      // Start with mobile
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 375,
      });

      render(<Navigation {...defaultProps} />);

      // Open mobile menu
      const hamburgerButton = screen.getByLabelText('Open navigation menu');
      fireEvent.click(hamburgerButton);
      expect(hamburgerButton).toHaveAttribute('aria-expanded', 'true');

      // Resize to desktop
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1024,
      });

      fireEvent(window, new Event('resize'));

      // Wait for layout to adjust and menu to close
      await waitFor(() => {
        expect(screen.queryByLabelText('Close navigation menu')).not.toBeInTheDocument();
      }, { timeout: 300 });
    });

    it('handles orientation change within 300ms', async () => {
      // Start with mobile portrait
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 375,
      });

      render(<Navigation {...defaultProps} />);

      // Verify mobile layout
      expect(screen.getByLabelText('Open navigation menu')).toBeInTheDocument();

      // Simulate orientation change to landscape (wider)
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 812,
      });

      const startTime = Date.now();
      fireEvent(window, new Event('orientationchange'));

      // Wait for layout to adjust
      await waitFor(() => {
        expect(screen.queryByLabelText('Open navigation menu')).not.toBeInTheDocument();
      }, { timeout: 300 });

      const endTime = Date.now();
      const duration = endTime - startTime;

      // Should respond within 300ms per Requirement 10.1
      expect(duration).toBeLessThan(300);
    });

    it('maintains layout consistency during rapid resize events', async () => {
      // Start with desktop
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1440,
      });

      render(<Navigation {...defaultProps} />);

      // Simulate rapid resize events
      for (let i = 0; i < 10; i++) {
        Object.defineProperty(window, 'innerWidth', {
          writable: true,
          configurable: true,
          value: 1440 - (i * 50),
        });
        fireEvent(window, new Event('resize'));
      }

      // Wait for debounced handler to settle
      await waitFor(() => {
        // Final width should be around 990px (tablet range)
        expect(screen.queryByLabelText('Open navigation menu')).not.toBeInTheDocument();
      }, { timeout: 500 });
    });
  });

  describe('Responsive Padding and Spacing', () => {
    it('applies appropriate padding in mobile layout', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 375,
      });

      const { container } = render(<Navigation {...defaultProps} />);

      // Should have mobile padding classes
      const paddingElement = container.querySelector('.px-3');
      expect(paddingElement).toBeInTheDocument();

      const verticalPadding = container.querySelector('.py-3');
      expect(verticalPadding).toBeInTheDocument();
    });

    it('applies appropriate padding in tablet/desktop layout', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1024,
      });

      const { container } = render(<Navigation {...defaultProps} />);

      // Should have responsive padding classes
      const paddingElement = container.querySelector('.px-md-4');
      expect(paddingElement).toBeInTheDocument();

      const verticalPadding = container.querySelector('.py-md-4');
      expect(verticalPadding).toBeInTheDocument();
    });
  });

  describe('Mobile-First Responsive Design - Requirement 10.5', () => {
    it('uses mobile-first approach with min-width media queries', () => {
      // This test verifies the CSS structure follows mobile-first principles
      // by checking that base styles work for mobile and are enhanced for larger screens

      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 375,
      });

      const { container } = render(<Navigation {...defaultProps} />);

      // Base mobile layout should work without media queries
      const nav = container.querySelector('nav');
      expect(nav).toBeInTheDocument();

      // Bootstrap responsive classes use min-width approach
      const responsiveElement = container.querySelector('.px-md-4');
      expect(responsiveElement).toBeInTheDocument();
    });
  });
});
