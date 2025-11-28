/**
 * Tests for menu loading utilities
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { loadMenuData, loadMenuDataWithFallback, getDefaultMenu } from './menuLoader';
import { MenuData } from './types';

describe('menuLoader', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();
  });

  describe('getDefaultMenu', () => {
    it('should return a valid default menu structure', () => {
      const defaultMenu = getDefaultMenu();
      
      expect(defaultMenu).toBeDefined();
      expect(defaultMenu.menu).toBeInstanceOf(Array);
      expect(defaultMenu.menu.length).toBeGreaterThan(0);
      
      // Verify each item has a label
      defaultMenu.menu.forEach(item => {
        expect(item.label).toBeDefined();
        expect(typeof item.label).toBe('string');
        expect(item.label.length).toBeGreaterThan(0);
      });
    });
  });

  describe('loadMenuData', () => {
    it('should load and parse valid menu data', async () => {
      const mockMenuData: MenuData = {
        menu: [
          { label: 'Test Item 1' },
          { label: 'Test Item 2', children: [{ label: 'Child Item' }] },
        ],
      };

      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => mockMenuData,
      });

      const result = await loadMenuData();
      
      expect(result).toEqual(mockMenuData);
      expect(fetch).toHaveBeenCalledWith('/menu-item.json');
    });

    it('should throw error on network failure', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: false,
        status: 404,
        statusText: 'Not Found',
      });

      await expect(loadMenuData()).rejects.toThrow('Failed to load menu data');
    });

    it('should throw error on invalid JSON structure - missing menu array', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ invalid: 'structure' }),
      });

      await expect(loadMenuData()).rejects.toThrow('Invalid menu data structure');
    });

    it('should throw error on invalid menu item - missing label', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ menu: [{ url: '/test' }] }),
      });

      await expect(loadMenuData()).rejects.toThrow('Invalid menu data structure');
    });

    it('should throw error on invalid menu item - empty label', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ menu: [{ label: '   ' }] }),
      });

      await expect(loadMenuData()).rejects.toThrow('Invalid menu data structure');
    });
  });

  describe('loadMenuDataWithFallback', () => {
    it('should return loaded data on success', async () => {
      const mockMenuData: MenuData = {
        menu: [{ label: 'Test Item' }],
      };

      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => mockMenuData,
      });

      const result = await loadMenuDataWithFallback();
      
      expect(result).toEqual(mockMenuData);
    });

    it('should return default menu on fetch failure', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: false,
        status: 500,
        statusText: 'Internal Server Error',
      });

      const result = await loadMenuDataWithFallback();
      const defaultMenu = getDefaultMenu();
      
      expect(result).toEqual(defaultMenu);
    });

    it('should return default menu on invalid JSON', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ invalid: 'data' }),
      });

      const result = await loadMenuDataWithFallback();
      const defaultMenu = getDefaultMenu();
      
      expect(result).toEqual(defaultMenu);
    });
  });
});
