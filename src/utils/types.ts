/**
 * Type definitions for the React Navigation Menu application
 */

export interface MenuItemData {
  label: string;
  children?: MenuItemData[];
  url?: string;
  icon?: string;
}

export interface MenuData {
  menu: MenuItemData[];
}

export interface NavigationState {
  isMobileMenuOpen: boolean;
  activeDropdowns: Set<string>;
  focusedItemId: string | null;
}

export interface DropdownState {
  isOpen: boolean;
  isAnimating: boolean;
  position: {
    top: number;
    left: number;
  };
}
