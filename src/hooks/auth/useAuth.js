import { useEffect, useState } from 'react';
import { storage } from '@/App';

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const saveToken = (newToken) => {
    storage.set('token', newToken);
    setToken(newToken);
  };

  const clearToken = () => {
    storage.delete('token');
    setToken(null);
  };

  useEffect(() => {
    const storedToken = storage.getString('token');
    if (storedToken) {
      setToken(storedToken);
    }
    setLoading(false)
  }, []);

  return { clearToken, loading, saveToken, token };
};
