import { memo, useMemo } from 'react';
import { MenuItem } from './MenuItem';
import type { MenuItemData } from '../utils/types';

export interface DropdownProps {
  items: MenuItemData[];
  isOpen: boolean;
  level: number;
  isMobile: boolean;
}

/**
 * Dropdown component for rendering child menu items with support for nested dropdowns.
 * 
 * Features:
 * - Recursive rendering of nested children up to 3 levels deep
 * - Proper positioning based on nesting level
 * - CSS transitions for smooth open/close animations
 * - Mobile and desktop layout support
 * - Optimized with React.memo to prevent unnecessary re-renders
 * 
 * Requirements: 2.4, 2.5, 8.4
 */
const DropdownComponent: React.FC<DropdownProps> = ({ 
  items, 
  isOpen, 
  level, 
  isMobile
}) => {
  // Don't render if we've exceeded max nesting depth (3 levels)
  // Requirement 2.5: Support up to 3 levels of nesting
  if (level > 3) {
    return null;
  }

  /**
   * Calculate positioning based on nesting level
   * - Level 1: Position below parent (top-level dropdown)
   * - Level 2+: Position to the right of parent (nested dropdown)
   * 
   * Requirement 2.4: Calculate and apply proper positioning
   * Memoized to avoid recalculation on every render
   */
  const positionClasses = useMemo((): string => {
    if (isMobile) {
      // Mobile: inline expansion, no absolute positioning needed
      return 'relative mt-2 ml-4';
    }

    if (level === 1) {
      // First level: dropdown below parent with no gap
      return 'absolute left-0 top-full';
    } else {
      // Nested levels: dropdown to the right of parent
      return 'absolute left-full top-0';
    }
  }, [isMobile, level]);

  /**
   * Recursively render nested items
   * Each child MenuItem can itself contain a Dropdown if it has children
   * 
   * Requirement 8.4: Recursively render nested menu structures
   * Memoized to avoid recreating the array on every render
   */
  const nestedItems = useMemo(() => {
    return items.map((item, index) => (
      <li key={`${item.label}-${index}`} role="none">
        <MenuItem 
          item={item} 
          level={level + 1} 
          isMobile={isMobile}
          isInDropdown={true}
        />
      </li>
    ));
  }, [items, level, isMobile]);
  
  /**
   * Build CSS classes for dropdown transitions
   * Requirements 3.1, 3.2, 3.4: Opacity and transform transitions with consistent properties
   * Requirements 7.3, 7.4: Bootstrap and Tailwind styling
   * Memoized to avoid recalculating classes on every render
   */
  const dropdownClasses = useMemo((): string => {
    // Bootstrap and Tailwind base classes - Requirements 7.3, 7.4
    const baseClasses = 'bg-white border border-gray-200 rounded shadow-lg';
    
    // Tailwind spacing and sizing - Requirement 7.3
    const spacingClasses = 'py-2 px-0';
    const sizingClasses = 'min-w-[280px]';
    
    // Determine transition type based on mobile/nested state
    let transitionClasses = 'dropdown';
    if (isMobile) {
      transitionClasses = 'dropdown dropdown-mobile';
    } else if (level > 1) {
      transitionClasses = 'dropdown dropdown-nested';
    }
    
    // Add visibility state classes
    const visibilityClasses = isOpen ? 'dropdown-visible' : 'dropdown-hidden';
    
    // Add z-index layering based on level - Requirement 3.3, 3.5
    const zIndexClass = `dropdown-level-${Math.min(level, 3)}`;
    
    return `${positionClasses} ${baseClasses} ${spacingClasses} ${sizingClasses} ${transitionClasses} ${visibilityClasses} ${zIndexClass}`;
  }, [positionClasses, isMobile, level, isOpen]);

  return (
    <div 
      className={dropdownClasses}
      role="menu"
      aria-hidden={!isOpen}
      aria-label={`Submenu level ${level}`}
    >
      {/* Bootstrap list group styling - Requirement 7.4 */}
      {/* Tailwind spacing - Requirement 7.3 */}
      <ul className="list-unstyled mb-0" role="none">
        {nestedItems}
      </ul>
    </div>
  );
};

// Memoize the component to prevent unnecessary re-renders
// Only re-render when props actually change
export const Dropdown = memo(DropdownComponent);

export default Dropdown;
