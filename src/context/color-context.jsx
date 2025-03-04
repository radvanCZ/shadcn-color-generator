'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { defaultConfig, defaultHue } from '@/lib/config-defaults';
import { generateCss } from '@/lib/color-utils';

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
      const css = generateCss(config, hue);
      setGeneratedCss(css);
      
      // Apply theme to the document for live preview
      const style = document.createElement('style');
      style.textContent = css;
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