'use client';

import styles from './style.module.css';

export default function Navbar({ lang, links, changeLanguage }) {
  return (
    <nav className={styles.navbar}>
  
      <div className={styles.left}>
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.logoSvg}
          aria-label="Logo"
          role="img"
        >
          <circle cx="50" cy="50" r="45" fill="#1a1a1a" stroke="#8b4513" strokeWidth="2" />
          <circle cx="50" cy="50" r="38" fill="#2c1810" />
          <text
            x="50"
            y="42"
            textAnchor="middle"
            fontFamily="Times, serif"
            fontSize="32"
            fontWeight="bold"
            fill="#d4af37"
            style={{ fontStyle: 'italic' }}
          >
            BS
          </text>
          <ellipse cx="50" cy="65" rx="10" ry="14" fill="#6b4423" />
          <ellipse cx="50" cy="65" rx="8" ry="12" fill="#8b4513" />
          <path d="M50 53 Q47 60 50 65 Q53 70 50 77" stroke="#3d2817" strokeWidth="2.5" fill="none" />
          <ellipse cx="48" cy="60" rx="2" ry="1" fill="#a0522d" opacity="0.6" />
          <ellipse cx="52" cy="70" rx="1.5" ry="0.8" fill="#a0522d" opacity="0.4" />
          <circle cx="30" cy="25" r="2" fill="#d4af37" opacity="0.7" />
          <circle cx="70" cy="25" r="2" fill="#d4af37" opacity="0.7" />
          <circle cx="25" cy="50" r="2" fill="#d4af37" opacity="0.7" />
          <circle cx="75" cy="50" r="2" fill="#d4af37" opacity="0.7" />
        </svg>
        <span className={styles.logoText}>Bitter ♥ Soul</span>
      </div>

  
      <ul className={styles.centerNavLinks}>
        {links.map(({ href, label }) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>


      <div className={styles.rightLanguageSelector}>
        <button onClick={() => changeLanguage('az')} aria-label="Switch to Azerbaijani">
          <img src="/flags/az.png" alt="Azərbaycan" className={styles.flag} />
        </button>
        <button onClick={() => changeLanguage('en')} aria-label="Switch to English">
          <img src="/flags/en.png" alt="English" className={styles.flag} />
        </button>
      </div>
    </nav>
  );
}
