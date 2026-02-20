import { useState, useEffect, useCallback } from 'react';
import type { Job } from '../types/adminTypes';
import { listJobs } from '../api/jobsApi';

interface UseJobsOptions {
  client_name?: string;
  search?: string;
}

export function useJobs(options: UseJobsOptions = {}) {
  const [items, setItems] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastKey, setLastKey] = useState<string | null>(null);

  const fetch = useCallback(async (reset = true) => {
    setLoading(true);
    setError(null);
    try {
      const resp = await listJobs({
        client_name: options.client_name,
        search: options.search,
        last_key: reset ? undefined : (lastKey ?? undefined),
      });
      setItems(prev => reset ? resp.items : [...prev, ...resp.items]);
      setLastKey(resp.last_key ?? null);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load jobs');
    } finally {
      setLoading(false);
    }
  }, [options.client_name, options.search]);

  useEffect(() => { fetch(true); }, [fetch]);

  const reload = () => fetch(true);
  const loadMore = () => fetch(false);

  return { items, loading, error, lastKey, reload, loadMore };
}
