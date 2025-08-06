'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // 🔹 user-in localStorage-dan yüklənmə statusu

  // İlk dəfə səhifə yüklənəndə localStorage-dan user məlumatını oxu
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (err) {
      console.error('User məlumatı oxunarkən xəta:', err);
    } finally {
      setLoading(false); // ✅ Yükləmə tamamlandı
    }
  }, []);

  // user dəyişəndə localStorage-a yaz
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
