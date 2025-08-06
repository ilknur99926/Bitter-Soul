import { AuthProvider } from '@/context/AuthContext'; 
import { LanguageProvider } from '@/context/LanguageContext';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="az">
      <body>
        <LanguageProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
