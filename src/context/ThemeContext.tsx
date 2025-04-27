import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark', // Default to dark theme
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage if theme exists, otherwise default to 'dark'
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark'; // Default to 'dark'
  });

  useEffect(() => {
    // Store the selected theme in localStorage
    localStorage.setItem('theme', theme);
    // Add the 'dark' class to the document's root element when dark theme is selected
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
