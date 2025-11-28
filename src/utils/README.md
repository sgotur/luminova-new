# Menu Loader Utilities

This module provides utilities for loading and validating menu data from JSON files.

## Usage

### Basic Loading with Error Handling

```typescript
import { loadMenuData } from './utils/menuLoader';

try {
  const menuData = await loadMenuData();
  // Use menuData.menu to render navigation
} catch (error) {
  console.error('Failed to load menu:', error);
  // Handle error appropriately
}
```

### Loading with Automatic Fallback

```typescript
import { loadMenuDataWithFallback } from './utils/menuLoader';

// This will automatically use default menu if loading fails
const menuData = await loadMenuDataWithFallback();
// menuData is guaranteed to be valid
```

### Getting Default Menu

```typescript
import { getDefaultMenu } from './utils/menuLoader';

const defaultMenu = getDefaultMenu();
// Returns a simple fallback menu structure
```

## Data Validation

The loader automatically validates:
- Menu structure has a `menu` array
- Each menu item has a required `label` string
- Optional `url`, `icon`, and `children` properties are correctly typed
- Nested children are recursively validated
- Empty or whitespace-only labels are rejected

## Error Handling

The `loadMenuData` function throws errors for:
- Network failures (404, 500, etc.)
- Invalid JSON format
- Missing required properties
- Invalid data types

The `loadMenuDataWithFallback` function catches all errors and returns the default menu instead.
