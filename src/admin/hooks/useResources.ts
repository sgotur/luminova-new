import { useState, useEffect, useCallback } from 'react';
import type { Resource } from '../types/adminTypes';
import { listResources } from '../api/resourcesApi';

interface UseResourcesOptions {
  status?: string;
  search?: string;
  onboarded?: boolean;
}

export function useResources(options: UseResourcesOptions = {}) {
  const [items, setItems] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastKey, setLastKey] = useState<string | null>(null);

  const fetch = useCallback(async (reset = true) => {
    setLoading(true);
    setError(null);
    try {
      const resp = await listResources({
        status: options.status,
        search: options.search,
        onboarded: options.onboarded,
        last_key: reset ? undefined : (lastKey ?? undefined),
      });
      setItems(prev => reset ? resp.items : [...prev, ...resp.items]);
      setLastKey(resp.last_key ?? null);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load resources');
    } finally {
      setLoading(false);
    }
  }, [options.status, options.search, options.onboarded]);

  useEffect(() => { fetch(true); }, [fetch]);

  const reload = () => fetch(true);
  const loadMore = () => fetch(false);

  return { items, loading, error, lastKey, reload, loadMore };
}
