import { describe, it, expect } from 'vitest';
import { generateSlug, generateMenuItemUrl, addUrlsToMenuItems, validateHeadingHierarchy } from './seoHelpers';
import type { MenuItemData } from './types';

describe('SEO Helpers', () => {
  describe('generateSlug', () => {
    it('should convert label to URL-friendly slug', () => {
      expect(generateSlug('GenAI Development')).toBe('genai-development');
      expect(generateSlug('Data & AI')).toBe('data-ai');
      expect(generateSlug('Contact US')).toBe('contact-us');
    });

    it('should handle special characters', () => {
      expect(generateSlug('Low-Code/No-Code')).toBe('low-code-no-code');
      expect(generateSlug('AWS Migration & Modernization')).toBe('aws-migration-modernization');
    });

    it('should handle multiple spaces', () => {
      expect(generateSlug('Multiple   Spaces')).toBe('multiple-spaces');
    });
  });

  describe('generateMenuItemUrl', () => {
    it('should generate URL from label', () => {
      const item: MenuItemData = { label: 'Solutions' };
      expect(generateMenuItemUrl(item)).toBe('/solutions');
    });

    it('should append to parent path', () => {
      const item: MenuItemData = { label: 'GenAI Development' };
      expect(generateMenuItemUrl(item, '/solutions')).toBe('/solutions/genai-development');
    });
  });

  describe('addUrlsToMenuItems', () => {
    it('should add URLs to items without URLs', () => {
      const items: MenuItemData[] = [
        { label: 'About' },
        { label: 'Contact US' }
      ];

      const result = addUrlsToMenuItems(items);

      expect(result[0].url).toBe('/about');
      expect(result[1].url).toBe('/contact-us');
    });

    it('should preserve existing URLs', () => {
      const items: MenuItemData[] = [
        { label: 'About', url: '/custom-about' }
      ];

      const result = addUrlsToMenuItems(items);

      expect(result[0].url).toBe('/custom-about');
    });

    it('should recursively add URLs to nested items', () => {
      const items: MenuItemData[] = [
        {
          label: 'Solutions',
          children: [
            {
              label: 'GenAI Development',
              children: [
                { label: 'GenAI Solutions' }
              ]
            }
          ]
        }
      ];

      const result = addUrlsToMenuItems(items);

      expect(result[0].url).toBe('/solutions');
      expect(result[0].children![0].url).toBe('/solutions/genai-development');
      expect(result[0].children![0].children![0].url).toBe('/solutions/genai-development/genai-solutions');
    });
  });

  describe('validateHeadingHierarchy', () => {
    it('should validate correct heading hierarchy', () => {
      const container = document.createElement('div');
      container.innerHTML = `
        <h1>Main Title</h1>
        <h2>Section</h2>
        <h3>Subsection</h3>
      `;

      const result = validateHeadingHierarchy(container);

      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should detect skipped heading levels', () => {
      const container = document.createElement('div');
      container.innerHTML = `
        <h1>Main Title</h1>
        <h3>Skipped h2</h3>
      `;

      const result = validateHeadingHierarchy(container);

      expect(result.isValid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
      expect(result.errors[0]).toContain('skipped');
    });

    it('should detect missing h1 as first heading', () => {
      const container = document.createElement('div');
      container.innerHTML = `
        <h2>Should be h1</h2>
        <h3>Subsection</h3>
      `;

      const result = validateHeadingHierarchy(container);

      expect(result.isValid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
      expect(result.errors[0]).toContain('First heading should be h1');
    });
  });
});
