'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { defaultConfig, defaultHue } from '@/lib/config-defaults';
import { generateCss, toOklchString } from '@/lib/color-utils';

// Create context with default values to avoid undefined
const ColorContext = createContext({
  config: defaultConfig,
  setConfig: () => {},
  hue: defaultHue,
  setHue: () => {},
  isDarkMode: false,
  setIsDarkMode: () => {},
  updateColor: () => {},
  resetToDefaults: () => {},
  generatedCss: '',
  exportToIni: () => ''
});

// Generate CSS for internal application styling
const generateInternalCss = (config, hue) => {
  // For internal use, we need to fully format the oklch values with the oklch() wrapper
  const cssObj = {
    ':root': {},
    '.dark': {}
  };
  
  // Process light theme
  Object.entries(config.light).forEach(([key, { lightness, chroma }]) => {
    cssObj[':root'][`--${key}`] = toOklchString({ lightness, chroma, hue });
  });
  
  // Process dark theme
  Object.entries(config.dark).forEach(([key, { lightness, chroma }]) => {
    cssObj['.dark'][`--${key}`] = toOklchString({ lightness, chroma, hue });
  });
  
  let result = '';
  
  for (const selector in cssObj) {
    result += `${selector} {\n`;
    
    for (const prop in cssObj[selector]) {
      result += `  ${prop}: ${cssObj[selector][prop]};\n`;
    }
    
    result += '}\n\n';
  }
  
  // Add base shadcn variables with wrappers
  result += `@layer base {
    :root {
      --background: var(--background);
      --foreground: var(--foreground);

      --card: var(--card);
      --card-foreground: var(--card-foreground);

      --popover: var(--popover);
      --popover-foreground: var(--popover-foreground);

      --primary: var(--primary);
      --primary-foreground: var(--primary-foreground);

      --secondary: var(--secondary);
      --secondary-foreground: var(--secondary-foreground);

      --muted: var(--muted);
      --muted-foreground: var(--muted-foreground);

      --accent: var(--accent);
      --accent-foreground: var(--accent-foreground);

      --destructive: var(--destructive);
      --destructive-foreground: var(--destructive-foreground);

      --border: var(--border);
      --input: var(--input);
      --ring: var(--ring);
      
      --radius: 0.5rem;
    }
  
    .dark {
      --background: var(--background);
      --foreground: var(--foreground);

      --card: var(--card);
      --card-foreground: var(--card-foreground);

      --popover: var(--popover);
      --popover-foreground: var(--popover-foreground);

      --primary: var(--primary);
      --primary-foreground: var(--primary-foreground);

      --secondary: var(--secondary);
      --secondary-foreground: var(--secondary-foreground);

      --muted: var(--muted);
      --muted-foreground: var(--muted-foreground);

      --accent: var(--accent);
      --accent-foreground: var(--accent-foreground);

      --destructive: var(--destructive);
      --destructive-foreground: var(--destructive-foreground);

      --border: var(--border);
      --input: var(--input);
      --ring: var(--ring);
    }
  }`;
  
  return result;
};

export const ColorProvider = ({ children }) => {
  // Initialize with default values
  const [config, setConfig] = useState(defaultConfig);
  const [hue, setHue] = useState(defaultHue);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [generatedCss, setGeneratedCss] = useState('');
  const [isInitialized, setIsInitialized] = useState(false);
  
  // Initialize the provider
  useEffect(() => {
    // Check for system dark mode preference
    const prefersDarkMode = window.matchMedia && 
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    setIsDarkMode(prefersDarkMode);
    setIsInitialized(true);
    
    // Optional: Listen for changes in system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      setIsDarkMode(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  // Generate CSS whenever config or hue changes
  useEffect(() => {
    if (!isInitialized) return;
    
    try {
      // Generate CSS for export (values only format)
      const css = generateCss(config, hue);
      setGeneratedCss(css);
      
      // Generate CSS for internal styling (with oklch wrappers)
      const internalCss = generateInternalCss(config, hue);
      
      // Apply theme to the document for live preview
      const style = document.createElement('style');
      style.textContent = internalCss;
      style.setAttribute('id', 'theme-style');
      
      const existingStyle = document.getElementById('theme-style');
      if (existingStyle) {
        document.head.removeChild(existingStyle);
      }
      
      document.head.appendChild(style);
      
      // Apply dark mode class
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (error) {
      console.error('Error generating CSS:', error);
    }
    
    return () => {
      const style = document.getElementById('theme-style');
      if (style) {
        document.head.removeChild(style);
      }
    };
  }, [config, hue, isDarkMode, isInitialized]);
  
  // Update a specific color
  const updateColor = (theme, colorName, field, value) => {
    if (!theme || !colorName || !field) return;
    
    setConfig(prev => {
      // Safety check
      if (!prev || !prev[theme] || !prev[theme][colorName]) {
        console.error(`Cannot update color: ${theme}.${colorName}.${field}`);
        return prev;
      }
      
      return {
        ...prev,
        [theme]: {
          ...prev[theme],
          [colorName]: {
            ...prev[theme][colorName],
            [field]: value
          }
        }
      };
    });
  };
  
  // Reset to defaults
  const resetToDefaults = () => {
    setConfig(defaultConfig);
    setHue(defaultHue);
  };
  
  // Export config to INI format
  const exportToIni = () => {
    let iniContent = '[light]\n';
    
    Object.entries(config.light).forEach(([key, { lightness, chroma }]) => {
      iniContent += `${key} = ${lightness}, ${chroma}\n`;
    });
    
    iniContent += '\n[dark]\n';
    
    Object.entries(config.dark).forEach(([key, { lightness, chroma }]) => {
      iniContent += `${key} = ${lightness}, ${chroma}\n`;
    });
    
    return iniContent;
  };
  
  return (
    <ColorContext.Provider value={{
      config,
      setConfig,
      hue,
      setHue,
      isDarkMode,
      setIsDarkMode,
      updateColor,
      resetToDefaults,
      generatedCss,
      exportToIni
    }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColors = () => useContext(ColorContext);