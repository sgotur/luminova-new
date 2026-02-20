import { useState, useEffect, useCallback } from 'react';
import type { Employee } from '../types/adminTypes';
import { listEmployees } from '../api/employeesApi';

interface UseEmployeesOptions {
  search?: string;
}

export function useEmployees(options: UseEmployeesOptions = {}) {
  const [items, setItems] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastKey, setLastKey] = useState<string | null>(null);

  const fetch = useCallback(async (reset = true) => {
    setLoading(true);
    setError(null);
    try {
      const resp = await listEmployees({
        search: options.search,
        last_key: reset ? undefined : (lastKey ?? undefined),
      });
      setItems(prev => reset ? resp.items : [...prev, ...resp.items]);
      setLastKey(resp.last_key ?? null);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load employees');
    } finally {
      setLoading(false);
    }
  }, [options.search]);

  useEffect(() => { fetch(true); }, [fetch]);

  const reload = () => fetch(true);
  const loadMore = () => fetch(false);

  return { items, loading, error, lastKey, reload, loadMore };
}
