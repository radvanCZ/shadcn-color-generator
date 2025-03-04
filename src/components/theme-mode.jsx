'use client';

import React from 'react';
import { useColors } from '@/context/color-context';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';

const ThemeMode = () => {
  const { isDarkMode, setIsDarkMode } = useColors();
  
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setIsDarkMode(prev => !prev)}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
    </Button>
  );
};

export default ThemeMode;