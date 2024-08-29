import React from 'react';

//Styles
import './ThemeToggle.css';

interface ThemeToggleProps {
    toggleTheme: () => void;
    theme: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ toggleTheme, theme }) => {
    return (
        <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? '🌙 Activar dark mode' : '☀️ Activar light mode '}
        </button>
  );
};

export default ThemeToggle;