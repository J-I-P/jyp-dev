// context/ThemeContext.tsx
// This file is a Client Component because it uses React Hooks (useState, useEffect) 
// and browser APIs (localStorage, document).
'use client'; 

import React, { 
  createContext, 
  useContext, 
  useState, 
  useEffect, 
  ReactNode 
} from 'react';

// Define the two possible themes
type Theme = 'light' | 'dark';

// Define the shape of the context values
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void; // Function to switch theme
}

// Create the actual context object
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// --- ThemeProvider Component ---
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  
  // State Initialization: Check localStorage for user preference first.
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      
      // If a saved preference exists, use it.
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
      
      // If no saved preference, default to 'dark' as requested.
      return 'dark'; 
    }
    // Default to 'dark' during Server-Side Rendering (SSR).
    return 'dark'; 
  });

  // useEffect: Runs after component mounts and handles DOM updates.
  useEffect(() => {
    const root = document.documentElement; // Targets the <html> element
    
    // 1. Clear previous theme class to prevent conflicts
    root.classList.remove('light', 'dark'); 
    
    // 2. Set the current theme class (Tailwind CSS uses this 'dark' class)
    root.classList.add(theme);
    
    // 3. Persist the user's choice to local storage
    localStorage.setItem('theme', theme);
  }, [theme]); // Re-run effect whenever 'theme' state changes

  // Function to switch between themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// --- Custom Hook for Consumption ---
// Provides an easy way for components to access the theme state and toggler.
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // Throws an error if the hook is used outside the ThemeProvider
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};