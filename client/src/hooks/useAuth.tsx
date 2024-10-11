import { useState, useEffect } from 'react';

interface AuthState {
  isLoggedIn: 0 | 1;
  userId: string | null;
}

export const useAuth = () => {
  const [auth, setAuth] = useState<AuthState>(() => {
    const storedAuth = localStorage.getItem('auth');
    return storedAuth
      ? JSON.parse(storedAuth)
      : { isLoggedIn: 0, userId: null };
  });

  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(auth));
  }, [auth]);

  const saveAuthInfo = (userId: string) => {
    setAuth({ isLoggedIn: 1, userId });
  };

  const deleteAuthInfo = () => {
    setAuth({ isLoggedIn: 0, userId: null });
  };

  return { auth, saveAuthInfo, deleteAuthInfo };
};
