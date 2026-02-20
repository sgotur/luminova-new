import { apiFetch } from './client';
import type { Resource, ResourceCreate, ResourceUpdate, PaginatedResponse } from '../types/adminTypes';

export function listResources(params: { status?: string; search?: string; onboarded?: boolean; limit?: number; last_key?: string } = {}) {
  const q = new URLSearchParams();
  if (params.status) q.set('status', params.status);
  if (params.search) q.set('search', params.search);
  if (params.onboarded !== undefined) q.set('onboarded', String(params.onboarded));
  if (params.limit) q.set('limit', String(params.limit));
  if (params.last_key) q.set('last_key', params.last_key);
  return apiFetch<PaginatedResponse<Resource>>(`/resources?${q}`);
}

export function getResource(id: string) {
  return apiFetch<Resource>(`/resources/${id}`);
}

export function createResource(data: ResourceCreate) {
  return apiFetch<Resource>('/resources', { method: 'POST', body: JSON.stringify(data) });
}

export function updateResource(id: string, data: ResourceUpdate) {
  return apiFetch<Resource>(`/resources/${id}`, { method: 'PUT', body: JSON.stringify(data) });
}

export function deleteResource(id: string) {
  return apiFetch<void>(`/resources/${id}`, { method: 'DELETE' });
}

export function uploadResume(id: string, file: File) {
  const form = new FormData();
  form.append('file', file);
  return apiFetch<Resource>(`/resources/${id}/resume`, { method: 'POST', body: form });
}
