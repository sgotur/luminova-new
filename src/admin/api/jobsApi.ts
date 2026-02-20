import { apiFetch } from './client';
import type { Job, JobCreate, JobUpdate, PaginatedResponse } from '../types/adminTypes';

export function listJobs(params: { client_name?: string; search?: string; limit?: number; last_key?: string } = {}) {
  const q = new URLSearchParams();
  if (params.client_name) q.set('client_name', params.client_name);
  if (params.search) q.set('search', params.search);
  if (params.limit) q.set('limit', String(params.limit));
  if (params.last_key) q.set('last_key', params.last_key);
  return apiFetch<PaginatedResponse<Job>>(`/jobs?${q}`);
}

export function getJob(id: string) {
  return apiFetch<Job>(`/jobs/${id}`);
}

export function createJob(data: JobCreate) {
  return apiFetch<Job>('/jobs', { method: 'POST', body: JSON.stringify(data) });
}

export function updateJob(id: string, data: JobUpdate) {
  return apiFetch<Job>(`/jobs/${id}`, { method: 'PUT', body: JSON.stringify(data) });
}

export function deleteJob(id: string) {
  return apiFetch<void>(`/jobs/${id}`, { method: 'DELETE' });
}
