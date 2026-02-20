import type { TokenResponse } from '../types/adminTypes';

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? '';

export async function login(userId: string, password: string): Promise<TokenResponse> {
  const response = await fetch(`${API_BASE}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user_id: userId, password }),
  });

  if (response.status === 401) {
    throw new Error('Invalid credentials');
  }

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error((err as { detail?: string }).detail ?? 'Login failed');
  }

  return response.json();
}
