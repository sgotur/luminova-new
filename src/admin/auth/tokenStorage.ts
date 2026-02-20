const TOKEN_KEY = 'admin_token';
const USER_ID_KEY = 'admin_user_id';

export function getToken(): string | null {
  return sessionStorage.getItem(TOKEN_KEY);
}

export function setToken(token: string): void {
  sessionStorage.setItem(TOKEN_KEY, token);
}

export function clearToken(): void {
  sessionStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(USER_ID_KEY);
}

export function getUserId(): string | null {
  return sessionStorage.getItem(USER_ID_KEY);
}

export function setUserId(userId: string): void {
  sessionStorage.setItem(USER_ID_KEY, userId);
}
