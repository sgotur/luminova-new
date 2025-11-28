import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('Dropdown Component - CSS Transitions', () => {
  it('should apply dropdown-hidden class when closed', () => {
    const items = [{ label: 'Item 1' }];
    const { container } = render(
      <Dropdown items={items} isOpen={false} level={1} isMobile={false} />
    );
    
    const dropdown = container.querySelector('[role="menu"]');
    expect(dropdown).toHaveClass('dropdown-hidden');
    expect(dropdown).toHaveClass('dropdown');
  });

  it('should apply dropdown-visible class when open', () => {
    const items = [{ label: 'Item 1' }];
    const { container } = render(
      <Dropdown items={items} isOpen={true} level={1} isMobile={false} />
    );
    
    const dropdown = container.querySelector('[role="menu"]');
    expect(dropdown).toHaveClass('dropdown-visible');
    expect(dropdown).toHaveClass('dropdown');
  });

  it('should apply dropdown-nested class for nested dropdowns', () => {
    const items = [{ label: 'Item 1' }];
    const { container } = render(
      <Dropdown items={items} isOpen={true} level={2} isMobile={false} />
    );
    
    const dropdown = container.querySelector('[role="menu"]');
    expect(dropdown).toHaveClass('dropdown-nested');
  });

  it('should apply dropdown-mobile class for mobile', () => {
    const items = [{ label: 'Item 1' }];
    const { container } = render(
      <Dropdown items={items} isOpen={true} level={1} isMobile={true} />
    );
    
    const dropdown = container.querySelector('[role="menu"]');
    expect(dropdown).toHaveClass('dropdown-mobile');
  });

  it('should apply correct z-index class based on level', () => {
    const items = [{ label: 'Item 1' }];
    
    const { container: container1 } = render(
      <Dropdown items={items} isOpen={true} level={1} isMobile={false} />
    );
    expect(container1.querySelector('[role="menu"]')).toHaveClass('dropdown-level-1');

    const { container: container2 } = render(
      <Dropdown items={items} isOpen={true} level={2} isMobile={false} />
    );
    expect(container2.querySelector('[role="menu"]')).toHaveClass('dropdown-level-2');

    const { container: container3 } = render(
      <Dropdown items={items} isOpen={true} level={3} isMobile={false} />
    );
    expect(container3.querySelector('[role="menu"]')).toHaveClass('dropdown-level-3');
  });

  it('should have aria-hidden=true when closed', () => {
    const items = [{ label: 'Item 1' }];
    const { container } = render(
      <Dropdown items={items} isOpen={false} level={1} isMobile={false} />
    );
    
    const dropdown = container.querySelector('[role="menu"]');
    expect(dropdown).toHaveAttribute('aria-hidden', 'true');
  });

  it('should have aria-hidden=false when open', () => {
    const items = [{ label: 'Item 1' }];
    const { container } = render(
      <Dropdown items={items} isOpen={true} level={1} isMobile={false} />
    );
    
    const dropdown = container.querySelector('[role="menu"]');
    expect(dropdown).toHaveAttribute('aria-hidden', 'false');
  });

  it('should apply consistent transition classes for open and close states', () => {
    const items = [{ label: 'Item 1' }];
    
    // Render closed
    const { container: closedContainer } = render(
      <Dropdown items={items} isOpen={false} level={1} isMobile={false} />
    );
    const closedDropdown = closedContainer.querySelector('[role="menu"]');
    expect(closedDropdown).toHaveClass('dropdown');
    
    // Render open
    const { container: openContainer } = render(
      <Dropdown items={items} isOpen={true} level={1} isMobile={false} />
    );
    const openDropdown = openContainer.querySelector('[role="menu"]');
    expect(openDropdown).toHaveClass('dropdown');
    
    // Both should have the base 'dropdown' class for consistent transitions
    expect(closedDropdown?.className).toContain('dropdown');
    expect(openDropdown?.className).toContain('dropdown');
  });
});
