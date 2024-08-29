import React, { useState, useEffect } from 'react';
import CharacterList from './components/character-list/CharacterList';
import ThemeToggle from './components/theme-toggle/ThemeToggle';

//Styles
import './App.css';

const App: React.FC = () => {
    const [theme, setTheme] = useState<string>('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    return (
        <div className="App">
            <div className="App-header">
                <h1 className="App-title">Rick and Morty Characters</h1>
                <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
            </div>
            <CharacterList />
        </div>
    );
};

export default App;