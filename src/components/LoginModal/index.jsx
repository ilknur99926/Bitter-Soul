'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import {
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";
import { auth, provider } from '@/lib/firbase'; 

export default function LoginModal({ onClose }) {
  const { language } = useLanguage();
  const { setUser } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const content = {
    az: {
      loginTitle: 'Giriş Et',
      registerTitle: 'Qeydiyyat',
      email: 'Email',
      password: 'Şifrə',
      loginButton: 'Daxil Ol',
      registerButton: 'Qeydiyyatdan Keç',
      toggleText: 'Hesabınız yoxdur? Qeydiyyatdan keçin',
      toggleToLogin: 'Artıq hesabınız var? Daxil olun',
      google: 'Google ilə daxil ol',
      errorEmpty: 'Zəhmət olmasa email və şifrəni doldurun.',
      errorGeneric: 'Xəta baş verdi',
      errorGoogle: 'Google ilə daxil olmaq mümkün olmadı',
      errorUserNotFound: 'İstifadəçi tapılmadı',
      errorWrongPassword: 'Şifrə yanlışdır'
    },
    en: {
      loginTitle: 'Login',
      registerTitle: 'Register',
      email: 'Email',
      password: 'Password',
      loginButton: 'Sign In',
      registerButton: 'Register',
      toggleText: 'Don’t have an account? Register',
      toggleToLogin: 'Already have an account? Login',
      google: 'Sign in with Google',
      errorEmpty: 'Please enter both email and password.',
      errorGeneric: 'An error occurred',
      errorGoogle: 'Google sign-in failed',
      errorUserNotFound: 'User not found',
      errorWrongPassword: 'Incorrect password'
    }
  };

  const {
    loginTitle,
    registerTitle,
    email: emailText,
    password: passwordText,
    loginButton,
    registerButton,
    toggleText,
    toggleToLogin,
    google,
    errorEmpty,
    errorGeneric,
    errorGoogle,
    errorUserNotFound,
    errorWrongPassword
  } = content[language];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError(errorEmpty);
      return;
    }

    try {
      let url = isRegistering ? '/api/register' : '/api/login';

      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        const msg = data.message?.toLowerCase();
        if (msg?.includes('istifadəçi') || msg?.includes('user')) setError(errorUserNotFound);
        else if (msg?.includes('şifrə') || msg?.includes('password')) setError(errorWrongPassword);
        else setError(errorGeneric);
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
      onClose();
      router.push('/blog');

    } catch (err) {
      setError(errorGeneric);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      localStorage.setItem('user', JSON.stringify({ name: user.displayName, email: user.email }));
      setUser({ name: user.displayName, email: user.email });
      onClose();
      router.push('/blog');
    } catch (error) {
      setError(errorGoogle);
    }
  };

  return (
    <div className=" bg-black/70 backdrop-blur-sm z-[99999] flex justify-center items-center px-4">
      <div className="bg-[#1e1b18] text-white p-8 rounded-xl shadow-2xl w-full max-w-md relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-amber-100 hover:text-red-400 text-xl"
        >
          ×
        </button>

        <h2 className="text-3xl font-bold text-center mb-6 text-amber-100">
          {isRegistering ? registerTitle : loginTitle}
        </h2>

        {error && (
          <div className="mb-4 text-red-400 text-center text-sm font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm text-amber-100">{emailText}</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-amber-50 text-black outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-amber-100">{passwordText}</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-amber-50 text-black outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-md transition font-semibold"
          >
            {isRegistering ? registerButton : loginButton}
          </button>
        </form>

        <div className="text-center mt-4">
          <button
            onClick={() => setIsRegistering(!isRegistering)}
            className="text-sm text-amber-300 hover:underline"
          >
            {isRegistering ? toggleToLogin : toggleText}
          </button>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={handleGoogleLogin}
            className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200"
          >
            🔐 {google}
          </button>
        </div>
      </div>
    </div>
  );
}
