import React, { createContext, useState, useCallback } from 'react';
import { getToken, setToken, clearToken, setUserId } from './tokenStorage';
import { login as apiLogin } from '../api/authApi';

interface AuthContextValue {
  token: string | null;
  isAuthenticated: boolean;
  login: (userId: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextValue>({
  token: null,
  isAuthenticated: false,
  login: async () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setTokenState] = useState<string | null>(getToken);

  const login = useCallback(async (userId: string, password: string) => {
    const resp = await apiLogin(userId, password);
    setToken(resp.access_token);
    setUserId(userId);
    setTokenState(resp.access_token);
  }, []);

  const logout = useCallback(() => {
    clearToken();
    setTokenState(null);
  }, []);

  return (
    <AuthContext.Provider value={{ token, isAuthenticated: !!token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
