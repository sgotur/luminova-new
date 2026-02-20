import { apiFetch } from './client';
import type { Employee, PaginatedResponse } from '../types/adminTypes';

export function listEmployees(params: { search?: string; limit?: number; last_key?: string } = {}) {
  const q = new URLSearchParams();
  if (params.search) q.set('search', params.search);
  if (params.limit) q.set('limit', String(params.limit));
  if (params.last_key) q.set('last_key', params.last_key);
  return apiFetch<PaginatedResponse<Employee>>(`/employees?${q}`);
}

export function getEmployee(id: string) {
  return apiFetch<Employee>(`/employees/${id}`);
}
