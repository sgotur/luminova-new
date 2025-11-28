/**
 * Menu data loading utilities with error handling
 */

import type { MenuData, MenuItemData } from './types';

/**
 * Default fallback menu structure used when JSON loading fails
 */
export const getDefaultMenu = (): MenuData => {
  return {
    menu: [
      {
        label: 'Home',
        url: '/',
      },
      {
        label: 'About',
        url: '/about',
      },
      {
        label: 'Contact',
        url: '/contact',
      },
    ],
  };
};

/**
 * Validates that a menu item has the required structure
 */
const isValidMenuItem = (item: any): item is MenuItemData => {
  if (!item || typeof item !== 'object') {
    return false;
  }

  // Label is required and must be a string
  if (typeof item.label !== 'string' || item.label.trim() === '') {
    return false;
  }

  // URL is optional but must be a string if present
  if (item.url !== undefined && typeof item.url !== 'string') {
    return false;
  }

  // Icon is optional but must be a string if present
  if (item.icon !== undefined && typeof item.icon !== 'string') {
    return false;
  }

  // Children is optional but must be an array if present
  if (item.children !== undefined) {
    if (!Array.isArray(item.children)) {
      return false;
    }
    // Recursively validate children
    return item.children.every(isValidMenuItem);
  }

  return true;
};

/**
 * Validates the menu data structure
 */
const isValidMenuData = (data: any): data is MenuData => {
  if (!data || typeof data !== 'object') {
    return false;
  }

  if (!Array.isArray(data.menu)) {
    return false;
  }

  return data.menu.every(isValidMenuItem);
};

/**
 * Loads menu data from the menu-item.json file
 * 
 * @returns Promise resolving to MenuData
 * @throws Error if loading or parsing fails
 */
export const loadMenuData = async (): Promise<MenuData> => {
  try {
    const response = await fetch('/menu-item.json');
    
    if (!response.ok) {
      throw new Error(`Failed to load menu data: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    // Validate the structure
    if (!isValidMenuData(data)) {
      throw new Error('Invalid menu data structure: menu must be an array of valid menu items');
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Menu loading error:', error.message);
      throw error;
    }
    throw new Error('Unknown error occurred while loading menu data');
  }
};

/**
 * Loads menu data with automatic fallback to default menu on error
 * 
 * @returns Promise resolving to MenuData (either loaded or default)
 */
export const loadMenuDataWithFallback = async (): Promise<MenuData> => {
  try {
    return await loadMenuData();
  } catch (error) {
    console.warn('Failed to load menu data, using default menu:', error);
    return getDefaultMenu();
  }
};
