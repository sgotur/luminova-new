import { useState, useCallback, memo } from 'react';
import { Dropdown } from './Dropdown';
import type { MenuItemData } from '../utils/types';

export interface MenuItemProps {
  item: MenuItemData;
  level?: number;
  isMobile: boolean;
  isInDropdown?: boolean;
}

/**
 * MenuItem component that renders individual menu items with dropdown support.
 * 
 * - Detects if item has children and renders as dropdown trigger
 * - Renders as anchor tag for navigable items
 * - Manages dropdown open/close state
 * - Handles hover interactions for desktop
 * - Handles click interactions for mobile
 * - Optimized with React.memo to prevent unnecessary re-renders
 * 
 * Requirements: 2.1, 8.3, 9.2
 */
const MenuItemComponent: React.FC<MenuItemProps> = ({ 
  item, 
  level = 1, 
  isMobile,
  isInDropdown = false
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Detect if item has children - Requirement 2.1
  const hasChildren = item.children && item.children.length > 0;
  
  // Determine the appropriate CSS class based on context
  const itemClass = isInDropdown ? 'dropdown-item' : 'menu-item';

  // Toggle dropdown for mobile click - Requirement 2.3
  // Wrapped in useCallback to prevent recreation on every render
  const toggleDropdown = useCallback(() => {
    if (isMobile) {
      setIsOpen(prev => !prev);
    }
  }, [isMobile]);

  // Handle mouse enter for desktop hover - Requirement 2.2
  // Wrapped in useCallback to prevent recreation on every render
  const handleMouseEnter = useCallback(() => {
    if (!isMobile) {
      setIsOpen(true);
    }
  }, [isMobile]);

  // Handle mouse leave for desktop hover - Requirement 2.2
  // Wrapped in useCallback to prevent recreation on every render
  const handleMouseLeave = useCallback(() => {
    if (!isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  // Handle keyboard navigation - Requirements 5.3, 5.4
  // Wrapped in useCallback to prevent recreation on every render
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    // Enter or Space to toggle dropdown - Requirement 5.4
    if (hasChildren && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      setIsOpen(!isOpen);
      
      // If opening dropdown, focus first item after a brief delay
      if (!isOpen) {
        // Store reference to currentTarget before async operation
        const currentElement = e.currentTarget as HTMLElement;
        setTimeout(() => {
          const dropdown = currentElement.nextElementSibling;
          if (dropdown) {
            const firstFocusable = dropdown.querySelector<HTMLElement>(
              'a[role="menuitem"], button[role="menuitem"], [role="menuitem"][tabindex="0"]'
            );
            firstFocusable?.focus();
          }
        }, 50);
      }
    }
    
    // Escape to close dropdown - Requirement 5.4
    if (e.key === 'Escape' && isOpen) {
      e.preventDefault();
      setIsOpen(false);
      // Return focus to the trigger button
      (e.currentTarget as HTMLElement).focus();
    }
    
    // Arrow Down: Open dropdown and focus first item (if closed) or move to next item
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      
      if (hasChildren && !isOpen) {
        // Open dropdown and focus first item
        setIsOpen(true);
        // Store reference to currentTarget before async operation
        const currentElement = e.currentTarget as HTMLElement;
        setTimeout(() => {
          const dropdown = currentElement.nextElementSibling;
          if (dropdown) {
            const firstFocusable = dropdown.querySelector<HTMLElement>(
              'a[role="menuitem"], button[role="menuitem"], [role="menuitem"][tabindex="0"]'
            );
            firstFocusable?.focus();
          }
        }, 50);
      } else if (isInDropdown) {
        // Move to next sibling menu item
        const currentLi = (e.currentTarget as HTMLElement).closest('li');
        const nextLi = currentLi?.nextElementSibling;
        if (nextLi) {
          const nextFocusable = nextLi.querySelector<HTMLElement>(
            'a[role="menuitem"], button[role="menuitem"], [role="menuitem"][tabindex="0"]'
          );
          nextFocusable?.focus();
        }
      }
    }
    
    // Arrow Up: Move to previous item in dropdown
    if (e.key === 'ArrowUp' && isInDropdown) {
      e.preventDefault();
      const currentLi = (e.currentTarget as HTMLElement).closest('li');
      const prevLi = currentLi?.previousElementSibling;
      if (prevLi) {
        const prevFocusable = prevLi.querySelector<HTMLElement>(
          'a[role="menuitem"], button[role="menuitem"], [role="menuitem"][tabindex="0"]'
        );
        prevFocusable?.focus();
      }
    }
    
    // Arrow Right: Open nested dropdown if available
    if (e.key === 'ArrowRight' && hasChildren && isInDropdown) {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        // Store reference to currentTarget before async operation
        const currentElement = e.currentTarget as HTMLElement;
        setTimeout(() => {
          const dropdown = currentElement.nextElementSibling;
          if (dropdown) {
            const firstFocusable = dropdown.querySelector<HTMLElement>(
              'a[role="menuitem"], button[role="menuitem"], [role="menuitem"][tabindex="0"]'
            );
            firstFocusable?.focus();
          }
        }, 50);
      }
    }
    
    // Arrow Left: Close current dropdown and return to parent
    if (e.key === 'ArrowLeft' && isInDropdown) {
      e.preventDefault();
      if (isOpen) {
        setIsOpen(false);
      } else {
        // Find parent menu item and focus it
        const currentElement = e.currentTarget as HTMLElement;
        const parentDropdown = currentElement.closest('[role="menu"]');
        const parentButton = parentDropdown?.previousElementSibling as HTMLElement;
        if (parentButton && parentButton.getAttribute('role') === 'menuitem') {
          parentButton.focus();
        }
      }
    }
  }, [hasChildren, isOpen, isInDropdown]);

  // Handle touch events - Requirement 6.5
  // Wrapped in useCallback to prevent recreation on every render
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    // Prevent default to avoid triggering mouse events
    if (hasChildren) {
      e.preventDefault();
      setIsOpen(prev => !prev);
    }
  }, [hasChildren]);

  // Render as dropdown trigger if children exist - Requirement 2.1
  if (hasChildren) {
    return (
      <div
        className="position-relative dropdown-wrapper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ paddingBottom: isMobile ? '0' : '8px' }}
      >
        <button
          onClick={toggleDropdown}
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          className={`
            ${itemClass} btn btn-link text-decoration-none
            px-3 px-md-4 py-2 text-accent-teal rounded
            d-inline-flex align-items-center
            ${isOpen ? 'active' : ''}
          `}
          aria-expanded={isOpen}
          aria-haspopup="true"
          aria-label={`${item.label}, submenu ${isOpen ? 'expanded' : 'collapsed'}`}
          title={`${item.label} - Click to ${isOpen ? 'collapse' : 'expand'} submenu`}
          role="menuitem"
        >
          {/* Tailwind typography - Requirement 7.3 */}
          <span className="font-bold">{item.label}</span>
          {/* Dropdown indicator - Tailwind spacing and sizing - Requirement 7.3 */}
          <svg
            className={`ms-1 w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
            role="img"
          >
            <title>{isOpen ? 'Collapse submenu' : 'Expand submenu'}</title>
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown menu - Requirement 2.4, 2.5, 8.4 */}
        {item.children && (
          <Dropdown 
            items={item.children}
            isOpen={isOpen}
            level={level}
            isMobile={isMobile}
          />
        )}
      </div>
    );
  }

  // Render as anchor tag for navigable items - Requirement 9.2
  if (item.url) {
    // Special styling for Contact US button
    const isContactButton = item.label === 'Contact US';
    
    return (
      <a
        href={item.url}
        className={`
          ${isContactButton ? 'contact-button' : itemClass} btn ${isContactButton ? 'btn-primary' : 'btn-link'} text-decoration-none
          px-3 px-md-4 py-2 ${isContactButton ? 'text-white rounded-pill' : 'text-accent-teal rounded'}
          d-block
        `}
        style={isContactButton ? { 
          backgroundColor: '#00A8B5 !important', 
          borderColor: '#00A8B5 !important',
          color: 'white !important',
          display: 'inline-block !important'
        } : undefined}
        role="menuitem"
        aria-label={`Navigate to ${item.label}`}
        title={`Navigate to ${item.label}`}
        onKeyDown={handleKeyDown}
      >
        {/* Tailwind typography - Requirement 7.3 */}
        <span className="font-bold">{item.label}</span>
      </a>
    );
  }

  // Fallback: render as plain text - Requirement 8.3
  return (
    <span
      className={`
        ${itemClass} px-3 px-md-4 py-2 text-accent-teal
        d-block
      `}
      role="menuitem"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* Tailwind typography - Requirement 7.3 */}
      <span className="font-bold">{item.label}</span>
    </span>
  );
};

// Memoize the component to prevent unnecessary re-renders
// Only re-render when props actually change
export const MenuItem = memo(MenuItemComponent);

export default MenuItem;
