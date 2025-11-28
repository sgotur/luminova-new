/**
 * SEO Helper utilities for navigation menu
 * Requirements: 9.2, 9.3
 */

import type { MenuItemData } from './types';

/**
 * Generates a URL-friendly slug from a menu item label
 * Converts spaces to hyphens and removes special characters
 * 
 * @param label - The menu item label
 * @returns URL-friendly slug
 */
export const generateSlug = (label: string): string => {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ') // Replace special characters with spaces
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
};

/**
 * Generates a full URL path for a menu item based on its hierarchy
 * 
 * @param item - The menu item
 * @param parentPath - The parent path (optional)
 * @returns Full URL path
 */
export const generateMenuItemUrl = (item: MenuItemData, parentPath: string = ''): string => {
  const slug = generateSlug(item.label);
  return parentPath ? `${parentPath}/${slug}` : `/${slug}`;
};

/**
 * Recursively adds URLs to menu items that don't have them
 * This ensures all menu items are crawlable by search engines
 * 
 * @param items - Array of menu items
 * @param parentPath - The parent path (optional)
 * @returns Menu items with URLs added
 */
export const addUrlsToMenuItems = (
  items: MenuItemData[],
  parentPath: string = ''
): MenuItemData[] => {
  return items.map(item => {
    const url = item.url || generateMenuItemUrl(item, parentPath);
    
    // If item has children, recursively add URLs to them
    if (item.children && item.children.length > 0) {
      return {
        ...item,
        url,
        children: addUrlsToMenuItems(item.children, url)
      };
    }
    
    return {
      ...item,
      url
    };
  });
};

/**
 * Validates heading hierarchy in a document
 * Ensures proper h1 -> h2 -> h3 order
 * 
 * @param container - The container element to check
 * @returns Object with validation result and any errors
 */
export const validateHeadingHierarchy = (container: HTMLElement): {
  isValid: boolean;
  errors: string[];
} => {
  const headings = Array.from(container.querySelectorAll('h1, h2, h3, h4, h5, h6'));
  const errors: string[] = [];
  let previousLevel = 0;

  headings.forEach((heading, index) => {
    const level = parseInt(heading.tagName.substring(1));
    
    // First heading should be h1
    if (index === 0 && level !== 1) {
      errors.push(`First heading should be h1, but found ${heading.tagName}`);
    }
    
    // Check for skipped levels (e.g., h1 -> h3)
    if (level > previousLevel + 1) {
      errors.push(
        `Heading level skipped: ${heading.tagName} follows h${previousLevel} (should not skip levels)`
      );
    }
    
    previousLevel = level;
  });

  return {
    isValid: errors.length === 0,
    errors
  };
};
